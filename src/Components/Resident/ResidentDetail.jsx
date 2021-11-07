import React, {useState, useEffect} from 'react';
import ResidentSubNav from './ResidentSubNav';


const ResidentDetail=(props)=> {
    
    const[notes, setNotes]=useState('')

    useEffect(()=>{

    },[props])

    return ( 
        <>
            <div>
                <h1>{props.activeResident.r_first_name} {props.activeResident.r_last_name}</h1>
                    {props.notes.map((note)=>{
                        return(
                            <>
                                <div key={note.id}>
                                    <p>{note.content}
                                    <br />{note.note_date}</p>
                                </div>
                            </>
                        )})}
                        {props.participation.activity.map((activity)=>{
                            return(
                                <>
                                    <div>
                                        {activity.name} 
                                        {activity.dow_one}  
                                        {activity.dow_two}  
                                        {activity.dow_three}  
                                    </div>
                                </>
                            )
                        })}
                        {props.participation.participation.map((date)=>{
                            return(
                                <>
                                    <div>
                                        {date.date}
                                    </div>
                                </>
                            )

                        })}
            </div>
        </>
     );
}

export default ResidentDetail;