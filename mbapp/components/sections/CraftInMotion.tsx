import { VideoPlayer } from "@/components/VideoPlayer";
import { Reveal } from "@/components/Reveal";

/**
 * SECTION D — THE CRAFT IN MOTION
 * A cinematic, full-bleed video region using authentic supplied footage.
 * Muted, poster frame, accessible toggle. Info lives outside the video.
 */
export function CraftInMotion() {
  return (
    <section className="relative bg-abyss py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-14">
          {/* Editorial copy */}
          <div>
            <Reveal>
              <span className="eyebrow flex items-center gap-3 text-teal">
                <span className="inline-block h-px w-8 bg-teal/60" />
                The craft in motion
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="display-lg mt-5 text-4xl text-bone sm:text-5xl">
                Where technique meets{" "}
                <span className="text-metal italic">care.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-silver sm:text-lg">
                Every retwist, every part, every finished style is done by hand
                with attention to tension, your hairline and the health of your
                locs. This is real work, performed by a real specialist.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-silver">
                <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-teal" />
                  Retwisting
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-teal" />
                  Styling
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-teal" />
                  Finishing
                </span>
              </div>
            </Reveal>
          </div>

          {/* Video region */}
          <Reveal variant="mask" delay={80} className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] ring-1 ring-teal/15 sm:aspect-[5/4]">
              <VideoPlayer
                src="/media/opt/videos/updo.mp4"
                poster="/media/opt/videos/updo-poster.webp"
                label="Loctician styling and finishing locs"
              />
            </div>
            {/* teal accent line */}
            <span
              aria-hidden="true"
              className="absolute -left-3 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-teal to-transparent md:block"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
