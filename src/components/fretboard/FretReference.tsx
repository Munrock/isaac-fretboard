import React, { useEffect, useState } from "react";
import styles from "./Fretboard.module.css";

interface FretReferenceParams {
  lowFret: number;
  highFret: number;
}

// FretReference: A simple placeholder React component
const FretReference: React.FC<FretReferenceParams> = ({
  lowFret,
  highFret,
}) => {

  const [showButtons, setShowButtons] = useState<boolean>(false);
  const toggleButtons = () =>   setShowButtons((prev)=>!prev);

  useEffect(() => {
  if (!showButtons) return;
  const timer = setTimeout(() => setShowButtons(false), 10000);
  return () => clearTimeout(timer);
}, [showButtons]);

  return (
    <div className={styles.fretReference}>
      <div className={styles.fretReferenceIndicator} onClick={toggleButtons}>
        {lowFret === 0 ? "O" : lowFret}
      </div>

      {showButtons && (
        <>
          <div className={styles.fretReferenceStackedButtons}>
            <div
              className={styles.fretReferenceStackedButtonsButton}
              role="button"
              tabIndex={0}
            >
              &uarr;
            </div>
            <div
              className={styles.fretReferenceStackedButtonsButton}
              role="button"
              tabIndex={0}
            >
              &darr;
            </div>
          </div>
          <div className={styles.fretReferenceStackedButtons}>
            <div
              className={styles.fretReferenceStackedButtonsButton}
              role="button"
              tabIndex={0}
            >
              -
            </div>
            <div
              className={styles.fretReferenceStackedButtonsButton}
              role="button"
              tabIndex={0}
            >
              +
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FretReference;
