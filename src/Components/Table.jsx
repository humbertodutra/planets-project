import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import '../App.css';

function Table() {
  const { planets } = useContext(MyContext);
  const tableRows = planets.map((planet, index) => (
    <tr className="tr" key={ index }>
      <td className="td">{planet.name}</td>
      <td className="td">{planet.mass}</td>
      <td className="td">{planet.radius}</td>
      <td className="td">{planet.period}</td>
      <td className="td">{planet.semi_major_axis}</td>
      <td className="td">{planet.temperature}</td>
      <td className="td">{planet.distance_light_year}</td>
      <td className="td">{planet.host_star_mass}</td>
      <td className="td">{planet.host_star_temperature}</td>
    </tr>
  ));
  const table = (
    <div className="tableDiv">
      <table className="table">
        <thead className="th">
          <tr className="trHead">
            <th className="tableH">Name</th>
            <th className="tableH">Mass</th>
            <th className="tableH">Radius</th>
            <th className="tableH">Period</th>
            <th className="tableH">Semi-major Axis</th>
            <th className="tableH">Temperature</th>
            <th className="tableH">Distance from Light Year</th>
            <th className="tableH">Host Star Mass</th>
            <th className="tableH">Host Star Temperature</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>);

  return (
    <div>
      {planets.length > 0 ? table
        : <p>Loading... If the Api response takes a long time, try with new filters </p>}
    </div>
  );
}

export default Table;
