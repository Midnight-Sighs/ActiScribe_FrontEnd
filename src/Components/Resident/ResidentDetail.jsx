import React, {useState, useEffect} from 'react';
import ResidentSubNav from './ResidentSubNav';


const ResidentDetail=(props)=> {
    
    const[notes, setNotes]=useState(props.notes)
    const[participation, setParticipation]=useState(props.participation)

    useEffect(()=>{
        setNotes(props.notes)
        setParticipation(props.participation)
    },[props])


    return ( 
        <>
            <div>
                <h1>{props.activeResident.r_first_name} {props.activeResident.r_last_name}</h1>
                    {notes.map((note)=>{
                        if(notes.legnth==0){
                            return(
                                <>
                                <div>
                                    <p>There are currently no notes for this resident.</p>
                                </div>
                                </>
                            )
                        }else{
                        return(
                            <>
                                <div key={note.id}>
                                    <p>{note.content}
                                    <br />{note.note_date}</p>
                                </div>
                            </>
                        )}
                    })}
                        {participation.activity.map((activity)=>{
                            if(participation.length == 0){
                                return(
                                    <div>
                                        <p>No participation listed for this resident.</p>
                                    </div>
                                )
                            }
                            else{
                            return(
                                <>
                                    <div>
                                        {activity.name} 
                                        {activity.dow_one}  
                                        {activity.dow_two}  
                                        {activity.dow_three}  
                                    </div>
                                </>
                            )}
                        })}
    
                        {participation.participation.map((date)=>{
                            if(participation.legnth == 0){
                                return
                            }
                            else{
                                return(
                                    <>
                                        <div>
                                            {date.date}
                                        </div>
                                    </>
                                )
                            }
                        })}         
            </div>
        </>
     );
}

export default ResidentDetail;