import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { TabbedContainer } from './components/TabbedContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTuning: 'A440'
    };
  }

  handleSetTuning = (tuning) => {
    this.setState({
      activeTuning: tuning
    });
  };

  render() {
    return (
      <div>
        <h1>Alternate Tuning Piano</h1>
        <TabbedContainer />
      </div>
    );
  }
}
