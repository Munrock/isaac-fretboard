import { names as noteNames } from "@tonaljs/note";

export interface MusicKey {
    root: string;
    maj: boolean;
    sevenths: boolean;
}

export interface ChordProgression {
    key: MusicKey;  //the root note
    sequence: number[]; // the chord degrees for the sequence
}

export const randomKey = (
    root: string | null = null,
    maj: boolean | null = null,
    sevenths: boolean | null = null
): MusicKey => {
    // All possible root notes (C, C#, D, D#, E, F, F#, G, G#, A, A#, B)
    const roots = noteNames();
    const randomFrom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

    const selectedRoot = root && roots.includes(root) ? root : randomFrom(roots);
    const selectedMaj = maj !== null ? maj : Math.random() < 0.5;
    const selectedSevenths = sevenths !== null ? sevenths : Math.random() < 0.5;

    return {
        root: selectedRoot,
        maj: selectedMaj,
        sevenths: selectedSevenths,
    };
};