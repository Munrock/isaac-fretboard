import React from "react";

import styles from "./Fretboard.module.css";
import Fret from "./Fret";
import type { FretNumber, StringNumber } from "./FretboardTypes";

/**
 * Props for the GuitarString component.
 * @property tuning - The open string note (e.g., "E", "A").
 * @property lowFret - The lowest fret to render.
 * @property highFret - The highest fret to render.
 * @property fretted - The currently fretted fret number.
 * @property stringNumber - The string number (1 = high E, 6 = low E).
 * @property onFretChange - Callback when a fret is clicked.
 * @property top - (Optional) If this is the topmost string.
 * @property bottom - (Optional) If this is the bottommost string.
 */
interface GuitarStringProps {
  tuning: string;
  lowFret: number;
  highFret: number;
  fretted: FretNumber;
  stringNumber: StringNumber;
  onFretChange: (stringNumber: StringNumber, fretNumber: FretNumber) => void;
  top?: boolean;
  bottom?: boolean;
}

/**
 * Renders a single guitar string with its frets.
 * Handles note calculation and fret click events.
 */
const GuitarString: React.FC<GuitarStringProps> = ({
  tuning,
  lowFret,
  highFret,
  fretted,
  stringNumber,
  onFretChange,
  top = false,
  bottom = false,
}) => {


console.log(top,bottom);

  // Chromatic scale for one octave
  // prettier-ignore
  const noteSequence = ["E","F","F#","G","Ab","A","Bb","B","C","C#","D","Eb",];

  const OCTAVE = 12;

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
    // Notes repeat every OCTAVE frets
    const note = rotatedNotes[fret % OCTAVE];
    frets.push(
      <Fret
        key={`${stringNumber}-${fret}`}
        fretNumber={fret as FretNumber}
        fretNote={note}
        size={highFret - lowFret}
        fretted={fretted === fret}
        onFretClick={() => onFretChange(stringNumber, fret as FretNumber)}
      />
    );
  }

  return <div className={styles.guitarStringColumn}>{frets}</div>;
};

export default GuitarString;
