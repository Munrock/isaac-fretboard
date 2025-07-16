import React, { useState } from "react";

import styles from "./Fretboard.module.css";

interface FretProps {
  fretNumber: number;
  fretNote: string;
  size: number;
  onFretClick?: (fretNumber: number, fretted: boolean) => void;
}

const Fret: React.FC<FretProps> = ({
  fretNumber,
  fretNote,
  size,
  onFretClick,
}) => {
  console.log(`Fret ${fretNumber}: ${fretNote}`);

  const [fretted, setFretted] = useState<boolean>(false);

  // Calculate maxHeight as a percentage string
  const maxHeight = `calc(100% / ${size})`;

  const handleClick = () => {
    setFretted((prev) => {
      const newFretted = !prev;
      if (typeof onFretClick === "function") {
        onFretClick(fretNumber, newFretted);
      }
      return newFretted;
    });
  };

  return (
    <div
      className={styles.defaultFret}
      style={{ maxHeight }}
      onClick={handleClick}
    >
      {fretted ? <span className={styles.fretNote}>{fretNote}</span> : ""}
    </div>
  );
};

export default Fret;
