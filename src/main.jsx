import React from 'react';
import './App.css';
import Table from './Components/Table';
import Filter from './Components/FilterOptions';
import FilterByName from './Components/FilterByName';

const GalaxyBackground = () => (
  <main className="Main">
    <div className="title-div">
      <h1 className="title">Galaxy System</h1>
      <p className="description">
        {' '}
        This project is using the api to fetch the list of planets
        https://api-ninjas.com/api/planets
        {' '}
      </p>
    </div>
    <Filter />
    <FilterByName />
    <Table />
  </main>
);

export default GalaxyBackground;
