import React,{useEffect, useState, useRef } from 'react';
import * as Tone            from 'tone'
import Link                 from 'next/link';
import InstrumentPicker     from '../../components/instrumentpicker';
import { array2grouped }    from '../../components/array2grouped';
import { Button } from '@mui/material';

const Keys = ({colorStart=20,notes,name,userInstrument,handler,refnow})=>{
    const keyWidth=60;
    let noteseys=notes.map((noteValue,noteIdx)=>{
        let tempy={};
        tempy.note=noteValue;
        tempy.left=(keyWidth*noteIdx)+(noteIdx*1);
        tempy.right=(keyWidth*noteIdx)+(noteIdx*1)+keyWidth;
        return tempy;
    });

    const [touchNote,setTouchNote]=useState({note:'A5'});
    useEffect(()=>{
        if (touchNote&& touchNote.note) {
            console.log(touchNote,userInstrument)
            handler(touchNote.note,userInstrument);
        }
    },[touchNote]);
console.log(refnow);

    return (
    <div
        style={{width:'100vw',marginTop:'3rem',}} 
        onTouchMove={(ev)=>{
            let currentTouchingNote=noteseys[Math.floor(ev.touches[0].clientX/keyWidth)];
            console.log(currentTouchingNote);
            if (currentTouchingNote!==touchNote){
                setTouchNote(currentTouchingNote);
            }
        }}
    >
    {noteseys.map(({note,left},noteIdx,ara)=>{
    return (
        <div
            style={{
                position:'absolute',
                left:left,
                display:'inline',
                width:keyWidth,
                height:keyWidth,
                backgroundColor:`rgb(${colorStart},${(360/ara.length)*noteIdx},20)`,
                textAlign:'center',
                fontWeight:700,
                fontSize:'.8rem',
                paddingTop:keyWidth/3,
            }}
        key={'nota'+note+name} >{note}</div>
)})}
</div>)};

export default function SoundboardMobile(){
    const [userInstrument,setUserInstrument]=useState('Synth');
    const [synth,setSynth]=useState(null);



    useEffect(()=>{
        if (userInstrument){
            const synth = new Tone[userInstrument]().toDestination();
            setSynth({synth:synth});
        }
    },[userInstrument]);

    const nowRef=useRef(null);
console.log(nowRef.current+' __BOOKABUKAH!')
    
    function playNote(val,instrument='Synth'){

        console.log(synth);
        if (Tone.context.state !== "running"){
            console.log('AITN RUNN')
            Tone.context.resume().then(() => {
                console.log('____REJUMET');
                if (synth && synth['synth']){
                    const now = Tone.now()
                    console.log(now);
                    console.log(Tone.context);
                    synth.synth.triggerAttack(val, now)
                    synth.synth.triggerRelease(now + .1);
                };
              });
        } else {
            if (synth && synth['synth']){
                const now = Tone.now();
                console.log(now);
                if (nowRef&&now===nowRef.current){
                    console.log('MUST BE > NOWWNWOOWNWOW');
                    console.log(nowRef.current);
                    return false;
                }
                console.log(Tone.context);
                synth.synth.triggerAttack(val, now)
                synth.synth.triggerRelease(now + .1);
                nowRef.current=now;
            };
        }

     
    };
    
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
console.log(Tone)
console.log(Tone.context);
console.log(Tone.context.state);
    return(
        <div style={{position:'fixed',width:'100vw',height:'100vh',top:'0px',left:'0px',backgroundColor:'lightblue',}}>


{Tone.context.state !== "running"
&&
<div id="audioContextSuspended">
<div style={{width:'100vw',height:'100vh',position:'fixed',top:'0px',left:'0px',}}>
<Button onClick={()=>{
    Tone.context.resume().then(() => {
        console.log('____REJUMET');
      });
    }}
    id="unmute"
    >
        PLAY
    </Button>
</div>
</div>
}
{
    
<>

            <InstrumentPicker userInstrument={userInstrument} setUserInstrument={setUserInstrument} />
            <br />
<div style={{borderBottom:'1px solid black',marginTop:'1rem',height:'200px',}}>{' AMinor 7'}{array2grouped(fullArray(chordNotesBMinor7),8).map((noteGroup,ngIdx)=>(<div key={'chno'+(ngIdx+3)} ><Keys refnow={nowRef.current} handler={playNote} colorStart={(1+ngIdx)* 40}   userInstrument={userInstrument} notes={noteGroup} name={'BMinor7'} /><br /></div>))}</div>
<div style={{borderBottom:'1px solid black',marginTop:'1rem',height:'200px',}}>{' BMinor 7'}{array2grouped(fullArray(chordNotesAMinor7),8).map((noteGroup,ngIdx)=>(<div key={'chno'+(ngIdx+8)} ><Keys refnow={nowRef.current} handler={playNote} colorStart={(1+ngIdx)* 90}   userInstrument={userInstrument} notes={noteGroup} name={'BMinor7'} /><br /></div>))}</div>
<div style={{borderBottom:'1px solid black',marginTop:'1rem',height:'200px',}}>{' EMinor 7'}{array2grouped(fullArray(chordNotesEMinor7),8).map((noteGroup,ngIdx)=>(<div key={'chno'+(ngIdx+14)}><Keys refnow={nowRef.current} handler={playNote} colorStart={(1+ngIdx)*120}  userInstrument={userInstrument} notes={noteGroup} name={'BMinor7'} /><br /></div>))}</div>
            
            <br /><br />

            <h5>
                <Link href="/">
                    <a>home</a>
                </Link>
            </h5>
            </>
}
        </div>)
};