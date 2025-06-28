import LastNote from './components/LastNote';
import ErrorLog from './components/ErrorLog';
import styles from './App.module.css';
import { AudioProvider } from './context/AudioContext';


function App() {
  return (
    <AudioProvider>
      <div className={styles.topRow}></div>
      <div className={styles.mainPanel}>
        <div className={styles.mainChordDisplay}>
          Amaj<sup>7</sup>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.statusInfo}><LastNote /></div>
        <div className={styles.errorLog}><ErrorLog /></div>
      </div>
    </AudioProvider>
  );
}

export default App;
