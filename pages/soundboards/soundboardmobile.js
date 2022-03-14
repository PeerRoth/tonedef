import React,{useEffect, useState} from 'react';
import * as Tone            from 'tone'
import Link                 from 'next/link';
import InstrumentPicker     from '../../components/instrumentpicker';
import { array2grouped }    from '../../components/array2grouped';

const Keys = ({colorStart=20,notes,name,userInstrument,handler})=>{
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
        const synth = new Tone[userInstrument]().toDestination();
        setSynth({synth:synth});
    },[userInstrument]);
    
    function playNote(val,instrument='Synth'){
        console.log(synth);
        if (synth && synth['synth']){
            const now = Tone.now()
            console.log(now);
            synth.synth.triggerAttack(val, now)
            synth.synth.triggerRelease(now + .1);
        };
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

    return(
        <div style={{position:'fixed',width:'100vw',height:'100vh',top:'0px',left:'0px',backgroundColor:'lightblue',}}>

            <InstrumentPicker userInstrument={userInstrument} setUserInstrument={setUserInstrument} />
            <br />
<div style={{borderBottom:'1px solid black',marginTop:'1rem',height:'200px',}}>{' AMinor 7'}{array2grouped(fullArray(chordNotesBMinor7),8).map((noteGroup,ngIdx)=>(<div key={'chno'+(ngIdx+3)} ><Keys handler={playNote} colorStart={(1+ngIdx)* 40}   userInstrument={userInstrument} notes={noteGroup} name={'BMinor7'} /><br /></div>))}</div>
<div style={{borderBottom:'1px solid black',marginTop:'1rem',height:'200px',}}>{' BMinor 7'}{array2grouped(fullArray(chordNotesAMinor7),8).map((noteGroup,ngIdx)=>(<div key={'chno'+(ngIdx+8)} ><Keys handler={playNote} colorStart={(1+ngIdx)* 90}   userInstrument={userInstrument} notes={noteGroup} name={'BMinor7'} /><br /></div>))}</div>
<div style={{borderBottom:'1px solid black',marginTop:'1rem',height:'200px',}}>{' EMinor 7'}{array2grouped(fullArray(chordNotesEMinor7),8).map((noteGroup,ngIdx)=>(<div key={'chno'+(ngIdx+14)}><Keys handler={playNote} colorStart={(1+ngIdx)*120}  userInstrument={userInstrument} notes={noteGroup} name={'BMinor7'} /><br /></div>))}</div>
            
            <br /><br />

            <h5>
                <Link href="/">
                    <a>home</a>
                </Link>
            </h5>

        </div>)
};