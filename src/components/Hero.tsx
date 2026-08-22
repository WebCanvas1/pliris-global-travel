import CTAButton from './CTAButton';

/**
 * Hero section — full viewport, aspirational headline and the single CTA.
 * No competing actions, no secondary content. Entrance is a gentle rise-in.
 */
export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <div className="animate-rise-in flex flex-col items-center">
        {/* Headline — three deliberate lines with generous breathing room */}
        <h1 className="max-w-4xl font-serif text-[2.1rem] font-medium tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          <span className="block leading-[1.35]">
            Travel More<span className="text-white/70">...</span>
          </span>
          <span className="block leading-[1.35] mt-7 sm:mt-9 md:mt-11">
            Create Unforgettable Memories<span className="text-white/70">...</span>
          </span>
          <span className="block leading-[1.35] mt-7 sm:mt-9 md:mt-11">
            For Less.
          </span>
        </h1>

        {/* CTA */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
