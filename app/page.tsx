'use client';
import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/night.css';

import Slide1 from './components/slide-1';
import Slide2 from './components/slide-2';
import Slide3 from './components/slide-3';
import Slide4 from './components/slide-4';
import Slide5 from './components/slide-5';
import Slide6 from './components/slide-6';
import Slide7_3 from './components/slide-7-3';
import Slide7 from './components/slide-7';
import Slide8 from './components/slide-8';

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7_3,
  Slide7,
  Slide8,
];

export { slides };
export default function Home() {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: 'slide',
      // other config options
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn('Reveal.js destroy call failed.', e);
      }
    };
  }, []);
  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        {slides.map((S, index) => (
          <S key={index} />
        ))}
      </div>
    </div>
  );
}
