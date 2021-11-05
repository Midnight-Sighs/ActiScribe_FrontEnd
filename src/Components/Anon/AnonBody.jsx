import React from 'react';
import './Styles/AnonBody.css';
import AnonMainNav from './AnonMainNav'


function AnonBody() {
    return ( 
        <>
        <div className="anon-page"> 
        <div className="page-content">
            <AnonMainNav />
        </div>
        </div>

        
        </>
     );
}

export default AnonBody;