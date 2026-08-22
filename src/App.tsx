import BackgroundSlideshow, { type SlideImage } from './components/BackgroundSlideshow';
import Header from './components/Header';
import Hero from './components/Hero';
import MinimalFooter from './components/MinimalFooter';
import { SLIDESHOW_INTERVAL_MS } from './site.config';

/**
 * Cohesive premium destination imagery (full-screen slideshow).
 * Each slide has a landscape source (desktop) and a portrait-cropped source (mobile).
 */
const slides: SlideImage[] = [
  {
    src: 'https://images.pexels.com/photos/27099922/pexels-photo-27099922.jpeg?auto=compress&cs=tinysrgb&w=1920',
    srcPortrait: 'https://images.pexels.com/photos/27099922/pexels-photo-27099922.jpeg?auto=compress&cs=tinysrgb&w=940',
    alt: 'Aerial view of an overwater resort on the turquoise waters of the Maldives',
  },
  {
    src: 'https://images.pexels.com/photos/37844509/pexels-photo-37844509.jpeg?auto=compress&cs=tinysrgb&w=1920',
    srcPortrait: 'https://images.pexels.com/photos/37844509/pexels-photo-37844509.jpeg?auto=compress&cs=tinysrgb&w=940',
    alt: 'Whitewashed Mediterranean architecture above the Aegean Sea in Santorini',
  },
  {
    src: 'https://images.pexels.com/photos/15057978/pexels-photo-15057978.jpeg?auto=compress&cs=tinysrgb&w=1920',
    srcPortrait: 'https://images.pexels.com/photos/15057978/pexels-photo-15057978.jpeg?auto=compress&cs=tinysrgb&w=940',
    alt: 'Majestic alpine peaks shrouded in clouds',
  },
  {
    src: 'https://images.pexels.com/photos/31048512/pexels-photo-31048512.jpeg?auto=compress&cs=tinysrgb&w=1920',
    srcPortrait: 'https://images.pexels.com/photos/31048512/pexels-photo-31048512.jpeg?auto=compress&cs=tinysrgb&w=940',
    alt: 'Twilight cityscape of Tokyo with iconic landmarks and city lights',
  },
  {
    src: 'https://images.pexels.com/photos/12811877/pexels-photo-12811877.jpeg?auto=compress&cs=tinysrgb&w=1920',
    srcPortrait: 'https://images.pexels.com/photos/12811877/pexels-photo-12811877.jpeg?auto=compress&cs=tinysrgb&w=940',
    alt: 'Idyllic tropical beach with coconut palms and turquoise waters',
  },
  {
    src: 'https://images.pexels.com/photos/37843544/pexels-photo-37843544.jpeg?auto=compress&cs=tinysrgb&w=1920',
    srcPortrait: 'https://images.pexels.com/photos/37843544/pexels-photo-37843544.jpeg?auto=compress&cs=tinysrgb&w=940',
    alt: 'Northern lights dancing across the Iceland night sky',
  },
  {
    src: 'https://images.pexels.com/photos/27306497/pexels-photo-27306497.jpeg?auto=compress&cs=tinysrgb&w=1920',
    srcPortrait: 'https://images.pexels.com/photos/27306497/pexels-photo-27306497.jpeg?auto=compress&cs=tinysrgb&w=940',
    alt: 'Lush rice terraces of Ubud, Bali',
  },
  {
    src: 'https://images.pexels.com/photos/5125391/pexels-photo-5125391.jpeg?auto=compress&cs=tinysrgb&w=1920',
    srcPortrait: 'https://images.pexels.com/photos/5125391/pexels-photo-5125391.jpeg?auto=compress&cs=tinysrgb&w=940',
    alt: 'Elephants walking through the African savanna at sunset',
  },
  {
    src: 'https://images.pexels.com/photos/538507/pexels-photo-538507.jpeg?auto=compress&cs=tinysrgb&w=1920',
    srcPortrait: 'https://images.pexels.com/photos/538507/pexels-photo-538507.jpeg?auto=compress&cs=tinysrgb&w=940',
    alt: 'Serene alpine lake with mirrored mountain reflections',
  },
];

export default function App() {
  return (
    <main className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      <BackgroundSlideshow images={slides} intervalMs={SLIDESHOW_INTERVAL_MS} />
      <Header />
      <Hero />
      <MinimalFooter />
    </main>
  );
}
