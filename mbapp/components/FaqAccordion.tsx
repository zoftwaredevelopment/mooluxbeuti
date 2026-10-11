import { faqs } from "@/lib/site";

/**
 * Accessible FAQ accordion built on native <details>/<summary>.
 * Answers are in the HTML and expand WITHOUT JavaScript, so they work
 * even if hydration is slow or blocked. First item open by default.
 * The `name` attribute groups them (opening one closes the others).
 */
export function FaqAccordion() {
  return (
    <div className="flex flex-col gap-px overflow-hidden rounded-[2px] border border-divider bg-divider">
      {faqs.map((f, i) => (
        <details
          key={f.q}
          name="faq"
          open={i === 0}
          className="group bg-ink transition-colors open:bg-abyss/40"
        >
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-abyss/40 [&::-webkit-details-marker]:hidden">
            <span className="text-base font-medium text-bone sm:text-lg">
              {f.q}
            </span>
            <span
              aria-hidden="true"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-divider text-teal transition-transform duration-300 group-open:rotate-45 group-open:border-teal"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <div className="px-6 pb-6">
            <p className="max-w-2xl text-sm leading-relaxed text-silver sm:text-base">
              {f.a}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}

