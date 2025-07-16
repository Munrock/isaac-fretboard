import React from "react";
import styles from './Fretboard.module.css';

interface FretReferenceParams {
  lowFret: number;
  highFret: number;
}

// FretReference: A simple placeholder React component
const FretReference: React.FC<FretReferenceParams> = ({ lowFret, highFret }) => {
  return (
    <>
      <div className={styles.fretReferenceIndicator}>
        {lowFret === 0 ? "O" : lowFret}
      </div>
      <div className={styles.fretReferenceStackedButtons}>
        
      </div>
      <div className={styles.fretReferenceStackedButtons}>
        
      </div>

      </>
  );
};

export default FretReference;
