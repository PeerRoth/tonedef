import React,{useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DialpadIcon from '@mui/icons-material/Dialpad';
import {array2grouped} from './array2grouped';
export default function InstrumentPicker({setUserInstrument,userInstrument}) {

    // const [feedbackDelay,setFeedbackDelay]=useState(false);

    const synths=[
        'AMSynth',
        'DuoSynth',
        'FMSynth',
        'MembraneSynth',
        'MetalSynth',
        'MonoSynth',
        'PluckSynth',
        // 'PolySynth',
        'Synth',
    ];
    

    const groupedRows=array2grouped(synths,3);


    const handleChange = (event, newInstrumentValue) => {
        setUserInstrument(newInstrumentValue);
    };

  return (<div>
      {groupedRows.map((synthGroup,sgIdx)=>(
            <ToggleButtonGroup
                key={sgIdx+'tbg'}
                color="primary"
                value={userInstrument}
                exclusive
                onChange={handleChange}
                sx={{width:'100vw'}}
            >
            {synthGroup.map(synth=>(
                <ToggleButton
                    key={'nota'+synth}
                    value={synth}
                    sx={{width:(100/synthGroup.length)+'vw',fontSize:'.8rem',}}
                    >
                    {synth}<DialpadIcon />
                </ToggleButton>))}
            </ToggleButtonGroup>
      ))}
    </div>);
};