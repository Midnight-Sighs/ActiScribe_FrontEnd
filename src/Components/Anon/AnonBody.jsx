import React from 'react';
import './Styles/AnonBody.css';
import Header from '../HeadAndFoot/Header'
import AnonSubNav from '../Tutorials/TutorialSubNav'
import AnonMainNav from './AnonMainNav'

function AnonBody() {
    return ( 
        <>
        <div className="anon-page"> 
        <div className="page-content">
            <Header />
            <AnonMainNav />
        </div>
        </div>

        
        </>
     );
}

export default AnonBody;