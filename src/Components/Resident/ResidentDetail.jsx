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
                                <div>
                                    <p>{note.content}
                                    <br />{note.note_date}</p>
                                </div>
                            </>
                        )})}
                        
            </div>
        </>
     );
}

export default ResidentDetail;