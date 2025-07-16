import React from "react";

import styles from "./Fretboard.module.css";
import GuitarString from "./GuitarString";

interface BoardInterface {
  overrideStrings?: Record<number, string>;
  lowFret?: number;
  highFret?: number;
}

const Board: React.FC<BoardInterface> = ({
  overrideStrings = {},
  lowFret = 0,
  highFret = 5,
}) => {
  const strings: Record<number, string> = {
    6: "E",
    5: "A",
    4: "D",
    3: "G",
    2: "B",
    1: "E",
    ...overrideStrings,
  };

  return (
    <div className={styles.fretboard}>
      {Object.keys(strings).map((gs) => (
        <GuitarString
          key={gs}
          tuning={strings[Number(gs)]}
          lowFret={lowFret}
          highFret={highFret}
        />
      ))}
    </div>
  );
};

export default Board;
