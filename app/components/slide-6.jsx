import React from 'react';

export default function Slide6() {
  let textContent = [
    {
      title: 'Approach X:',
      subtitle: 'Nearest neighbor',
      text: 'In this approach we would always go to the closest neighbor that hasn’t been served that we can reach with the remaining battery. This is also considering the battery leftover after reaching the neighbor. For example if we are at customer 4 and we can reach customer 5 but we won’t have enough battery to get back to the charging station we won’t go to customer 5. This would make the van go back to the charging station before completing the route.',
    },
    {
      title: 'Approach Y:',
      subtitle: 'Grouping customers(Cluster)',
      text: 'For this approach we believe in grouping the customers in order to achieve the most deliveries in one go. For example, if we have a grouping of 4 customers which all are separated by a distance of (1 mile from each other) instead of another grouping where distance vary from 2-5 miles from each other the system would guide the driver/van to the group of 4 customers to deliver the most packages with the least battery usage.',
    },
  ];
  return (
    <section>
      {textContent.map((item, index) => (
        <div key={index}>
          <h3
            style={{
              fontSize: '1.6rem',
            }}
          >
            {item.title}
          </h3>
          <h4
            style={{
              fontSize: '1.6rem',
            }}
          >
            {item.subtitle}
          </h4>
          <p
            style={{
              fontSize: '1.6rem',
              textAlign: 'left',
            }}
          >
            {item.text}
          </p>
        </div>
      ))}
    </section>
  );
}
