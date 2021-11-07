import React, {useState} from 'react';
import axios from 'axios';

const EditNote=(props)=> {

    const[noteContent, setNoteContent]=useState(props.note.content)
    const[noteId, setNoteId]=useState(props.note.id)

    const editNote =async(noteId, note)=>{
        const jwt = localStorage.getItem('token')
        await axios.put(`http://127.0.0.1:8000/api/actiscribe/notes/${noteId}/`, note, {headers: {Authorization: 'Bearer '+ jwt}});
    }

    const deleteNote = async(noteId)=>{
        const jwt = localStorage.getItem('token')
        await axios.delete(`http://127.0.0.1:8000/api/actiscribe/notes/${noteId}/`, {headers: {Authorization: 'Bearer '+ jwt}});
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        let editedNote = {
            "content": noteContent
        }
        editNote(noteId, editedNote)
        props.onClick()
    }

    const deleteClick=()=>{
        deleteNote(noteId)
    }


    return ( 
        <>
            <form onSubmit={onSubmit}>
                <input className="edit-field" name="noteContent" onChange={e=>setNoteContent(e.currentTarget.value)} value={noteContent}></input>
                <button type="submit">Save Changes</button>
            </form>
                <button type="button" onClick={deleteClick}>Delete Note</button>
        </>
     );
}

export default EditNote;