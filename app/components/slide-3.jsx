import React from 'react';

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

          <img
            data-preview-image
            src="/graphmap.png"
            alt="Graph Representation"
            style={{ maxWidth: '400px', marginTop: '2rem' }}
          />
        </section>
      ))}
    </>
  );
}
