import React from 'react';
import styled from 'styled-components';
import { Container, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AppHeader } from './components/AppHeader';
import { TabbedContainer } from './components/TabbedContainer';

const AppContainer = styled(Container)`
  background-color: #dfe4ea;
  padding: 36px 24px 48px;
  border-radius: 5px;
  margin-top: 24px;
`;

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
      <AppContainer>
        <AppHeader />
        <Divider section />
        <TabbedContainer />
      </AppContainer>
    );
  }
}
