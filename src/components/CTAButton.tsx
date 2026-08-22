import { ArrowRight } from 'lucide-react';
import { BOOKING_ENABLED, BOOKING_URL } from '@/site.config';

/**
 * The single primary call-to-action for the homepage.
 *
 * Version 1.0: booking is not connected. When BOOKING_ENABLED becomes true,
 * the button renders as a real link to BOOKING_URL. Until then it is a
 * disabled button with a subtle "coming soon" caption beneath it.
 */
export default function CTAButton() {
  const baseClasses =
    'group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-4 font-sans text-sm font-medium tracking-cta text-white backdrop-blur-md transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';

  if (BOOKING_ENABLED) {
    return (
      <a
        href={BOOKING_URL}
        className={`${baseClasses} hover:bg-white/20 hover:border-white/40`}
        aria-label="Search, compare and book your next journey"
      >
        SEARCH. COMPARE. BOOK.
        <ArrowRight
          className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1"
          aria-hidden="true"
        />
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled
      aria-label="Search, compare and book — booking experience coming soon"
      className={`${baseClasses} cursor-not-allowed opacity-90 hover:bg-white/10 hover:border-white/25`}
    >
      SEARCH. COMPARE. BOOK.
    </button>
  );
}
