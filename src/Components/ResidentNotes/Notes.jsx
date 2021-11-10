import React, {useState, useEffect} from 'react';
import EditNote from './EditNote'
import './Styles/Notes.css'

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
                        <div className="note-content" key={note.id}>
                            <span>{note.content}</span>
                            <div className = "row">
                                <div className="col-6">
                                    <p className="note-date"> :{note.note_date}</p>
                                </div>
                                <div className="col-6">
                                    <button className="edit-note-btn" onClick={editOnClick}>Edit Note</button>
                                </div>
                            </div>
                            {editHS ? <EditNote note={note} />: null}
                        </div>
                    </>
                )})}
            </>
        );
    }
}

export default Notes;