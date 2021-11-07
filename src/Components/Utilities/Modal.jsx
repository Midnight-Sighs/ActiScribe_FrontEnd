import React, {useState} from 'react';
import './Utilities.css'
import EditResident from '../Resident/EditResident';

const Modal=(props)=> {
    
    const[hideShow, setHideShow]=useState(false)
    const[editResident, setEditResident]=useState(false)
    const[editActivity, setEditActivity]=useState(false)

    const onClick =()=>{
        setHideShow(!hideShow)
    }

    return ( 
        <>
            {hideShow? null: <button onClick={onClick}>Edit</button>}
            {hideShow ? 
            <div className = "modal-wrapper">
                <div className="modal-body">
                    <EditResident resident={props.resident}/>
                    <button onClick={onClick}>Close Modal</button>
                </div>
            </div>
            
            : null}
        </>
     );
}

export default Modal;