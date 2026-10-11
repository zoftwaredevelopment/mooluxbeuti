"use client";

import { useRef, useState, useCallback, useEffect } from "react";

/**
 * Cinematic video region with REAL playback controls. Muted autoplay loop as
 * an atmospheric background, but synced to the video's actual state (mobile
 * data-saver / low-power mode can block autoplay — the button then correctly
 * shows "play" instead of lying). Progress bar doubles as a seek scrubber so
 * visitors can watch the whole clip, not just the opening. No autoplay audio.
 * Essential info lives outside the video.
 */
export function VideoPlayer({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [blocked, setBlocked] = useState(false);

  // If autoplay was blocked (mobile data-saver / low-power), surface a
  // big centered play button over the poster so the visitor knows this
  // is a video and can start it with one tap. Checked after mount AND on
  // loadeddata: React hydration can complete after the browser already
  // fired loadeddata, so relying on that handler alone misses the event.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const v = ref.current;
      if (v && v.paused && v.currentTime === 0) setBlocked(true);
    }, 1500);
    return () => window.clearTimeout(timer);
  }, []);

  const toggle = useCallback(() => {
    const v = ref.current;
    if (!v) return;
    setBlocked(false);
    if (v.paused) {
      void v.play().catch(() => {
        setPlaying(false);
        setBlocked(true);
      });
    } else {
      v.pause();
    }
  }, []);

  const seek = useCallback((e: React.MouseEvent) => {
    const v = ref.current;
    const bar = barRef.current;
    if (!v || !bar || !v.duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    v.currentTime = ratio * v.duration;
  }, []);

  const fmt = (s: number) => {
    if (!isFinite(s) || s < 0) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="group relative h-full w-full overflow-hidden">
      <video
        ref={ref}
        className="h-full w-full object-cover"
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onPlaying={() => setBlocked(false)}
        onTimeUpdate={(e) => {
          const v = e.currentTarget;
          if (v.duration) setProgress(v.currentTime / v.duration);
        }}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      >
        {/* WebM first: decodable by every Chromium build incl. headless/Linux
            without proprietary codecs; MP4 as fallback for Safari */}
        <source src={src.replace(/\.mp4$/, ".webm")} type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>
      {/* Gentle gradient so controls stay legible; text itself is external */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20"
        aria-hidden="true"
      />
      {/* Big centered play button when autoplay was blocked — one tap to start */}
      {blocked && !playing && (
        <button
          type="button"
          onClick={toggle}
          aria-label={`Play ${label}`}
          className="absolute inset-0 z-20 flex items-center justify-center bg-ink/30 transition-colors hover:bg-ink/10"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-bone/40 bg-ink/70 text-bone backdrop-blur-sm transition-transform hover:scale-105">
            <svg className="h-7 w-7 translate-x-[2px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        </button>
      )}
      {/* Controls: play/pause + scrubber + time */}
      <div className="absolute inset-x-4 bottom-4 z-10 flex items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? `Pause ${label}` : `Play ${label}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bone/30 bg-ink/60 text-bone backdrop-blur-sm transition-colors hover:border-teal hover:text-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          {playing ? (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg className="h-4 w-4 translate-x-[1px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          )}
        </button>
        <div
          ref={barRef}
          role="slider"
          aria-label={`Seek through ${label}`}
          aria-valuemin={0}
          aria-valuemax={Math.round(duration)}
          aria-valuenow={Math.round(progress * duration)}
          tabIndex={0}
          onClick={seek}
          onKeyDown={(e) => {
            const v = ref.current;
            if (!v || !v.duration) return;
            if (e.key === "ArrowRight") v.currentTime = Math.min(v.duration, v.currentTime + 2);
            else if (e.key === "ArrowLeft") v.currentTime = Math.max(0, v.currentTime - 2);
            else return;
            e.preventDefault();
          }}
          className="h-6 flex flex-1 cursor-pointer items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-bone/25">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-teal"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>
        <span className="shrink-0 text-xs tabular-nums text-bone/80" aria-hidden="true">
          {fmt(progress * duration)} / {fmt(duration)}
        </span>
      </div>
    </div>
  );
}
