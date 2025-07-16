import React from "react";

interface FretProps {
  fretNumber: number;
  fretNote: string;
  size: number;
}

const Fret: React.FC<FretProps> = ({ fretNumber, fretNote, size }) => {
  // Calculate maxHeight as a percentage string
  const maxHeight = `calc(100% / ${size})`;
  return (
    <div className={styles.defaultFret} style={{ maxHeight }}>
      {fretNote}
    </div>
  );
};

export default Fret;
import styles from "./Fretboard.module.css";
