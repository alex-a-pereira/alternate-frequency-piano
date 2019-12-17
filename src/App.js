import React from 'react';
import './App.css';

import { TuningSelector } from './components/TuningSelector';
import { PlayablePiano } from './components/PlayablePiano';

const App = () => {
  return (
    <div>
      <h1>Alternate Tuning Piano</h1>
      <TuningSelector />
      <PlayablePiano />
    </div>
  );
};

export default App;
