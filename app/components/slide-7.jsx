import React from 'react';

export default function Slide7() {
    let tableContent = [
    { "header": "Routing behavior", "approach_x": "Chooses the next step based only on current location and battery.", "approach_y": "This prioritizes groups that are close together to minimize travel between deliveries." },
    { "header": "Battery usage", "approach_x": "This is efficient per customer but this might involve more returns to the charging station", "approach_y": "This is more efficient overall because it creates routes that use less battery because it reduces unnecessary travel between distant customers." },
    { "header": "Distance traveled", "approach_x": "This can result in a zig-zag pattern if customers are unevenly spaced and also might visit similar areas multiple times.", "approach_y": "Since this compacts customers into delivery routes this leads to shorter total distance." },
    { "header": "Charging ", "approach_x": "More frequent stops", "approach_y": "Less charging trips if the grouping is made correctly." },
    { "header": "Implementation", "approach_x": "Should be manageable.", "approach_y": "This requires a grouping step before routing but still should be manageable." },
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
              fontSize:"1.2rem"
            }}>{row.header}</td>
            <td style={{
              fontSize:"1.2rem"
            }}>{row.approach_x}</td>
            <td style={{
              fontSize:"1.2rem"
            }}>{row.approach_y}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
  );
}

     
