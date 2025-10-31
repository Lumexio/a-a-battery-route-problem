import React from 'react';

export default function Slide4() {
  let tableContent = [
    { "header": "D", "description": "Distance matrix between location." },
    { "header": "N", "description": "Number of delivery locations." },
    { "header": "V", "description": "Number of vehicles." },
    { "header": "B_max", "description": "Maximum battery capacity." },
    { "header": " C_rate", "description": "Recharge rate (battery per time unit)." },
    { "header": "P[i]", "description": "Packages per delivery location)." },
    { "header": "T_max ", "description": "Maximum allowed time per route." },
    { "header": "S", "description": " Set of charging stations + locations." },
  ];
  return (
    <section  data-auto-animate>
      <h1 className="r-fit-text">Instance Variables</h1>
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          {tableContent.map((row, index) => (
            <tr key={index}>
              <td>{row.header}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
