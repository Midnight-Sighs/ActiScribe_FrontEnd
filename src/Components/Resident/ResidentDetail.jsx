import React, {useState, useEffect} from 'react';
import Notes from '../ResidentNotes/Notes'
import ResidentParticipation from '../Resident/ResidentParticipation'
import EditResident from './EditResident';
import NewNote from '../ResidentNotes/NewNote';
import Modal from '../Utilities/Modal'
import ViewAssessment from '../Assessment/ViewAssessment';


const ResidentDetail=(props)=> {
    
    const[notes, setNotes]=useState(props.notes)
    const[participation, setParticipation]=useState(props.participation)
    const[editHS, setEditHS]=useState(false)
    const[notesHS, setNotesHS]=useState(false)
    const[assessmentHS, setAssessmentHS]=useState(false)

    const editOnClick=()=>{
        setEditHS(!editHS)
    }

    const notesOnClick=()=>{
        setNotesHS(!notesHS)
    }

    const assessmentOnClick=()=>{
        setAssessmentHS(!assessmentHS)
    }

    useEffect(()=>{
        setNotes(props.notes)
        setParticipation(props.participation)
    },[props])

    if(props.activeResident == undefined){
        return(<p>Error getting resident details.</p>)
    }

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
                    <button onClick={notesOnClick}>New Note</button>
                    <Modal onClick={notesOnClick} hideShow={notesHS}>
                        <NewNote resident={props.activeResident.id}/>
                    </Modal>
                    <button onClick={assessmentOnClick}>View Assessment</button>
                    <Modal onClick={assessmentOnClick} hideShow={assessmentHS}>
                        <ViewAssessment resident={props.activeResident.id} />
                    </Modal>
            </div>
        </>
     );
}

export default ResidentDetail;