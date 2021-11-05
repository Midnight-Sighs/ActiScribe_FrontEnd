import React from 'react';
import './Styles/HeadAndFoot.css'

function Header() {
    return ( 
        <>
            <div className ="title-bar">
                <div className="row">
                        <div className = "col-1">
                            <span></span>
                        </div>
                        <div className="col-8">
                            <h1 className = "title">Actiscribe</h1>
                        </div>
                        <div className = "col-2 log-reg">
                            <span>Login   Register</span>
                        </div>
                </div>        
            </div>
        </>
     );
}

export default Header;