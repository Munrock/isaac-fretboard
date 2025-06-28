import { useEffect, useRef } from 'react';
import { useAudio } from '../context/AudioContext';

const LastNote = () => {
  const { status, registerConsumer, unregisterConsumer, start } = useAudio();
  const consumerId = useRef<string>(`lastnote-${Math.random().toString(36).slice(2)}`);
  const bufferRef = useRef<Float32Array | null>(null);

  useEffect(() => {
    const onAudio = (buffer: Float32Array) => {
      bufferRef.current = buffer.slice();
      // You can log or inspect bufferRef.current here
    };
    registerConsumer({ id: consumerId.current, mode: 'monophonic', onAudio });
    start();
    return () => {
      unregisterConsumer(consumerId.current);
    };
  }, [registerConsumer, unregisterConsumer, start]);

  return <span>Buffer length: {bufferRef.current ? bufferRef.current.length : 0}</span>;
};

export default LastNote;
