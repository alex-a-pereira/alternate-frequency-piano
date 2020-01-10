import React, { useState } from 'react';
import { Menu, Segment, Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';

import { PlayablePiano } from './PlayablePiano';

import { all_tunings } from '../lib/all_tunings.js';

const ContentContainer = styled.div`
  padding: 36px 48px 12px 48px;
`;

const TuningListItem = (props) => {
  const isActive = props.tuning === props.activeTuning;
  return (
    <Menu.Item
      name={props.tuning}
      active={isActive}
      onClick={() => props.setTuning(props.tuning)}
    />
  );
};

export const TabbedContainer = (props) => {
  const [activeTuning, setActiveTuning] = useState('A440');

  const { name, description_paragraphs } = all_tunings[activeTuning];

  // sort to preserve some kind of predictable order
  const tunings = Object.keys(all_tunings || {}).sort();

  return (
    <Container>
      <Menu pointing>
        <Menu.Item header>Tunings</Menu.Item>
        {tunings.map((tuning) => {
          return (
            <TuningListItem
              tuning={tuning}
              activeTuning={activeTuning}
              setTuning={setActiveTuning}
            />
          );
        })}
      </Menu>

      <Segment>
        <div>
          <PlayablePiano tuning={activeTuning} />
        </div>
        <ContentContainer>
          <Header as="h2">{`Now playing in ${name}.`}</Header>
          {(description_paragraphs || []).map((p, idx) => {
            return <p key={idx}>{p}</p>;
          })}
        </ContentContainer>
      </Segment>
    </Container>
  );
};
