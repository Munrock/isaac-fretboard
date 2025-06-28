import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

// Types for context
export type AudioStatus = 'off' | 'denied' | 'active' | 'error';
export type AnalysisMode = 'monophonic' | 'polyphonic';

interface AudioConsumer {
  id: string;
  mode: AnalysisMode;
  onAudio: (buffer: Float32Array) => void;
}

interface AudioContextType {
  status: AudioStatus;
  errorLog: string[];
  start: () => void;
  stop: () => void;
  registerConsumer: (consumer: AudioConsumer) => void;
  unregisterConsumer: (id: string) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useAudio must be used within AudioProvider');
  return ctx;
};

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState<AudioStatus>('off');
  const [errorLog, setErrorLog] = useState<string[]>([]);
  const consumers = useRef<Map<string, AudioConsumer>>(new Map());
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Register/unregister consumers
  const registerConsumer = (consumer: AudioConsumer) => {
    consumers.current.set(consumer.id, consumer);
  };
  const unregisterConsumer = (id: string) => {
    consumers.current.delete(id);
  };

  // Start/stop audio
  const start = async () => {
    if (status === 'active') return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const audioCtx = new window.AudioContext();
      audioContextRef.current = audioCtx;
      const source = audioCtx.createMediaStreamSource(stream);
      sourceRef.current = source;
      const processor = audioCtx.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;
      source.connect(processor);
      processor.connect(audioCtx.destination);
      processor.onaudioprocess = (e) => {
        const buffer = e.inputBuffer.getChannelData(0);
        // Notify all consumers
        consumers.current.forEach((consumer) => {
          consumer.onAudio(buffer);
        });
      };
      setStatus('active');
    } catch (err: any) {
      setStatus(err.name === 'NotAllowedError' ? 'denied' : 'error');
      setErrorLog((prev) => [...prev, err.message || String(err)]);
    }
  };

  const stop = () => {
    processorRef.current?.disconnect();
    sourceRef.current?.disconnect();
    audioContextRef.current?.close();
    streamRef.current?.getTracks().forEach((track) => track.stop());
    setStatus('off');
  };

  // Clean up on unmount
  useEffect(() => {
    return () => stop();
  }, []);

  return (
    <AudioContext.Provider value={{ status, errorLog, start, stop, registerConsumer, unregisterConsumer }}>
      {children}
    </AudioContext.Provider>
  );
};
