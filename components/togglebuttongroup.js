import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DialpadIcon from '@mui/icons-material/Dialpad';
import * as Tone from 'tone'

export default function ToggleGroupie({chordNotes,name}) {

    
const preNotes=[];
let a = 'a';
const iterations=[a,a,a,a,a,a,a,];
iterations.forEach((it,itIdx)=>{
    chordNotes.forEach(cn=>{
        preNotes.push(cn[0]+(cn[1]+itIdx-2));
    });
});


    console.log(preNotes);

    const notes=preNotes;

    function playNote(val){
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now()
        synth.triggerAttack(val, now)
        synth.triggerRelease(now + 1)
    };

    const [noteValue, setNoteValue] = React.useState('D5');

    const handleChange = (event, newNoteValue) => {
        playNote(newNoteValue);
    };

  return (
      <>
      {name}
    <ToggleButtonGroup
      color="primary"
      value={noteValue}
      exclusive
      onChange={handleChange}
    >
    {notes.map(note=>(
      <ToggleButton value={note}>
          {note}
      <DialpadIcon />
        </ToggleButton>
    ))}
    </ToggleButtonGroup>
    </>
  );
}