import React from 'react';

export default function Slide3() {
  let contentsText = [
    {
      "title": "Why is this challenging?",
      "style": { "textAlign": "left" },
      "content": [
        "Nodes: customers, depots, charging stations.",
        "Edges: travel distances and energy costs."
      ]
    }
  ];
  return (
    <>
      {contentsText.map((item, index) => (
        
        <section data-id="box" key={index} data-auto-animate >
          <h1 className="r-fit-text">{item?.title}</h1>
          <ul>
            {item?.content.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>

           <img data-preview-image src="/graphmap.png" alt="Graph Representation" style={{ maxWidth: '600px', marginTop: '2rem' }} />
        </section>
        
      ))}
   
    </>
  );
}

