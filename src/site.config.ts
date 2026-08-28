/**
 * Single source of truth for site-wide configuration.
 *
 * The booking destination is intentionally not wired up for Version 1.0.
 * When the booking platform is ready, set BOOKING_ENABLED to true and
 * update BOOKING_URL — the primary CTA will then link there directly.
 */

export const BOOKING_URL = 'https://PlirisGlobalBooking.com';

export const BOOKING_ENABLED = false;

/** Slideshow transition timing (milliseconds). */
export const SLIDESHOW_INTERVAL_MS = 7000;
