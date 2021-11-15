import React, {useState, useEffect} from 'react';
import Modal from '../Utilities/Modal'
import EditActivity from './EditActivity';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ActivityDetail=(props)=>{

    const notifyA = () => toast('Status Change Successful', {containerId:'A'});
    const notifyB = () => toast('Status Change Failed', {containerId:'B'});
    const notifyC = () => toast("Delete Successful", {containerId:'C'})
    const notifyD = () => toast("Delete Failed", {containerId:'D'})
    const notifyE = () => toast("Edits made successfully", {containerId:'E'});
    const notifyF = () => toast("Edits failed", {containerId:'F'});

    const[participation, setParticipation]=useState([])
    const[editHS, setEditHS]=useState(false)
    const[error, setError]=useState()

    const editOnClick=()=>{
        setEditHS(!editHS)
    }

    useEffect(()=>{
        try{
            setParticipation(props.participation)
            setError(false)
        }
        catch(ex){
            setError(true)
        }
    },[])

    useEffect(()=>{
        try{
            setParticipation(props.participation)
            setError(false) 
        }
        catch(ex){
            setError(true)
        }
    }, [props])

    
    
    if (Object.keys(props.participation).length===0|| error===true){
        return(<p>No Participation Data</p>)
    }
    if (Object.keys(props.participation).length>0 || error===false){
    return ( 
            <>
            <div className="conts activity-details">
                <h1>Activity: {props.activity.name}</h1>
                <p>{props.activity.description}</p>
                <table>
                    <tbody>
                        <tr>
                            <th className="act-dow-col">Dimensions of Wellness:</th>
                            <td className="act-dow-col">{props.activity.dow_one}</td>
                            <td className="act-dow-col">{props.activity.dow_two}</td>
                            <td className="act-dow-col">{props.activity.dow_three}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="text-btn filter-btn" onClick={editOnClick}>Edit Activity</button>
                <Modal onClick={editOnClick} hideShow={editHS}> 
                    <EditActivity onClick={editOnClick} setActiveActivity={props.setActiveActivity} getArchivedActivities={props.getArchivedActivities} activity={props.activity} getAllActivities={props.getAllActivities} notifyA={notifyA} notifyB={notifyB} notifyC={notifyC} notifyD={notifyD} notifyE={notifyE} notifyF={notifyF}/>
                </Modal>
                <hr />
                    <div className="row">
                        <div className="col-4 act-part">
                            {props.participation.resident.map((resident, index)=>{
                                return(<p key={index}>{resident.r_first_name} {resident.r_last_name} </p>
                                    )})}
                        </div>
                        <div className="col-4">
                            {props.participation.participation.map((date)=>{
                                return(<p key= {date.id}>{date.date}</p>
                                    )})}
                        </div>
                    </div>
                </div>
                <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.TOP_RIGHT} />
                <ToastContainer enableMultiContainer containerId={'B'} position={toast.POSITION.TOP_RIGHT} />
                <ToastContainer enableMultiContainer containerId={'C'} position={toast.POSITION.TOP_RIGHT} />
                <ToastContainer enableMultiContainer containerId={'D'} position={toast.POSITION.TOP_RIGHT} />
                <ToastContainer enableMultiContainer containerId={'E'} position={toast.POSITION.TOP_RIGHT} />
                <ToastContainer enableMultiContainer containerId={'F'} position={toast.POSITION.TOP_RIGHT} />
            </>
        );
    }
}

export default ActivityDetail;