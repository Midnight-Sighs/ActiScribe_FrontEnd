import React, {useState} from 'react';
import ResidentSubNav from './ResidentSubNav';


const ResidentDetail=(props)=> {

    return ( 
        <>
            <div>
               <h1>{props.activeResident.r_first_name} {props.activeResident.r_last_name}</h1>

            </div>
        </>
     );
}

export default ResidentDetail;