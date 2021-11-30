import React, {useState, useEffect} from 'react';
import EditNote from './EditNote'
import './Styles/Notes.css'

const Notes=(props)=> {

    const[notes, setNotes]=useState(props.notes)
    const[editHS, setEditHS]=useState(false)
    const[activeNoteId, setActiveNoteId]=useState(null)

    useEffect(()=>{
        setNotes(props.notes)
    }, [props])

    const editOnClick=(note)=>{
        if(note){
        setActiveNoteId(note.id)}
        setEditHS(!editHS)
    }

    if(props.notes.length===0){
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
                            <div className = "row">
                                <div className="col-8">
                                        <span>{note.content}</span>
                                </div>
                                <div className="col-2">
                                    <p className="note-date"> :{note.note_date}</p>
                                </div>
                                <div className="col-2">
                                    {editHS ? <button className="text-btn" onClick={editOnClick}>Close Edit</button>:<button className="text-btn" onClick={()=>editOnClick(note)}>Edit Note</button>}
                                </div>
                            </div>
                            {editHS && (note.id === activeNoteId) ? <EditNote resident={props.resident} getNotesByRes={props.getNotesByRes} onClick={editOnClick}note={note} />: null}
                        </div>
                    </>
                )})}
            </>
        );
    }
}

export default Notes;