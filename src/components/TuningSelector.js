import React from 'react';
import styled from 'styled-components';

const TuningSelectorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

const TuningList = styled.ul`
  border: 2px solid red;
  border-radius: 5px;
`;

const TuningListItem = styled.li`
  color: white;
`;

const Tuning = (props) => {
  return (
    <TuningListItem
      onClick={() => {
        props.setTuning(props.tuningName);
      }}
    >
      {props.tuningName}
    </TuningListItem>
  );
};

export class TuningSelector extends React.Component {
  constructor(props) {
    super(props);
    console.log('TuningSelector mounted');
  }

  handleSetTuning = (tuningName) => {
    console.log(tuningName);
  };

  render() {
    return (
      <TuningSelectorContainer>
        <TuningList>
          <Tuning setTuning={this.handleSetTuning} tuningName="A432" />
          <Tuning setTuning={this.handleSetTuning} tuningName="A440" />
        </TuningList>
      </TuningSelectorContainer>
    );
  }
}
