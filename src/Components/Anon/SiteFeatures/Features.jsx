import React from 'react';
import '../../Tutorials/Styles/Tutorials.css'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';


const SiteFeatures=()=> {
    return ( 
        <>
                <div className="tutorial-container">
                    <h1>Site Features</h1>
                    <p>Thank you for taking the time to check out Actiscribe!  Here you can find some tidbits about why you should subscribe!  If you want to read more before making up your mind, check out the tutorial section!</p>
                </div>
        </>
     );
}

export default SiteFeatures;