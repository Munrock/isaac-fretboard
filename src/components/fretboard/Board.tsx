import React, { useState } from "react";

import styles from "./Fretboard.module.css";
import GuitarString from "./GuitarString";
import type { BoardInterface, Tuning, Fretting, FretNumber, StringNumber } from "./FretboardTypes";

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
  const handleFretChange = (stringNumber: StringNumber, fretNumber: FretNumber) => {
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
          tuning={strings[gs as StringNumber]}
          lowFret={lowFret}
          highFret={highFret}
          fretted={fretted[gs as StringNumber]}
          stringNumber={gs as StringNumber}
          onFretChange={handleFretChange}
        />
      ))}
    </div>
  );
};

export default Board;
