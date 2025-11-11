import Image from 'next/image';
export default function Slide2() {
  let contentsText = [
    {
      title: 'What is the problem?',
      style: { marginBottom: '2rem', textAlign: 'left' },
      content: [
        'The Vehicle Routing Problem(VRP) - deciding where and in what order to complete deliveries; we are working on a Green version.',
        'Companies use EV delivery vans and must plan routes that serve all customers before the batteries run out, while also choosing when and where to charge.',
      ],
    },
    {
      title: 'Examples',
      style: { marginBottom: '2rem', textAlign: 'left' },
      content: [
        'Local business',
        'Hospitals',
        'Pharmacies',
        'Delivery companies.',
        'Grocery Delivery During Busy Hours',
      ],
      src: '/example.jpg',
    },
  ];

  return (
    <>
      {contentsText.map((item, index) => (
        <section key={index} data-auto-animate style={item?.style}>
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
              gap: '1rem',
              marginTop: '1rem',
            }}
          >
            <p>{item?.text}</p>
          </div>
        </section>
      ))}
    </>
  );
}
