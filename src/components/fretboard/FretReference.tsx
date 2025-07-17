import React, { useEffect, useState } from "react";
import styles from "./Fretboard.module.css";

interface FretReferenceParams {
  lowFret: number;
  highFret: number;
  fretsMoveUp: () => void;
  fretsMoveDown: () => void;
  fretsDecrease: () => void;
  fretsIncrease: () => void;
}

// FretReference: A simple placeholder React component
const FretReference: React.FC<FretReferenceParams> = ({
  lowFret,
  highFret,
  fretsMoveUp,
  fretsMoveDown,
  fretsDecrease,
  fretsIncrease,
}) => {
  const [showButtons, setShowButtons] = useState<boolean>(false);
  const toggleButtons = () => setShowButtons((prev) => !prev);

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
              onClick={fretsMoveDown}
            >
              &uarr;
            </div>
            <div
              className={styles.fretReferenceStackedButtonsButton}
              role="button"
              tabIndex={0}
              onClick={fretsMoveUp}
            >
              &darr;
            </div>
          </div>
          <div className={styles.fretReferenceStackedButtons}>
            <div
              className={styles.fretReferenceStackedButtonsButton}
              role="button"
              tabIndex={0}
              onClick={fretsDecrease}
            >
              -
            </div>
            <div
              className={styles.fretReferenceStackedButtonsButton}
              role="button"
              tabIndex={0}
              onClick={fretsIncrease}
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
