import React, {useState} from 'react';
import axios from 'axios';
import './Styles/Notes.css'

const NewNote=(props)=> {

    const[content, setContent]=useState('')
    const[date, setDate]=useState('')
    const[residentId, setResidentId]=useState(props.resident)

    const postNewNote =async(resident_id, note)=>{
        const jwt = localStorage.getItem('token')
        try{
        await axios.post(`http://127.0.0.1:8000/api/actiscribe/residents/${resident_id}/notes/`, note, {headers: {Authorization: 'Bearer '+ jwt}});
        console.log("Note added successfully.")
        props.getNotesByRes(residentId)
        }
        catch(err){
            console.log(err, "Problem adding new note.")
        }
        props.onClick()
    }
    
    const handleChange = (event)=>{
        event.preventDefault()
        setContent(event.target.value)
    }

    const handleDate = (event)=>{
        event.preventDefault()
        setDate(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        setResidentId(props.resident)
        let newNote ={
            "content": content,
            "note_date":date
        }
        postNewNote(residentId, newNote)
    }

    return ( 
        <>
        <div className="new-notes">
            <form onSubmit={onSubmit}>
                <p><label className="new-note-label">Write a New Note</label></p>
                <p><textarea rows="4" maxLength="400" className="new-note-field" name="content" onChange={handleChange} placeholder={"Your Note Here"} required/></p>
                <input className="note-date" type="date" name="date" onChange={handleDate} required />
                <button className="text-btn edit-note-btn" type="submit">Add Note</button>
            </form>
        </div>
        </>
     );
}

export default NewNote;