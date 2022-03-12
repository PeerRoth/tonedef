import Link from 'next/link';
// import LightButton from '../../components/lightbutton';
import ToggleGroupie from '../../components/togglebuttongroup';


export default function FirstPost(){



const chordNotesBMinor7=[['B',4],['D',5],['F#',5],['A',5]];
const chordNotesAMinor7=[['A',4],['C',5],['E',5],['G',5]];
const chordNotesEMinor7=[['B',4],['D',5],['E',5],['G',5]];



    return(
        <>
        

            <h1>first board</h1>

            <ToggleGroupie chordNotes={chordNotesBMinor7} name={'BMinor7'} />

            <ToggleGroupie chordNotes={chordNotesAMinor7} name={'AMinor7'}  />

            <ToggleGroupie chordNotes={chordNotesEMinor7} name={'EMinor7'}  />
            <h5>
                <Link href="/">
                    <a>home</a>
                </Link>
            </h5>
            
        </>)
}