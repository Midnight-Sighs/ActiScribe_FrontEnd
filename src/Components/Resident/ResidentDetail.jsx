import React, {useState, useEffect} from 'react';
import Notes from '../ResidentNotes/Notes'
import ResidentParticipation from '../Resident/ResidentParticipation'
import EditResident from './EditResident';
import NewNote from '../ResidentNotes/NewNote';
import Modal from '../Utilities/Modal'
import ViewAssessment from '../Assessment/ViewAssessment';
import ActivitiesForChart from '../Utilities/Chart/ActivitiesForChart'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ResidentDetail=(props)=> {
    
    const[notes, setNotes]=useState(props.notes)
    const[participation, setParticipation]=useState(props.participation)
    const[editHS, setEditHS]=useState(false)
    const[notesHS, setNotesHS]=useState(false)
    const[assessmentHS, setAssessmentHS]=useState(false)

    const notifyK = (resName) => toast(`Edits for ${resName} Successful`, {containerId:'K'});
    const notifyL = (resName) => toast(`Edits for ${resName} Failed`, {containerId:'L'});
    const notifyM = () => toast("Status Change Successful", {containerId:'M'})
    const notifyN = () => toast("Status Change Failed", {containerId:'N'})
    const notifyO = () => toast('New Assessment Saved Successfully', {containerId:'O'});
    const notifyP = () => toast('New Assessment Failed', {containerId:'P'});
    const notifyQ = () => toast("Successfully Edited Assessment", {containerId:'Q'})
    const notifyR = () => toast("Failed to Edit Assessment", {containerId:'R'})
    

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

    if(props.activeResident === undefined){
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
                                <EditResident setResident={props.setResident} onClick={editOnClick} notifyN={notifyN} notifyM={notifyM} notifyL={notifyL} notifyK={notifyK} resident={props.activeResident} getResidents={props.getResidents}/>
                            </Modal>
                            <Modal onClick={assessmentOnClick} hideShow={assessmentHS}>
                                <ViewAssessment notifyR={notifyR} notifyQ={notifyQ} notifyP={notifyP} notifyO={notifyO} onClick={assessmentOnClick} resident={props.activeResident.id} />
                            </Modal>
                        </div>
                    <hr />
                    <br />
                    <div className="row">
                        <ResidentParticipation getParticipation={props.getParticipation} participation={participation} />
                    </div>
            </div>
            <ToastContainer enableMultiContainer containerId={'K'} position={toast.POSITION.TOP_RIGHT} />
            <ToastContainer enableMultiContainer containerId={'L'} position={toast.POSITION.TOP_RIGHT} />
            <ToastContainer enableMultiContainer containerId={'M'} position={toast.POSITION.TOP_RIGHT} />
            <ToastContainer enableMultiContainer containerId={'N'} position={toast.POSITION.TOP_RIGHT} />
            <ToastContainer enableMultiContainer containerId={'O'} position={toast.POSITION.TOP_RIGHT} />
            <ToastContainer enableMultiContainer containerId={'P'} position={toast.POSITION.TOP_RIGHT} />
            <ToastContainer enableMultiContainer containerId={'Q'} position={toast.POSITION.TOP_RIGHT} />
            <ToastContainer enableMultiContainer containerId={'R'} position={toast.POSITION.TOP_RIGHT} />   
        </>
     );
}

export default ResidentDetail;