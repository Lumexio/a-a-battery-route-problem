import React from 'react';

export default function Slide7() {
    let tableContent = [
    { "header": "Routing behavior", "Approach X": "Chooses the next step based only on current location and battery.", "Approach Y": "This prioritizes groups that are close together to minimize travel between deliveries." },
    { "header": "Battery usage", "Approach X": "This is efficient per customer but this might involve more returns to the charging station", "Approach Y": "This is more efficient overall because it creates routes that use less battery because it reduces unnecessary travel between distant customers." },
    { "header": "Distance traveled", "Approach X": "This can result in a zig-zag pattern if customers are unevenly spaced and also might visit similar areas multiple times.", "Approach Y": "Since this compacts customers into delivery routes this leads to shorter total distance." },
    { "header": "Charging ", "Approach X": "More frequent stops", "Approach Y": "Less charging trips if the grouping is made correctly." },
    { "header": "Implementation", "Approach X": "Should be manageable.", "Approach Y": "This requires a grouping step before routing but still should be manageable." },
  ]
  return (
    <section>
<table>
      <thead>
        <tr>
          <th style={{
            fontSize:"1.6rem"
          }}>Aspect</th>
          <th style={{
            fontSize:"1.6rem"
          }}>Approach X</th>
          <th style={{
            fontSize:"1.6rem"
          }}>Approach Y</th>
        </tr>
      </thead>
      <tbody>
        {tableContent.map((row, index) => (
          <tr key={index}>
            <td style={{
              fontSize:"1.6rem"
            }}>{row.header}</td>
            <td style={{
              fontSize:"1.6rem"
            }}>{row.description}</td>
            <td style={{
              fontSize:"1.6rem"
            }}>{row.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
  );
}
