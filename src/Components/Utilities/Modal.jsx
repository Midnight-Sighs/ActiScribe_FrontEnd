import React, {useState, useEffect} from 'react';
import './Utilities.css'

const Modal=(props)=> {
    

    useEffect(()=>{

    },[])

    return ( 
        <>
            {props.hideShow ? 
            <div className = "modal-wrapper">
                <div className="modal-body">
                    {props.children}
                    <br/>
                    <button className="modal-close" onClick={props.onClick}>Close Without Saving</button>
                </div>
            </div>
            
            : null}
        </>
     );
}

export default Modal;