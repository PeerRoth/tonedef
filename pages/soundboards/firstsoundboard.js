import React,{useEffect, useState} from 'react';
import * as Tone from 'tone'
import Link from 'next/link';
import InstrumentPicker from '../../components/instrumentpicker';
// import Loopy from '../../components/loopy';
import Cuby from '../../components/cuby';
import { array2grouped } from '../../components/array2grouped';

const Keys = ({colorStart=20,notes,name,userInstrument,handler})=>{
    const keyWidth=35;
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
                ev.target.style.transform='rotate(40deg)';
                handler(note,userInstrument);
            }} 
            key={'nota'+note+name} >
            {note}
        </div>
    )})}
</div>)};

export default function FirstSoundBoard(){
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
    
    const [loop,setLoop]=useState(null);
    useEffect(()=>{
            const synthA = new Tone.FMSynth().toDestination();
            const loopA =  new Tone.Loop(time => {
                let noteValue='C5';
                synthA.triggerAttackRelease(noteValue, "8n", time);
            },"4n").start(0);
            setLoop(loopA);
        },[])
        
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

    return(
        <div style={{position:'fixed',width:'100vw',height:'100vh',top:'0px',left:'0px',backgroundColor:'lightblue',}}>
            <InstrumentPicker userInstrument={userInstrument} setUserInstrument={setUserInstrument} />
            <br />
<div style={{borderBottom:'1px solid black',marginTop:'1rem',height:'200px',}}>{' AMinor 7'}{array2grouped(fullArray(chordNotesBMinor7),8).map((noteGroup,ngIdx)=>(<div key={'chno'+(ngIdx+3)}><Keys handler={playNote} colorStart={(1+ngIdx)* 40}   userInstrument={userInstrument} notes={noteGroup} name={'BMinor7'} /><br /></div>))}</div>
<div style={{borderBottom:'1px solid black',marginTop:'1rem',height:'200px',}}>{' BMinor 7'}{array2grouped(fullArray(chordNotesAMinor7),8).map((noteGroup,ngIdx)=>(<div key={'chno'+(ngIdx+8)}><Keys handler={playNote} colorStart={(1+ngIdx)* 90}   userInstrument={userInstrument} notes={noteGroup} name={'BMinor7'} /><br /></div>))}</div>
<div style={{borderBottom:'1px solid black',marginTop:'1rem',height:'200px',}}>{' EMinor 7'}{array2grouped(fullArray(chordNotesEMinor7),8).map((noteGroup,ngIdx)=>(<div key={'chno'+(ngIdx+14)}><Keys handler={playNote} colorStart={(1+ngIdx)*120}  userInstrument={userInstrument} notes={noteGroup} name={'BMinor7'} /><br /></div>))}</div>
            
            <br />
            <br />

            <h5>
                <Link href="/">
                    <a>home</a>
                </Link>
            </h5>


            <Cuby 
                startHandler={()=>{Tone.Transport.start()}} 
                stopHandler={()=>{Tone.Transport.stop()}}
            />

            
        </div>)
};