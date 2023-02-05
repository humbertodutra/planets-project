import React, { useState, useContext } from 'react';
import apiRequest from '../ServicesApi/apiRequest';
import MyContext from '../Context/MyContext';

const FilterByName = () => {
  const { setPlanets } = useContext(MyContext);
  const [planetName, setName] = useState('Earth');
  const [isDisabled, setIsDisabled] = useState(false);
  const NoMagic = 500;

  const buttonControll = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, NoMagic);
  };

  const handleSubmit = async (e) => {
    buttonControll();
    e.preventDefault();
    const params = `${'name'}=${planetName}`;
    const response = await apiRequest(params);
    setPlanets(response);
  };

  return (
    <form className="filter-form">
      <label className="filter-label" htmlFor="filter-input">
        Planet Name:
        <input
          className="filter-input"
          type="text"
          value={ planetName }
          onChange={ (e) => setName(e.target.value) }
        />
      </label>
      <button
        color="black"
        type="submit"
        className="filter-submit"
        disabled={ isDisabled }
        onClick={ handleSubmit }
      >
        {' '}
        Filter by name (Enslish)
        {' '}

      </button>
    </form>
  );
};

export default FilterByName;
