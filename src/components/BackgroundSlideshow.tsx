import { useEffect, useRef, useState } from 'react';

export interface SlideImage {
  /** Full-resolution landscape URL. */
  src: string;
  /** Portrait/cropped URL for mobile viewports. */
  srcPortrait: string;
  alt: string;
}

interface BackgroundSlideshowProps {
  images: SlideImage[];
  intervalMs: number;
}

/**
 * Full-screen, slow crossfading destination slideshow.
 *
 * - Preloads only the next image to keep the first paint fast.
 * - Crossfades by layering the active and incoming <img> and animating opacity.
 * - Honors prefers-reduced-motion via the global CSS overrides (instant transitions).
 */
export default function BackgroundSlideshow({ images, intervalMs }: BackgroundSlideshowProps) {
  const [index, setIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = () => {
    setIndex((current) => {
      setPreviousIndex(current);
      return (current + 1) % images.length;
    });
  };

  useEffect(() => {
    timerRef.current = setTimeout(advance, intervalMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, intervalMs]);

  // Preload the upcoming image so the crossfade is instant when it activates.
  useEffect(() => {
    const nextIdx = (index + 1) % images.length;
    const next = images[nextIdx];
    const preload = new Image();
    preload.src = next.src;
    const preloadPortrait = new Image();
    preloadPortrait.src = next.srcPortrait;
  }, [index, images]);

  const active = images[index];

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-black"
      role="img"
      aria-label="Rotating destination photography"
    >
      {/* Outgoing slide — fades out on top of the new one */}
      {previousIndex !== null && previousIndex !== index && (
        <img
          key={`prev-${previousIndex}`}
          src={images[previousIndex].src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover animate-slide-fade-out"
          loading="eager"
        />
      )}

      {/* Active slide — fades in */}
      <img
        key={`active-${index}`}
        src={active.src}
        srcSet={`${active.srcPortrait} 940w, ${active.src} 1920w`}
        sizes="100vw"
        alt={active.alt}
        className="absolute inset-0 h-full w-full object-cover animate-slide-fade-in"
        loading={index === 0 ? 'eager' : 'lazy'}
        fetchPriority={index === 0 ? 'high' : 'auto'}
      />

      {/* Readability overlay: subtle dark gradient, heavier toward bottom */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/70"
        aria-hidden="true"
      />
      {/* Slight vignette for cinematic depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.45) 100%)',
        }}
        aria-hidden="true"
      />
    </div>
  );
}
