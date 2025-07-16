import { useState } from "react";
import styles from "./App.module.css";
import { AudioProvider } from "./context/AudioContext";
import Board from "./components/fretboard/Board";

function App() {
  const [activeComponent, setActiveComponent] = useState<string>("ChordView");

  return (
    <AudioProvider>
      <div className={styles.topRow}>
        <button onClick={() => setActiveComponent("ChordView")}>
          Chord View
        </button>
        <button onClick={() => setActiveComponent("FretBoard")}>
          Fretboard
        </button>
      </div>
      <div className={styles.mainPanel}>
        {activeComponent === "ChordView" ? (
          <div className={styles.mainChordDisplay}>
            Amaj<sup>7</sup>
          </div>
        ) : activeComponent === "FretBoard" ? (
          <Board />
        ) : (
          ""
        )}
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.statusInfo}></div>
        <div className={styles.errorLog}></div>
      </div>
    </AudioProvider>
  );
}

export default App;
