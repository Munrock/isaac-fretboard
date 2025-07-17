import React, { useState } from "react";

import styles from "./Fretboard.module.css";
import GuitarString from "./GuitarString";
import FretReference from "./FretReference";
import type { BoardInterface, Tuning, Fretting, FretNumber, StringNumber } from "./FretboardTypes";

const Board: React.FC<BoardInterface> = ({
  overrideStrings = {},
  lowFret: initialLowFret = 0,
  highFret: initialHighFret = 5,
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

  const [lowFret, setLowFret] = useState(initialLowFret);
  const [highFret, setHighFret] = useState(initialHighFret);
  const [fretted, setFretted] = useState<Fretting>({6:"mute", 5: "mute",4:"mute",3:"mute",2:"mute",1:"mute"})

  // Handler to update fretted state
  const handleFretChange = (stringNumber: StringNumber, fretNumber: FretNumber) => {
    setFretted((prev) => ({ ...prev, [stringNumber]: prev[stringNumber] === fretNumber ? "mute" : fretNumber }));
  };

  const fretCheck = (low: number, high: number): {low:number; high:number} => {
    let newHigh = high, newLow = low;
    //appropriate order this should never happen but ¯\_(ツ)_/¯
    if(high<low)      [newLow, newHigh] = [high, low];
    //clamp low
    newLow = Math.max(0, Math.min(newLow, 20));
        // Clamp high
  newHigh = Math.min(newHigh, 24);
    //minimum for newHigh
    newHigh = Math.max(newHigh, newLow + 4);
    return {low:newLow, high:newHigh};
  }

  // Scaffolded callbacks for FretReference
  const fretsMoveUp = () => {
    const newFrets = fretCheck(lowFret+1, highFret+1);
    setLowFret(newFrets.low); setHighFret(newFrets.high);
  };
  const fretsMoveDown = () => {
    const newFrets = fretCheck(lowFret-1, highFret-1);
    setLowFret(newFrets.low); setHighFret(newFrets.high);
  };
  const fretsDecrease = () => {
    const newFrets = fretCheck(lowFret, highFret-1);
    setLowFret(newFrets.low); setHighFret(newFrets.high);
  };
  const fretsIncrease = () => {
    const newFrets = fretCheck(lowFret, highFret+1);
    setLowFret(newFrets.low); setHighFret(newFrets.high);
  };

  return (
    <div className={styles.fretboard}>
      <FretReference
        lowFret={lowFret}
        highFret={highFret}
        fretsMoveUp={fretsMoveUp}
        fretsMoveDown={fretsMoveDown}
        fretsDecrease={fretsDecrease}
        fretsIncrease={fretsIncrease}
      />
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
