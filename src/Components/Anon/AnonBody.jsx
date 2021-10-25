import React from 'react';
import './Styles/AnonBody.css';
import Header from '../HeadAndFoot/Header'
import AnonSubNav from './AnonSubNav'

function AnonBody() {
    return ( 
        <>
        <div className="anon-page"> 
        <div className="page-content">
            <Header />
            <AnonSubNav />
        </div>
        </div>

        
        </>
     );
}

export default AnonBody;