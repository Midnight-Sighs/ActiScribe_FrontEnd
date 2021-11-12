import React, {useState} from 'react';
import axios from 'axios';

const EditNote=(props)=> {

    const[noteContent, setNoteContent]=useState(props.note.content)
    const[noteId, setNoteId]=useState(props.note.id)

    const editNote =async(noteId, note)=>{
        const jwt = localStorage.getItem('token')
        try{
        await axios.put(`http://127.0.0.1:8000/api/actiscribe/notes/${noteId}/`, note, {headers: {Authorization: 'Bearer '+ jwt}});
        console.log("Note edited successfully")
        props.getNotesByRes(props.resident.id)
        }
        catch(err){
            console.log(err, "Error editing note.")
        }
        props.onClick()
    }

    const deleteNote = async(noteId)=>{
        const jwt = localStorage.getItem('token')
        try{
        await axios.delete(`http://127.0.0.1:8000/api/actiscribe/notes/${noteId}/`, {headers: {Authorization: 'Bearer '+ jwt}});
        console.log("Note deleted successfully.")
        debugger
        props.getNotesByRes(props.resident.id)
        }
        catch(err){
            console.log(err, "Error deleting note.")
        }
        props.onClick()
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        let editedNote = {
            "content": noteContent
        }
        editNote(noteId, editedNote)
    }

    const deleteClick=()=>{
        deleteNote(noteId)
    }


    return ( 
        <>
            <form onSubmit={onSubmit}>
                <input className="edit-field" maxLength="400" name="noteContent" onChange={e=>setNoteContent(e.currentTarget.value)} value={noteContent} required></input>
                <button type="submit edit-btn">Save Changes</button>
            </form>
                <button type="button text-btn" onClick={deleteClick}>Delete Note</button>
        </>
     );
}

export default EditNote;