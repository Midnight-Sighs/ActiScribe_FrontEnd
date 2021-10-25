import React from 'react';
import './Styles/AnonBody.css'
import AnonSubNav from '../Tutorials/TutorialSubNav'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

function AnonMainNav() {
    return ( 
        <>
        <Router>
            <nav class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                <Link to="/Tutorials_Home" class="nav-link" id="nav-tutorials-tab" data-bs-toggle="tab" href="#nav-tutorials" role="tab" aria-controls="nav-tutorials" aria-selected="false">Tutorials</Link>
                <a class="nav-link disabled" id="nav-features-tab" data-bs-toggle="tab" href="#nav-features" role="tab" aria-controls="nav-features" tabindex="-1" aria-disabled="true">Site Features</a>
            </nav>
            <Route path="/Tutorials_Home">
                <AnonSubNav />
            </Route>
        </Router>

        
            
        </>
     );
}

export default AnonMainNav;