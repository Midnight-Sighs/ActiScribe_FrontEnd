import React from 'react';
import AnonHome from '../../../Screenshots/AnonHome.png'
import Filter from '../../../Screenshots/Filter.png'
import Modal from '../../../Screenshots/Modal.png'
import ResidentDetail from '../../../Screenshots/ResidentDetail.png'
import Toasts from '../../../Screenshots/Toasts.png'
import './Styles/Features.css'

const ScreenShots=()=> {
    return ( 
        <>
        <div className="conts screen-shots">
            <div className="row">
                <div className="col-6">
                    <img src={AnonHome} />
                    <p>Non-Member Home Page</p>
                </div>
                <div className="col-6">
                    <img src={Filter} />
                    <p>Activity Filter Page</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <img src={Modal} />
                    <p>Pop Up Edits</p>
                </div>
                <div className="col-6">
                    <img src={ResidentDetail} />
                    <p>Resident Detail Page</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <img src={Toasts} />
                    <p>Alerts and New Residents</p>
                </div>
                <div className="col-6 call-to-action">
                    <h1> Are You Ready To Sign Up?</h1>
                    <h3>Register Above Today!</h3>
                </div>
            </div>
        </div>
        </>
     );
}

export default ScreenShots;