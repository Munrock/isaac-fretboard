import React, { useState } from "react";

import styles from "./Fretboard.module.css";
import GuitarString from "./GuitarString";

export interface BoardInterface {
  overrideStrings?: Record<number, string>;
  lowFret?: number;
  highFret?: number;
}

export type Note = "A" | "A#" | "Bb" | "B" | "C" | "C#" | "Db" | "D" | "D#" | "Eb" | "E" | "F" | "F#" | "Gb" | "G" | "G#" | "Ab";
export type Tuning = {6:Note, 5:Note, 4: Note, 3: Note, 2: Note, 1: Note};
export type FretNumber = "mute" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
export type Fretting = {6:FretNumber, 5:FretNumber, 4: FretNumber, 3: FretNumber, 2: FretNumber, 1: FretNumber};

const Board: React.FC<BoardInterface> = ({
  overrideStrings = {},
  lowFret = 0,
  highFret = 5,
}) => {
  const strings: Tuning = {
    6: "E",
    5: "A",
    4: "D",
    3: "G",
    2: "B",
    1: "E",
    ...overrideStrings,
  };

  const [fretted, setFretted] = useState<Fretting>({6:"mute", 5: "mute",4:"mute",3:"mute",2:"mute",1:"mute"})

  // Handler to update fretted state
  const handleFretChange = (stringNumber: keyof Fretting, fretNumber: FretNumber) => {
    setFretted((prev) => ({ ...prev, [stringNumber]: prev[stringNumber] === fretNumber ? "mute" : fretNumber }));
  };

  return (
    <div className={styles.fretboard}>
      <div className={styles.fretReference}>
        {lowFret === 0 ? "O" : lowFret}
      </div>
      {[6, 5, 4, 3, 2, 1].map((gs) => (
        <GuitarString
          key={gs}
          tuning={strings[gs as keyof Tuning]}
          lowFret={lowFret}
          highFret={highFret}
          fretted={fretted[gs as keyof Fretting]}
          stringNumber={gs as 1|2|3|4|5|6}
          onFretChange={handleFretChange as (stringNumber: number, fretNumber: FretNumber) => void}
        />
      ))}
    </div>
  );
};

export default Board;
