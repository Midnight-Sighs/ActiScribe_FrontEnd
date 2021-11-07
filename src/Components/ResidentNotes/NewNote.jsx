import React, {useState} from 'react';
import axios from 'axios';

const NewNote=(props)=> {

    const[content, setContent]=useState('')
    const[date, setDate]=useState('')
    const[residentId, setResidentId]=useState(props.resident)

    const postNewNote =async(resident_id, note)=>{
        const jwt = localStorage.getItem('token')
        await axios.post(`http://127.0.0.1:8000/api/actiscribe/residents/${resident_id}/notes/`, note, {headers: {Authorization: 'Bearer '+ jwt}});
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

        <form onSubmit={onSubmit}>
            <label className="new-note-label">Write a New Note</label>
            <input className="new-note-field" name="content" onChange={handleChange} placeholder={"Your Note Here"} />
            <input className="note-date" type="date" name="date" onChange={handleDate} />
            <button type="submit">Add Note</button>
        </form>

        </>
     );
}

export default NewNote;