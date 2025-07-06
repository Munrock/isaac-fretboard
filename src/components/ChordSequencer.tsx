
import { type MusicKey } from '../utils/randomKey';

interface ChordSequencerParams {
    chordKey: MusicKey;
}

const ChordSequencer = ({chordKey}:ChordSequencerParams) => {




 return (
    <>
      {chordKey.root}{chordKey.maj?"maj":"min"}{chordKey.sevenths?<sup>7</sup>:null}
    </>
  );
};

export default ChordSequencer;
