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
    const[percentSoc, setPercentSoc]=useState()
    const[percentPhy, setPercentPhy]=useState()
    const[percentEmo, setPercentEmo]=useState()
    const[percentSpi, setPercentSpi]=useState()
    const[percentEnv, setPercentEnv]=useState()
    const[percentFin, setPercentFin]=useState()
    const[percentInt, setPercentInt]=useState()
    const[percentCre, setPercentCre]=useState()
    const[percentOcc, setPercentOcc]=useState()
    const[percentSen, setPercentSen]=useState()
    const[percentsLoaded, setPercentsLoaded]=useState()

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
        let sum = (x+y+z+a+b+c+d+e+f+g)
        let percentX=calculatePercentage(x, sum)
        setPercentSoc(percentX)
        let percentY=calculatePercentage(y, sum)
        setPercentPhy(percentY)
        let percentZ=calculatePercentage(z, sum)
        setPercentEmo(percentZ)
        let percentA=calculatePercentage(a, sum)
        setPercentSpi(percentA)
        let percentB=calculatePercentage(b, sum)
        setPercentEnv(percentB)
        let percentC=calculatePercentage(c, sum)
        setPercentFin(percentC)
        let percentD=calculatePercentage(d, sum)
        setPercentInt(percentD)
        let percentE=calculatePercentage(e, sum)
        setPercentCre(percentE)
        let percentF=calculatePercentage(f, sum)
        setPercentOcc(percentF)
        let percentG=calculatePercentage(g, sum)
        setPercentSen(percentG)
        if(x ===.1 && y===.1 &&z===.1&&a===.1&&b===.1&&c===.1&&d===.1&&e===.1&&f===.1&&g===.1){
            setPartLoaded(false)
            setPercentsLoaded(false)
        }
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
        if( !participation){
            setPartLoaded(false)
            console.log("Resident has no activity to display.")
        }
        if (Object.keys(participation).length>0){
            participation.activity.map((activity)=>{
                if(activity.dow_one === dow || activity.dow_two === dow|| activity.dow_three === dow){
                    filtered.push(activity)
                }
            })
            let x = filtered.length
            setPartLoaded(true)
            return x
        }
    }

    const calculatePercentage=(x, sum)=>{
        let number = x/sum;
        if(number === 1){
            let rounded = 100
            return rounded
        }
        else{
            let percent = number *100
            let rounded = Math.round(percent)
            return rounded
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
        if(percentSen !== NaN){
            setPercentsLoaded(true)
        }
    },[percentSen])

    useEffect(()=>{
    }, [partNumbers])

    if(props.activeResident == undefined){
        return(<p>Error getting resident details.</p>)
    }

    return ( 
        <>
            <div className="res-details">
                <h1>{props.activeResident.r_first_name} {props.activeResident.r_last_name}</h1>
                    
                    <div className="row">
                        {partLoaded ?
                        <div className ="col-4">
                            <Chart data={partNumbers} />
                        </div> : <p>No participation to display.</p>}
                        {percentsLoaded? 
                        <div className="col-4 res-perc">
                            <table>
                                <tbody>
                                    <tr> 
                                        <td>Social Participation: </td><td> {percentSoc}%</td>
                                    </tr>
                                    <tr>
                                        <td>Physical Participation:  </td><td>{percentPhy}%</td>
                                    </tr>
                                    <tr>
                                        <td>Emotional Participation:  </td><td>{percentEmo}%</td>
                                    </tr>
                                    <tr>
                                        <td>Spiritual Participation:  </td><td>{percentSpi}%</td>
                                    </tr>
                                    <tr>
                                        <td>Environmental Participation:  </td><td>{percentEnv}%</td>
                                    </tr>
                                    <tr>
                                        <td>Financial Participation:  </td><td>{percentFin}%</td>
                                    </tr>
                                    <tr>
                                        <td>Intellectual Participation:  </td><td>{percentInt}%</td>
                                    </tr>
                                    <tr>
                                        <td>Creative Participation:  </td><td>{percentCre}%</td>
                                    </tr>
                                    <tr>
                                        <td>Occupational Participation:  </td><td>{percentOcc}%</td>
                                    </tr>
                                    <tr>
                                        <td>Sensory Participation:  </td><td>{percentSen}%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> :null}
                        <div className=" col-4 res-notes">
                            <button className="new-note-btn" onClick={notesOnClick}>New Note</button>
                            <Notes  notes={notes}/>
                            <Modal onClick={notesOnClick} hideShow={notesHS}>
                                <NewNote resident={props.activeResident.id}/>
                            </Modal>
                    </div>

                    <div className="row">
                        </div>
                    </div>
                            <ResidentParticipation participation={participation} />
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