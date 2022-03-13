import React,{useEffect, useState} from 'react';
import * as Tone from 'tone'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DialpadIcon from '@mui/icons-material/Dialpad';
import Link from 'next/link';
import InstrumentPicker from '../../components/instrumentpicker';
// import Loopy from '../../components/loopy';

const Keys = ({colorStart=20,notes,name,userInstrument,handler})=>{
    const keyWidth=60;
    return (
    <div style={{width:'100vw',marginTop:'3rem',}} >
    {notes.map((note,noteIdx,ara)=>{
        let left=(keyWidth*noteIdx)+(noteIdx*1);
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
                fontWeight:700,
                fontSize:'.8rem',
                paddingTop:keyWidth/3,
            }}
            onMouseOver={(ev)=>{
                // let prevStyle=window.getComputedStyle(ev.target).transform;
                // console.log(prevStyle)
                ev.target.style.transform='rotate(40deg)';
                handler(note,userInstrument);
            }} 
            key={'nota'+note+name} >
            {note}
        </div>
    )})}
</div>)};

export default function FirstPost(){
    const [userInstrument,setUserInstrument]=useState('Synth');
    const [synth,setSynth]=useState(null);

    useEffect(()=>{
        const synth = new Tone[userInstrument]().toDestination();
        setSynth({synth:synth});
    },[userInstrument]);
    
    function playNote(val,instrument='Synth'){
        const now = Tone.now()
        synth.synth.triggerAttack(val, now)
        synth.synth.triggerRelease(now + .1);
    };

    // const Buttons = ({handleChange,notes,name})=>(
    //     <ToggleButtonGroup color="primary" exclusive onChange={handleChange} >
    //         {notes.map(note=>(
    //             <ToggleButton key={'nota'+note+name} value={note}>
    //                 {note}<DialpadIcon />
    //             </ToggleButton>
    //     ))}
    //     </ToggleButtonGroup>
    // );



    const chordNotesBMinor7=[['B',4],['D',5],['F#',5],['A',5]];
    const chordNotesAMinor7=[['A',4],['C',5],['E',5],['G',5]];
    const chordNotesEMinor7=[['B',4],['D',5],['E',5],['G',5]];

    const fullArray = (chorno) => {
        const notes=[];
        const iterations=['a','a','a','a',];
        iterations.forEach((it,itIdx)=>{
            chorno.forEach(cn=>{
                notes.push(cn[0]+(cn[1]+itIdx-2));
            });
        });
        return notes;
    };


    // console.log(userInstrument);

    return(
        <>
            <InstrumentPicker userInstrument={userInstrument} setUserInstrument={setUserInstrument} />
            <br />

<Keys handler={playNote}   colorStart={40}  userInstrument={userInstrument} notes={fullArray(chordNotesBMinor7)} name={'BMinor7'} /><br />
<Keys handler={playNote}   colorStart={140} userInstrument={userInstrument} notes={fullArray(chordNotesAMinor7)} name={'AMinor7'}  /><br />
<Keys handler={playNote}   colorStart={240} userInstrument={userInstrument} notes={fullArray(chordNotesEMinor7)} name={'EMinor7'}  /><br />
            
            <br />
            {/* <Loopy noteValue={topNote} /> */}
            <br />
            <br />

            <h5>
                <Link href="/">
                    <a>home</a>
                </Link>
            </h5>
            
        </>)
}