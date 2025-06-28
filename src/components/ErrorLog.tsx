import { useAudio } from '../context/AudioContext';

const ErrorLog = () => {
  const { errorLog } = useAudio();
  if (!errorLog.length) return null;
  return (
    <div style={{ maxHeight: '4em', overflowY: 'auto', color: 'red', fontSize: '0.9em' }}>
      {errorLog.map((msg, i) => (
        <div key={i}>{msg}</div>
      ))}
    </div>
  );
};

export default ErrorLog;
