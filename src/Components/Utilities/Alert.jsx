import React from 'react';
import { useEffect } from 'react/cjs/react.development';

const Toast=(props)=> {
    
    useEffect(()=>{

    },[])

    return ( 
        <>
            {props.hideShow ? 
            <div className = "alert-wrapper">
                <div className="alert-box">
                    <div className="alert-body">
                        <p>{props.children}</p>
                        <br/>
                        <button className="text-btn" onClick={props.onClick}>Close</button>
                    </div>
                </div>
            </div>
            
            : null}
        </>
     );
}

export default Toast;