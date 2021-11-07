import React, {useState, useEffect} from 'react';
import Notes from '../Notes/Notes'
import ResidentParticipation from '../Resident/ResidentParticipation'


const ResidentDetail=(props)=> {
    
    const[notes, setNotes]=useState(props.notes)

    useEffect(()=>{
        setNotes(props.notes)
    },[props])

    return ( 
        <>
            <div>
                <h1>{props.activeResident.r_first_name} {props.activeResident.r_last_name}</h1>
                    <Notes  notes={notes}/>
                    <ResidentParticipation participation={props.participation} />
            </div>
        </>
     );
}

export default ResidentDetail;