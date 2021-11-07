import React, {useState, useEffect} from 'react';
import Notes from '../Notes/Notes'
import ResidentParticipation from '../Resident/ResidentParticipation'
import EditResident from './EditResident';
import NewNote from '../Notes/NewNote';
import Modal from '../Utilities/Modal'


const ResidentDetail=(props)=> {
    
    const[notes, setNotes]=useState(props.notes)
    const[participation, setParticipation]=useState(props.participation)
    const[editHS, setEditHS]=useState(false)
    const[notesHS, setNotesHS]=useState(false)

    const editOnClick=()=>{
        setEditHS(!editHS)
    }

    const notesOnClick=()=>{
        setNotesHS(!notesHS)
    }

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
                    <button onClick={editOnClick}>Edit Resident Details</button>
                    <Modal onClick={editOnClick} hideShow={editHS} >
                        <EditResident resident={props.activeResident} />
                    </Modal>
                    <button onClick={notesOnClick}>New Notes</button>
                    <Modal onClick={notesOnClick} hideShow={notesHS}>
                        <NewNote resident={props.activeResident.id}/>
                    </Modal>
            </div>
        </>
     );
}

export default ResidentDetail;