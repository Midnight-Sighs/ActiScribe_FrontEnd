import React, {useState, useEffect} from 'react';
import Notes from '../ResidentNotes/Notes'
import ResidentParticipation from '../Resident/ResidentParticipation'
import EditResident from './EditResident';
import NewNote from '../ResidentNotes/NewNote';
import Modal from '../Utilities/Modal'
import ViewAssessment from '../Assessment/ViewAssessment';
import Chart from '../Utilities/Chart/Chart'


const ResidentDetail=(props)=> {
    
    const[notes, setNotes]=useState(props.notes)
    const[participation, setParticipation]=useState(props.participation)
    const[editHS, setEditHS]=useState(false)
    const[notesHS, setNotesHS]=useState(false)
    const[assessmentHS, setAssessmentHS]=useState(false)
    const[partNumbers, setPartNumbers]=useState([])
    const[partLoaded, setPartLoaded]=useState(false)

    const filterAllActivities=()=>{
        let x = filterActivities("Social");
        let y = filterActivities("Physical");
        let z = filterActivities("Emotional");
        let a = filterActivities("Spiritual");
        let b = filterActivities("Environmental");
        let c = filterActivities("Financial");
        let d = filterActivities("Intellectual");
        let e = filterActivities("Creative");
        let f = filterActivities("Occupational");
        let g = filterActivities("Sensory");
        setPartNumbers([
            {name: "Social" ,value: x},
            {name: "Physical" ,value: y},
            {name: "Emotional" ,value: z},
            {name: "Spiritual" ,value: a},
            {name: "Environmental" ,value:b},
            {name: "Financial" ,value: c},
            {name: "Intellectual" ,value: d},
            {name: "Creative" ,value: e},
            {name: "Occupational" ,value: f},
            {name: "Sensory" ,value: g},
        ])
    }

    const filterActivities=(dow)=>{
        let filtered =[];
        if (Object.keys(props.participation).length>0){
            participation.activity.map((activity)=>{
                if(activity.dow_one === dow || activity.dow_two === dow|| activity.dow_three === dow){
                    filtered.push(activity)
                }
            })
            let x = filtered.length
            if(x ===0){
                x = 1
            }
            return x
        }
    }

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

    useEffect(()=>{
        filterAllActivities()
    }, [participation])

    useEffect(()=>{
        setPartLoaded(true)
    }, [partNumbers])

    if(props.activeResident == undefined){
        return(<p>Error getting resident details.</p>)
    }

    return ( 
        <>
            <div className="res-details">
                <h1>{props.activeResident.r_first_name} {props.activeResident.r_last_name}</h1>
                    <div className="row">
                        <div className="res-notes">
                            <button onClick={notesOnClick}>New Note</button>
                            <Notes  notes={notes}/>
                            <Modal onClick={notesOnClick} hideShow={notesHS}>
                                <NewNote resident={props.activeResident.id}/>
                            </Modal>
                        </div>
                    </div>
                    <div className="row">
                        {partLoaded ?
                        <div className ="col-6 res-chart">
                            <Chart data={partNumbers} />
                        </div> :null}
                        <div className="col-6 res-part">
                            <ResidentParticipation participation={participation} />
                        </div>
                    </div>
                    <button onClick={editOnClick}>Edit Resident Details</button>
                    <Modal onClick={editOnClick} hideShow={editHS} >
                        <EditResident resident={props.activeResident} getResidents={props.getResidents}/>
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