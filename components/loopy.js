import React, { useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DialpadIcon from '@mui/icons-material/Dialpad';
import * as Tone from 'tone';

export default function Loopy({noteValue='C2'}){

    // useEffect(()=>{

    // });

    // if (window instanceof Window) {
        if (window.toString() === "[object Window]") {
    const synthA = new Tone.FMSynth().toDestination();
    const loopA =  new Tone.Loop(time => {
        synthA.triggerAttackRelease(noteValue, "8n", time);
    },"4n").start(0);
    const startaLoo = () => { Tone.Transport.start(); };
    const stopaLoo  = () => { Tone.Transport.stop();  };
        // your code here
   }
// loopy();
    // const handleChange = (event, newNoteValue) => {
    //     startLoopy();
    // };
const handleStartStopLoo = ( event, newVal ) => {
    switch (newVal) {
        case 'start': startaLoo();
        break;
        case 'stop': stopaLoo();
        break;
    }
}
  return (
      <>
    <br />

    <ToggleButtonGroup
      color="primary"
      exclusive
      onChange={handleStartStopLoo}
    >
    {['start','stop'].map(note=>(
      <ToggleButton key={'nota'+note} value={note}>
          {note.toUpperCase()}
      <DialpadIcon />
    </ToggleButton>
    ))}
    </ToggleButtonGroup>
    </>
  );
}