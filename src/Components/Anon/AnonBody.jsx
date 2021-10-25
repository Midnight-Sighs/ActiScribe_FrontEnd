import React from 'react';
import './Styles/AnonBody.css';
import Tutorials from '../Tutorials/Tutorials'
import AnonSubNav from './AnonSubNav'

function AnonBody() {
    return ( 
        <>
        <AnonSubNav />
        <Tutorials />
        </>
     );
}

export default AnonBody;