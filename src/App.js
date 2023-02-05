import React from 'react';
import './App.css';
import Provider from './Context/MyProvider';
import GalaxyBackground from './main';

function App() {
  return (
    <Provider>
      <GalaxyBackground />
    </Provider>
  );
}

export default App;
