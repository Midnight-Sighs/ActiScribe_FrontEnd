import React, {useState, useEffect} from 'react';
import Modal from '../Utilities/Modal'
import EditNote from './EditNote'

const Notes=(props)=> {

    const[notes, setNotes]=useState(props.notes)
    const[editHS, setEditHS]=useState(false)

    useEffect(()=>{
        setNotes(props.notes)
    }, [props])

    const editOnClick=()=>{
        setEditHS(!editHS)
    }

    if(props.notes.length==0){
        return(
            <h3>There are currently no notes for this resident.</h3>
        )
    }
    else{
        return ( 
            <>
            {notes.map((note)=>{
                return(
                    <>
                        <div key={note.id}>
                            <p>{note.content}
                            <br />{note.note_date}</p>
                            <button onClick={editOnClick}>Edit Note</button>
                            {editHS ? <EditNote note={note} />: null}
                        </div>
                    </>
                )})}
            </>
        );
    }
}

export default Notes;