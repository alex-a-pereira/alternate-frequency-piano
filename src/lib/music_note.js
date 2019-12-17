import path from 'path';

export default class MusicNote {
  constructor(tuning, midiNumber) {
    this.tuning = tuning;
    this.midiNumber = midiNumber;

    this.filePath = path.join('notes', tuning, `${midiNumber}.mp3`);

    this.elementRef = null; // changes upon re-render, so it gets dynamically set during render
  }

  play() {
    this.elementRef.currentTime = 0;
    this.elementRef.play();
  }

  stop() {
    // re-exporting MP3 files should fix the clipping problem, but if it doesn't
    // then we should implement a "fade-out" decay function here
  }

  // one might wonder why I did this instead of using a for loop like a sane human.
  // one might also make assumptions of my skills as a programmer based on this code.
  // in summary - "can I" is more fun than "should I."
  // because this code is so awful (on purpose, I assure you), here's an explaination of what it does
  // it takes inputs of midi note numbers like 48 (c3), 72 (c5), etc. and returns an object with of a range
  // of midi notes, such as { '48': new MusicNote('A440', 48) ......  '72': new MusicNote('A440', 72) }
  static rangeToNotesObject(tuning, startMidiNumber, endMidiNumber) {
    return [...Array(endMidiNumber - startMidiNumber + 1).keys()]
      .map((_, idx) => idx + startMidiNumber)
      .reduce((obj, num) => {
        obj[num] = new MusicNote(tuning, num);
        return obj;
      }, {});
  }
  // I want to make it known that this terrible function was just for fun
  // I can write better code than this I promise
}
