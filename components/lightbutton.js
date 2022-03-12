import * as Tone from 'tone'
import GamepadIcon from '@mui/icons-material/Gamepad';



export default function LightButton({note,duration,color,handler}){

function handleButtonOne(){
    //create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");
}



function handleButtonTwo(){
const synth = new Tone.Synth().toDestination();

    const now = Tone.now()
// trigger the attack immediately
synth.triggerAttack("C4", now)
// wait one second before triggering the release
synth.triggerRelease(now + 1)
}


    return (
        <>
        
        {props.children}
        </>
    )
}