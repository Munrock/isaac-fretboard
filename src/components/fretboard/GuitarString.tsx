import React from "react";

import styles from "./Fretboard.module.css";
import Fret from "./Fret";

interface GuitarStringProps {
  tuning: string;
  lowFret: number;
  highFret: number;
}

const GuitarString: React.FC<GuitarStringProps> = ({
  tuning,
  lowFret,
  highFret,
}) => {
  // Chromatic scale for one octave
  const noteSequence = [
    "E",
    "F",
    "F#",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
    "C",
    "C#",
    "D",
    "Eb",
  ];

  // Find the index of the tuning note
  const startIdx = noteSequence.indexOf(tuning);
  // Rotate the array so it starts with the tuning note
  const rotatedNotes =
    startIdx === -1
      ? noteSequence
      : [...noteSequence.slice(startIdx), ...noteSequence.slice(0, startIdx)];

  // Render frets from lowFret to highFret
  const frets = [];
  for (let fret = lowFret; fret <= highFret; fret++) {
    // Notes repeat every 12 frets
    const note = rotatedNotes[fret % 12];
    frets.push(
      <Fret
        key={fret}
        fretNumber={fret}
        fretNote={note}
        size={highFret - lowFret}
      />
    );
  }

  return <div className={styles.stringColumn}>{frets}</div>;
};

export default GuitarString;
