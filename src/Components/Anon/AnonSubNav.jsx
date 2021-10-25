import React from 'react';
import './Styles/AnonBody.css';
import Tutorials from '../Tutorials/Tutorials'
import DOW from '../Tutorials/DOW'
import SOM from '../Tutorials/SOM'
import Links from '../Tutorials/Links'
import AssessmentExplained from '../Tutorials/AssessmentExplained'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

function AnonSubNav() {
    return ( 
        <>
            {
                //#region Switch Router
            }
            <Router>
                <Switch>
                    <Route path="/Tutorials_Home">
                        <Tutorials />
                    </Route>
                    <Route path="/Dimensions_of_Wellness">
                        <DOW />
                    </Route>
                    <Route path="/State_Operations_Manual">
                        <SOM />
                    </Route>
                    <Route path="/Assessments_Explained">
                        <AssessmentExplained />
                    </Route>
                    <Route path="/Helpful_Links">
                        <Links />
                    </Route>
                </Switch>
            {
                //$endregion
            }

            <nav class="nav nav-tabs" id="nav-tab" role="tablist">
                <Link to="/Tutorials_Home" class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Tutorials Home</Link>
                <Link to="/Dimensions_of_Wellness" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-dow" role="tab" aria-controls="nav-dow" aria-selected="false">Dimensions of Wellness</Link>
                <Link to="/State_Operations_Manual" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">State Operations Manual</Link>
                <Link to="/Assessments_Explained" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Assessments Explained</Link>
                <Link to="/Helpful_Links" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Helpful Links</Link>
            </nav>
            </Router>
        </>
     );
}

export default AnonSubNav;