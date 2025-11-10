import React from 'react';

export default function Slide5() {
  let tableContent = [
    {
      header: 'Routing[v]',
      description:
        'Ordered list of stops for vehicles. The vehicle goes from i to j.',
      type: 'List',
    },
    {
      header: 'x[i][j][v]',
      description:
        'Binary variable = 1 If vehicle v travels directly from location i to j; 0 otherwise.',
      type: 'Binary 1 or 0',
    },
    {
      header: 'battery[i][v]',
      description: 'Battery of vehicle on arrival at coordinate i',
      type: 'Float/int',
    },
    {
      header: 'time[v]',
      description: 'Total time taken(including route,charging, and delivery.)',
      type: 'Float/int',
    },
  ];
  return (
    <section data-auto-animate>
      <h1 className="r-fit-text">Decision Variables</h1>
      <p className="r-fit-text " style={{ textAlign: 'left' }}>
        These variables are determined by the algorithm to minimize the total
        cost. Here i and j represent the location indices from 0 to N and v
        represents each vehicle in the fleet.
      </p>
      <table className="r-frame">
        <thead>
          <tr>
            <th
              style={{
                fontSize: '1.6rem',
              }}
            >
              Variable
            </th>
            <th
              style={{
                fontSize: '1.6rem',
              }}
            >
              Meaning
            </th>
            <th
              style={{
                fontSize: '1.6rem',
              }}
            >
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          {tableContent.map((row, index) => (
            <tr key={index}>
              <td
                style={{
                  fontSize: '1.6rem',
                }}
              >
                {row.header}
              </td>
              <td
                style={{
                  fontSize: '1.6rem',
                }}
              >
                {row.description}
              </td>
              <td
                style={{
                  fontSize: '1.6rem',
                }}
              >
                {row.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
