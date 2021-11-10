import React from 'react';
import './Styles/AnonBody.css';
import AnonMainNav from './AnonMainNav'


function AnonBody() {
    return ( 
        <>
        <div className="my-wrapper">
            <div className="anon-page"> 
            <div className="page-content">
                <AnonMainNav />
            </div>
            </div>
        </div>

        
        </>
     );
}

export default AnonBody;