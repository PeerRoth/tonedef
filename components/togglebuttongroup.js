import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DialpadIcon from '@mui/icons-material/Dialpad';
import * as Tone from 'tone'


export default function ToggleGroupie({chordNotes,name,userInstrument,setTopNote}) {
    const notes=[];
    const iterations=['a','a','a','a',];
    iterations.forEach((it,itIdx)=>{
        chordNotes.forEach(cn=>{
            notes.push(cn[0]+(cn[1]+itIdx-2));
        });
    });
    function playNote(val,instrument='Synth'){
        const synth = new Tone[instrument]().toDestination();
        const now = Tone.now()
        synth.triggerAttack(val, now)
        synth.triggerRelease(now + .1)
    };

    const handleChange = (event, newNoteValue) => {
        console.log(event)
        let varul = event.target;
        console.log(varul);
        let varuli = varul.innerHTML;
        console.log(varuli);
        playNote(varul,userInstrument)
        // playNote(newNoteValue,userInstrument);
        // setTopNote(newNoteValue)
    };
    const keyWidth=40;
const Keys = ({colorStart=20,notes,name})=>(
    <div style={{width:'100vw',}} >
        {notes.map((note,noteIdx,ara)=>{
            let left=keyWidth*noteIdx;
        return (
            <div
                style={{
                    position:'absolute',
                    left:left,
                    display:'inline',
                    width:keyWidth,
                    height:keyWidth,
                    borderRadius:keyWidth/2,
                    backgroundColor:`rgb(${colorStart},${(360/ara.length)*noteIdx},20)`,
                    textAlign:'center',
                }}
                onMouseOver={()=>{playNote(note,userInstrument)}} 
                key={'nota'+note+name} >
                {note}
            </div>
        )})}
    </div>)

const Buttons = ({handleChange,notes,name})=>(
    <ToggleButtonGroup
        color="primary"
        exclusive
        onChange={handleChange}
        >
        {notes.map(note=>(
            <ToggleButton key={'nota'+note+name} value={note}>
                {note}
                <DialpadIcon />
            </ToggleButton>
    ))}
    </ToggleButtonGroup>);


  return (
      <>
      <br />
      <br />
      {name}
      <br />
      <Keys 
        colorStart={100}
        handler={handleChange} 
        notes={notes} 
        name={name} />
    </>
  );
}