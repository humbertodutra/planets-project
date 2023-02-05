import React, { useState, useContext } from 'react';
import '../App.css';
import apiRequest from '../ServicesApi/apiRequest';
import MyContext from '../Context/MyContext';

function Filter() {
  const [selectedOption, setSelectedOption] = useState('min_mass');
  const [value, setValue] = useState(1);
  const { setPlanets } = useContext(MyContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const noMagic = 500;
  const buttonControll = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, noMagic);
  };

  const handleSubmit = async (e) => {
    buttonControll();
    e.preventDefault();
    const params = `${selectedOption}=${value}`;
    const response = await apiRequest(params);
    setPlanets(response);
  };

  return (
    <form className="filter-form">
      <h3 className="filter-title">Space Filter</h3>
      <div className="filter-container">
        <label
          htmlFor="select-option"
          className="filter-label"
        >
          Option:

          <select
            id="select-option"
            value={ selectedOption }
            onChange={ (e) => setSelectedOption(e.target.value) }
            className="filter-select"
          >
            <option value="min_mass">Min Mass</option>
            <option value="max_mass">Max Mass</option>
            <option value="min_radius">Min Radius</option>
            <option value="max_radius">Max Radius</option>
            <option value="min_period">Min Period</option>
            <option value="max_period">Max Period</option>
            <option value="min_temperature">Min Temperature</option>
            <option value="max_temperature">Max Temperature</option>
            <option value="min_distance_light_year">Min Distance Light Year</option>
            <option value="max_distance_light_year">Max Distance Light Year</option>
            <option value="min_semi_major_axis">Min Semi Major Axis</option>
            <option value="max_semi_major_axis">Max Semi Major Axis</option>
          </select>
          <br />
        </label>
        <label htmlFor="value" className="filter-label">
          Value:
          <input
            type="number"
            id="value"
            value={ value }
            onChange={ (e) => setValue(e.target.value) }
            className="filter-input"
          />
        </label>
        <br />
        <button
          className="filter-submit"
          onClick={ handleSubmit }
          type="submit"
          disabled={ isDisabled }
        >
          Filter

        </button>

      </div>
    </form>
  );
}

export default Filter;
