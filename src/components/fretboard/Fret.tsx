import React from "react";

import styles from "./Fretboard.module.css";

interface FretProps {
  fretNumber: number;
  fretNote: string;
  size: number;
  fretted?: boolean;
  onFretClick?: (fretNumber: number, fretted: boolean) => void;
}

const Fret: React.FC<FretProps> = ({
  fretNumber,
  fretNote,
  size,
  fretted = false,
  onFretClick,
}) => {
  // Calculate maxHeight as a percentage string
  const maxHeight = `calc(100% / ${size})`;

  const handleClick = () => {
    if (typeof onFretClick === "function") {
      onFretClick(fretNumber, !fretted);
    }
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
