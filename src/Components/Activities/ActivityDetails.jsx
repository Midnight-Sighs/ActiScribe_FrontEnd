import React, {useState, useEffect} from 'react';
import Modal from '../Utilities/Modal'
import EditActivity from './EditActivity';

const ActivityDetail=(props)=>{

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
    })

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
            <div className="conts">
                <h1>Activity: {props.activity.name}</h1>
                <table>
                    <tbody>
                        <tr>
                            <td className="act-dow-col">{props.activity.dow_one}</td>
                            <td className="act-dow-col">{props.activity.dow_two}</td>
                            <td className="act-dow-col">{props.activity.dow_three}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={editOnClick}>Edit Activity</button>
                <Modal onClick={editOnClick} hideShow={editHS}> 
                    <EditActivity activity={props.activity}/>
                </Modal>
                    <div className="row">
                        <div className="col-4">
                            {props.participation.resident.map((resident)=>{
                                return(<p key={resident.id}>{resident.r_first_name}</p>
                            )})}
                        </div>
                        <div className="col-4">
                            {props.participation.participation.map((date)=>{
                                return(<p key={date.id}>{date.date}</p>
                            )})}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ActivityDetail;