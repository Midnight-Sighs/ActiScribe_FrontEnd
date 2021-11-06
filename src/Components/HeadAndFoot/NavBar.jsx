import React from 'react';
import ResidentHome from '../Resident/ResidentHome';
import TutorialHome from'../Tutorials/TutorialSubNav'
import ActivityHome from '../Activities/ActivityHome';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './Styles/HeadAndFoot.css'

function NavBar() {
    return ( 
        <>
        <Router>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <nav class="nav nav-tabs" id="nav-tab" role="tablist">
                        <Link to="/Residents" class="nav-link" id="nav-residents-tab" data-bs-toggle="tab" href="#nav-residents" role="tab" aria-controls="nav-residents" aria-selected="true">Residents</Link>
                        <Link to="/Activities" class="nav-link" id="nav-activities-tab" data-bs-toggle="tab" href="#nav-activities" role="tab" aria-controls="nav-activities" tabindex="-1" aria-selected="false">Activities</Link>
                        <Link to="/Tutorials_Home" class="nav-link" id="nav-tutorials-tab" data-bs-toggle="tab" href="#nav-tutorials" role="tab" aria-controls="nav-tutorials" aria-selected="false">Tutorials</Link>
                    </nav>
                </div>
            </div>

            <Switch>
                <Route exact path="/Residents" component={ResidentHome} />
                <Route exact path='/Tutorials_Home' component={TutorialHome} />
                <Route exact path='/Activities' component={ActivityHome} />
            </Switch>
            
        </Router>

        
            
        </>
     );
}

export default NavBar;