import React from 'react';
import styled from 'styled-components';

import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

import MusicNote from '../lib/music_note';

const PianoContainer = styled.div`
  width: 80%;
  margin: auto;
`;

const firstNote = MidiNumbers.fromNote('c3');
const lastNote = MidiNumbers.fromNote('c5');
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: firstNote,
  lastNote: lastNote,
  keyboardConfig: KeyboardShortcuts.HOME_ROW
});

export class PlayablePiano extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: MusicNote.rangeToNotesObject('A440', firstNote, lastNote)
    };
  }

  playNote = (midiNumber) => {
    this.state.notes[midiNumber].play();
  };

  stopNote = (midiNumber) => {
    this.state.notes[midiNumber].stop();
  };

  render() {
    return (
      <PianoContainer>
        {/* create an <audio> tag for and assign a ref to each MusicNote object */}
        {Object.values(this.state.notes || {}).map((note) => {
          return (
            <audio
              ref={(ref) => (note.elementRef = ref)}
              key={note.midiNumber}
              src={note.filePath}
            />
          );
        })}
        <Piano
          noteRange={{ first: firstNote, last: lastNote }}
          playNote={this.playNote}
          stopNote={this.stopNote}
          width={1000}
          keyboardShortcuts={keyboardShortcuts}
        />
      </PianoContainer>
    );
  }
}
