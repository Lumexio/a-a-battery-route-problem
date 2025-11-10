import React from 'react';
import Image from 'next/image';
export default function Slide3() {
  let contentsText = [
    {
      title: 'Why is this challenging?',
      style: { textAlign: 'left' },
      content: [
        'EV’s have limited battery capacity',
        'Charging takes time and not all stations are available as well as having less stations than vans.',
        'More customers is the same as more complex routing decisions.',
      ],
    },
  ];
  let imgSrc = [
    { alt: 'Battery Capacity', src: '/battery-capacity.png' },
    { alt: 'Battery Consumption', src: '/battery-consumption.png' },
    { alt: 'Battery Range', src: '/battery-range.png' },
  ];
  return (
    <>
      {contentsText.map((item, index) => (
        <section data-id="box" key={index} data-auto-animate>
          <h1 className="r-fit-text">{item?.title}</h1>
          <ul>
            {item?.content.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '4rem',
            }}
          >
            {imgSrc.map((src, i) => (
              <Image
                key={i}
                data-preview-image
                src={src.src}
                alt={src.alt}
                width={200}
                height={200}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
