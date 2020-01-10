import React from 'react';
import styled from 'styled-components';
import { Segment, Header } from 'semantic-ui-react';

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const InfoContainer = styled.div`
  width: 85%;
  margin: auto;
  text-align: left;
  margin-top: 12px;
  margin-bottom: 24px;
`;

const Seg = styled(Segment)`
  width: 90%;
  margin: auto !important;
`;

export const AppHeader = () => {
  return (
    <HeaderContainer>
      <Header as="h1">Alternate Tuning Piano</Header>
      <br />
      <Seg raised>
        <InfoContainer>
          <h3>What is an alternate tuning?</h3>
          <p>
            Musicians typically choose to tune their instruments to the
            frequency A440, meaning that the A note above middle C resonates at
            440 hertz. However, some artists choose to tune their instruments to
            alternate frequencies.
          </p>

          <h3>How do I use the Alternate Tuning Piano?</h3>
          <p>
            The Alternate Tuning Piano allows you to play piano, using your
            computer's mouse or keyboard, in any of the available frequencies.
          </p>
          <p>
            Keys on the piano can be played using the labeled letters and
            symbols on your keyboard.
          </p>
        </InfoContainer>
      </Seg>
    </HeaderContainer>
  );
};
