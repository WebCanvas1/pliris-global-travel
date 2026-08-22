/**
 * Minimal translucent header with the Pliris Global Travel wordmark.
 * The header is intentionally navigation-free per the Version 1.0 brief.
 */
export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-6 sm:py-8">
        <div className="rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-md sm:px-7 sm:py-2.5">
          <span className="font-sans text-[0.95rem] font-medium tracking-brand text-white/90 sm:text-lg">
            PLIRIS GLOBAL TRAVEL
          </span>
        </div>
      </div>
    </header>
  );
}
