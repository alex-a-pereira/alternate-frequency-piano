import React, { useState } from 'react';
import { Menu, Segment, Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';

import { PlayablePiano } from './PlayablePiano';
import { PopularSong } from './PopularSong';

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

  const { name, descriptions, popular_songs } = all_tunings[activeTuning];

  // sort to preserve some kind of predictable order
  const tunings = Object.keys(all_tunings || {}).sort();

  return (
    <Container>
      <Menu pointing>
        <Menu.Item header>Tunings</Menu.Item>
        {tunings.map((tuning, idx) => {
          return (
            <TuningListItem
              key={idx}
              tuning={tuning}
              activeTuning={activeTuning}
              setTuning={setActiveTuning}
            />
          );
        })}
      </Menu>

      <Segment raised>
        <div>
          <PlayablePiano tuning={activeTuning} />
        </div>
        <ContentContainer>
          <Header as="h2">{`Now playing in ${name}.`}</Header>
          {(descriptions || []).map((p, idx) => {
            return <p key={idx}>{p}</p>;
          })}
          {/* conditionally display popular songs header */}
          {(popular_songs || []).length ? (
            <Header>Popular Songs tuned to {name}</Header>
          ) : null}
          {/* render a popular songs section for each popular song */}
          {(popular_songs || []).map((ps, idx) => {
            const { name, artist, youtube_url } = ps;
            return (
              <PopularSong
                key={idx}
                artist={artist}
                youtube_url={youtube_url}
                name={name}
              />
            );
          })}
        </ContentContainer>
      </Segment>
    </Container>
  );
};
