import React from "react";

const PlanetCard = ({
  name,
  mass,
  radius,
  period,
  semi_major_axis,
  temperature,
  distance_light_year,
  host_star_mass,
  host_star_temperature,
}) => (
  <div>
    <h2>{name}</h2>
    <p>
      Mass:
      {mass}
    </p>
    <p>
      Radius:
      {radius}
    </p>
    <p>
      Period:
      {period}
    </p>
    <p>
      Semi Major Axis:
      {semi_major_axis}
    </p>
    <p>
      Temperature:
      {temperature}
    </p>
    <p>
      Distance from Light Year:
      {distance_light_year}
    </p>
    <p>
      Host Star Mass:
      {host_star_mass}
    </p>
    <p>
      Host Star Temperature:
      {host_star_temperature}
    </p>
  </div>
);

export default PlanetCard;
