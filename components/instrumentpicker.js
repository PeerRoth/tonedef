import React,{useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DialpadIcon from '@mui/icons-material/Dialpad';

export default function InstrumentPicker({setUserInstrument,userInstrument}) {

    const [feedbackDelay,setFeedbackDelay]=useState(false);

    const synths=[
        'AMSynth',
'DuoSynth',
'FMSynth',
'MembraneSynth',
'MetalSynth',
'MonoSynth',
// 'NoiseSynth',
'PluckSynth',
'PolySynth',
// 'Sampler',
'Synth',
    ];


    const handleChange = (event, newInstrumentValue) => {
        setUserInstrument(newInstrumentValue);
    };

  return (
      <>
    <ToggleButtonGroup
      color="primary"
      value={userInstrument}
      exclusive
      onChange={handleChange}
    >
    {synths.map(synth=>(
      <ToggleButton key={'nota'+synth} value={synth}>
          {synth}
      <DialpadIcon />
        </ToggleButton>
    ))}
    </ToggleButtonGroup>
    </>
  );
}