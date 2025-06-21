
export const fretboardMap = [
    {
        string: 6,
        frets: ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#',
            'E','F','F#','G','G#','A','A#','B','C','C#','D','D#']
           },
    {
        string: 5,
        frets: ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#',
            'A','A#','B','C','C#','D','D#','E','F','F#','G']
           },

    {
        string: 4,
        frets: ['D','D#','E','F','F#','G','G#','A','A#','B','C','C#',
            'D','D#','E','F','F#','G','G#','A','A#','B']
           },
    {
        string: 3,
        frets: ['G','G#','A','A#','B','C','C#','D','D#','E','F','F#',
            'G','G#','A','A#','B','C','C#','D','D#']
           },
    {
        string: 2,
        frets: ['B','C','C#','D','D#','E','F','F#','G','G#','A','A#',
            'B','C','C#','D','D#','E','F','F#']
    },
    {
        string: 1,
        frets: ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#',
            'E','F','F#','G','G#','A','A#','B']
    }
];

export const triadShapes = {
    major: {
        String6: {
            G: [0, -1, -3, -3, -3, 0],
            E: [0, 2, 2, 1, 0, 0,],
        },
        String5: {
            C: [-1, 3, 2, 0, 1, -1],
            A: [-1, 0, 2, 2, 2, -1],
        },
        String4: {
            D: [-1, 0, 2, 3, 2, -1],
        },
    }
}