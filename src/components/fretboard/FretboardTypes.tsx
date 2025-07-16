// Centralized types for the fretboard components

export type StringNumber = 1 | 2 | 3 | 4 | 5 | 6;

export type Note = "A" | "A#" | "Bb" | "B" | "C" | "C#" | "Db" | "D" | "D#" | "Eb" | "E" | "F" | "F#" | "Gb" | "G" | "G#" | "Ab";

export type Tuning = {
  6: Note;
  5: Note;
  4: Note;
  3: Note;
  2: Note;
  1: Note;
};

export type FretNumber = "mute" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;

export type Fretting = {
  6: FretNumber;
  5: FretNumber;
  4: FretNumber;
  3: FretNumber;
  2: FretNumber;
  1: FretNumber;
};

export interface BoardInterface {
  overrideStrings?: Record<number, string>;
  lowFret?: number;
  highFret?: number;
}
