import React from 'react';

export default function Slide4() {
  return (
    <>
      <section data-auto-animate>
        <h1 className="r-fit-text">Battery & Charging</h1>
        <p>
          Battery capacity, consumption rates, and charging times affect
          routing.
        </p>
        <p>Consider partial charging strategies.</p>
      </section>
      <section data-auto-animate data-auto-animate-restart>
        <h1 className="r-fit-text">Battery & Charging</h1>
        <p>
          Battery capacity, consumption rates, and charging times affect
          routing.
        </p>
        <p>Consider partial charging strategies.</p>
        <div className="r-spacer r-spacer-2x" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <img width={200} src="battery-capacity.png" alt="Battery Capacity" />
          <img
            width={200}
            src="battery-consumption.png"
            alt="Charging Strategy"
          />
          <img width={200} src="battery-range.png" alt="Partial Charging" />
        </div>
      </section>
    </>
  );
}
