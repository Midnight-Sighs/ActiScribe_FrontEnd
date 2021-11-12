import React, {useState, useEffect} from 'react';
import Notes from '../ResidentNotes/Notes'
import ResidentParticipation from '../Resident/ResidentParticipation'
import EditResident from './EditResident';
import NewNote from '../ResidentNotes/NewNote';
import Modal from '../Utilities/Modal'
import ViewAssessment from '../Assessment/ViewAssessment';
import ActivitiesForChart from '../Utilities/Chart/ActivitiesForChart'


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
            <div className="res-details conts">
                <h1>{props.activeResident.r_first_name} {props.activeResident.r_last_name}</h1>
                    <ActivitiesForChart activities={participation.activity} />
                        <hr />
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-2 btn-col">
                                <button className="text-btn" onClick={notesOnClick}>New Note</button>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-3 btn-col">
                                <button className="text-btn mx-4" onClick={editOnClick}>Edit Resident Details</button>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-3 btn-col">    
                                <button className="text-btn" onClick={assessmentOnClick}>View Assessment</button>
                            </div>
                        </div>
                        <div className="row">
                            <Notes  resident={props.activeResident} getNotesByRes={props.getNotesByRes} notes={notes}/>
                            <Modal onClick={notesOnClick} hideShow={notesHS}>
                                <NewNote onClick={notesOnClick} getNotesByRes={props.getNotesByRes} resident={props.activeResident.id}/>
                            </Modal>
                            <Modal onClick={editOnClick} hideShow={editHS} >
                                <EditResident resident={props.activeResident} getResidents={props.getResidents}/>
                            </Modal>
                            <Modal onClick={assessmentOnClick} hideShow={assessmentHS}>
                                <ViewAssessment resident={props.activeResident.id} />
                            </Modal>
                        </div>
                    <hr />
                    <br />
                    <div className="row">
                        <ResidentParticipation getParticipation={props.getParticipation} participation={participation} />
                    </div>
            </div>
        </>
     );
}

export default ResidentDetail;