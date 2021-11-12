import React from 'react';
import './Styles/AnonBody.css'
import TutorialSubNav from '../Tutorials/TutorialSubNav'
import FeatureSubNav from '../Anon/SiteFeatures/FeatureSubNav'
import AnonHome from './AnonHome'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

function AnonMainNav() {
    return ( 
        <>
        <Router>
        <div className = "row">
            <div className="col-4"></div>
                <div className="col-4 col-sm-row tutorial-nav">
                    <div class="d-flex align-items-start">
                    <nav class="nav nav-tabs" id="nav-tab" role="tablist">
                        <Link to="/" class="nav-link" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</Link>
                        <Link to="/Tutorials_Home" class="nav-link" id="nav-tutorials-tab" data-bs-toggle="tab" href="#nav-tutorials" role="tab" aria-controls="nav-tutorials" aria-selected="false">Tutorials</Link>
                        <Link to="/Features_Home" class="nav-link" id="nav-features-tab" data-bs-toggle="tab" href="#nav-features" role="tab" aria-controls="nav-features" tabindex="-1" aria-selected="false">Site Features</Link>
                    </nav>
                </div>
            </div>
        </div>
            <div className="anon-home" ><Route exact path="/" component={AnonHome} /></div>
            <Route exact path="/Tutorials_Home" component={TutorialSubNav} />
            <Route exact path="/Features_Home" component={FeatureSubNav} /> 
        </Router>    
            
        </>
     );
}

export default AnonMainNav;