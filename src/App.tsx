import { useState } from "react";
import styles from "./App.module.css";
import { AudioProvider } from "./context/AudioContext";

function App() {
  const [activeComponent, setActiveComponent] = useState<string>("ChordView");

  return (
    <AudioProvider>
      <div className={styles.topRow}></div>
      <div className={styles.mainPanel}>
        {activeComponent === "ChordView" ? (
          <div className={styles.mainChordDisplay}>
            Amaj<sup>7</sup>
          </div>
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
