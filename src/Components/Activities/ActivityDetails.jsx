import { now } from 'd3-timer';
import React, {useState, useEffect} from 'react';
import Modal from '../Utilities/Modal'
import EditActivity from './EditActivity';

const ActivityDetail=(props)=>{

    const[participation, setParticipation]=useState([])
    const[editHS, setEditHS]=useState(false)
    const[error, setError]=useState()
    const[filteredParticipation, setFilteredParticipation]=useState()

    const editOnClick=()=>{
        setEditHS(!editHS)
    }

    useEffect(()=>{
        try{
            setParticipation(props.participation)
            setError(false)
            // sortByDate()
        }
        catch(ex){
            setError(true)
        }
    },[])

    useEffect(()=>{
        try{
            setParticipation(props.participation)
            setError(false)
            // sortByDate()  
        }
        catch(ex){
            setError(true)
        }
    }, [props])

    // const sortByDate =()=>{
    //     debugger
    //     let today = new Date()
    //     let yesterday = new Date(today-1)
    //     setFilteredParticipation(yesterday)
    // }
    
    
    if (Object.keys(props.participation).length===0|| error===true){
        return(<p>No Participation Data</p>)
    }
    if (Object.keys(props.participation).length>0 || error===false){
    return ( 
            <>
            <div className="conts activit-details">
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
                <button className="text-btn" onClick={editOnClick}>Edit Activity</button>
                <Modal onClick={editOnClick} hideShow={editHS}> 
                    <EditActivity activity={props.activity} getAllActivities={props.getAllActivities}/>
                </Modal>
                <hr />
                    <div className="row">
                        <div className="col-4">
                            {props.participation.resident.map((resident, index)=>{
                                return(<p key={index}>{resident.r_first_name}</p>
                            )})}
                        </div>
                        <div className="col-4">
                            {props.participation.participation.map((date)=>{
                                return(<p key= {date.id}>{date.date}</p>
                            )})}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ActivityDetail;