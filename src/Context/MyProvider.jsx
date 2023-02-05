import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import planetsOfTheSolarSystem from './planetsMock';

function Provider({ children }) {
  const planetsArray = planetsOfTheSolarSystem;
  const [planets, setPlanets] = useState(planetsArray);

  useEffect(() => {
  });

  const contextValue = {
    planets,
    setPlanets,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
