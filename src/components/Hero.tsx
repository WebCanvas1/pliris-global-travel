import CTAButton from './CTAButton';

/**
 * Hero section — full viewport, aspirational headline and the single CTA.
 * No competing actions, no secondary content. Entrance is a gentle rise-in.
 *
 * Font sizes and vertical spacing use clamp() so the layout scales smoothly
 * across desktop, laptop, tablet and mobile widths without overflowing the
 * viewport. The three headline lines stay on separate lines and the middle
 * line remains on one line on standard desktop/laptop widths.
 */
export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <div className="animate-rise-in flex flex-col items-center w-full">
        {/* Headline — three deliberate lines */}
        <h1
          className="max-w-[min(52rem,92vw)] font-serif font-medium tracking-tight text-white text-balance"
          style={{
            fontSize: 'clamp(1.6rem, 4.2vw + 0.4rem, 4rem)',
            lineHeight: 1.32,
          }}
        >
          <span className="block">
            Travel More<span className="text-white/70">...</span>
          </span>
          <span
            className="block sm:whitespace-nowrap"
            style={{ marginTop: 'clamp(0.85rem, 2.2vh, 2.5rem)' }}
          >
            Create Unforgettable Memories<span className="text-white/70">...</span>
          </span>
          <span
            className="block"
            style={{ marginTop: 'clamp(0.85rem, 2.2vh, 2.5rem)' }}
          >
            For Less.
          </span>
        </h1>

        {/* CTA */}
        <div style={{ marginTop: 'clamp(1.75rem, 5.5vh, 4.5rem)' }}>
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
