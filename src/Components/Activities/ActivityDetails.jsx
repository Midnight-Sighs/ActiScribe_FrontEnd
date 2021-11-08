import React, {useState, useEffect} from 'react';

const ActivityDetail=(props)=>{

    const[participation, setParticipation]=useState('')

    useEffect(()=>{
        console.log(props.participation.length)
    }, [participation])
    
    return ( 
        <>
        <h1>{props.activity.name}</h1>
            <div className="row">
                <div className="col-4">
                    {props.participation.resident.map((resident)=>{
                        return(<p>{resident.r_first_name}</p>
                    )})}
                </div>
                <div className="col-4">
                    {props.participation.participation.map((date)=>{
                        return(<p>{date.date}</p>
                    )})}
                </div>
            </div>
        </>
     );
}

export default ActivityDetail;