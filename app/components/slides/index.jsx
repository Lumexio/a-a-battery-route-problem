import React from 'react';
import Slide1 from '../slide-1';
import Slide2 from '../slide-2';
import Slide3 from '../slide-3';
import Slide4 from '../slide-4';
import Slide5 from '../slide-5';
import Slide6 from '../slide-6';
import Slide7 from '../slide-7';
import Slide7_3  from '../slide-7-3';
import Slide8 from '../slide-8';
import Slide9 from '../slide-9';
import Slide10 from '../slide-10';

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
  Slide9,
  Slide10,
];

export { slides };

export default function Slides({ start = 0 }) {
  const Slide = slides[start] || slides[0];
  return (
    <div className="slides-wrapper">
      <Slide />
    </div>
  );
}
