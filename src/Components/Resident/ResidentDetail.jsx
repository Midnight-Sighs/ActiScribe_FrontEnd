import React, {useState, useEffect} from 'react';
import Notes from '../Notes/Notes'
import ResidentParticipation from '../Resident/ResidentParticipation'
import EditResident from './EditResident';
import NewNote from '../Notes/NewNote';
import Modal from '../Utilities/Modal'


const ResidentDetail=(props)=> {
    
    const[notes, setNotes]=useState(props.notes)
    const[participation, setParticipation]=useState(props.participation)
   

    useEffect(()=>{
        setNotes(props.notes)
        setParticipation(props.participation)
    },[props])

    return ( 
        <>
            <div>
                <h1>{props.activeResident.r_first_name} {props.activeResident.r_last_name}</h1>
                    <Notes  notes={notes}/>
                    <ResidentParticipation participation={participation} />
                    <EditResident resident={props.activeResident} />
                    <NewNote resident={props.activeResident.id}/>
            </div>
        </>
     );
}

export default ResidentDetail;