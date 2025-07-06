
import ErrorLog from './components/ErrorLog';
import styles from './App.module.css';
import { AudioProvider } from './context/AudioContext';
import ChordSequencer from './components/ChordSequencer';
import { useEffect, useState } from 'react';
import { randomKey, type MusicKey } from './utils/randomKey';


function App() {

const [key, setKey] = useState({root:"A",maj: true, sevenths: true});
  
useEffect(
    ()=>{
        const newKey:MusicKey = randomKey();
        setKey(newKey);
    },
    []
); 


  return (
    <AudioProvider>
      <div className={styles.topRow}><button onClick={() => setKey(randomKey())}>random</button></div>
      <div className={styles.mainPanel}>
        <div className={styles.mainChordDisplay}>
          <ChordSequencer chordKey={key} />
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.statusInfo}></div>
        <div className={styles.errorLog}><ErrorLog /></div>
      </div>
    </AudioProvider>
  );
}

export default App;
