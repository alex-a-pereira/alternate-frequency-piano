import React from 'react';
import YouTube from 'react-youtube';
import { Dimmer, Loader, Segment, Transition } from 'semantic-ui-react';
import styled from 'styled-components';

const PopSongContainer = styled.div`
  margin-bottom: 24px;
  font-size: 18px;
`;

const YoutubeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 0 12px;
`;

const RoundedYoutube = styled(YouTube)`
  border-radius: 5px;
  display: ${(props) => (props.ready ? 'initial' : 'none')};
`;

export class PopularSong extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  finishedLoading = () => {
    this.setState({ isLoading: false });
  };

  render() {
    const youtube_id = new URL(this.props.youtube_url).searchParams.get('v');
    return (
      <PopSongContainer>
        <Segment>
          <Transition
            visible={this.state.isLoading}
            animation="scale"
            duration={750}
          >
            <Dimmer active={this.state.isLoading}>
              <Loader size="huge" />
            </Dimmer>
          </Transition>
          <p>
            <b>{this.props.artist}</b>
            {'  -  '}
            <a href={this.props.youtube_url} target="__blank">
              {this.props.name}
            </a>
          </p>
          <YoutubeContainer>
            <RoundedYoutube
              videoId={youtube_id}
              onReady={this.finishedLoading}
              ready={!this.props.isLoading}
            />
          </YoutubeContainer>
        </Segment>
      </PopSongContainer>
    );
  }
}
