import React from 'react';
import '../Anon/Styles/AnonBody.css';
import Tutorials from './Tutorials'
import DOW from './DOW'
import SOM from './SOM'
import Links from './Links'
import AssessmentExplained from './AssessmentExplained'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

function AnonSubNav() {
    return ( 
        <>
        <Router>
        {
            //#region Nav-Pills
        }
        <div className = "row">
            <div className="col-1 tutorial-nav">
                <div class="d-flex align-items-start">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Link to="/Tutorials_Home"  class="nav-link" id="v-pills-tut-home-tab" data-bs-toggle="pill" href="#v-pills-tut-home" role="tab" aria-controls="v-pills-tut-home" aria-selected="true">Tutorials</Link>
                        <Link to="/Dimensions_of_Wellness" class="nav-link" id="v-pills-dow-tab" data-bs-toggle="pill" href="#v-pills-dow" role="tab" aria-controls="v-pills-dow" aria-selected="false">DOW</Link>
                        <Link to="/State_Operations_Manual" class="nav-link" id="v-pills-som-tab" data-bs-toggle="pill" href="#v-pills-som" role="tab" aria-controls="v-pills-som" aria-selected="false">SOM</Link>
                        <Link to="/Assessments_Explained" class="nav-link" id="v-pills-assessments-tab" data-bs-toggle="pill" href="#v-pills-assessments" role="tab" aria-controls="v-pills-assessments" aria-selected="false">Assessments</Link>
                        <Link to="/Helpful_Links" class="nav-link" id="v-pills-links-tab" data-bs-toggle="pill" href="#v-links-assessments" role="tab" aria-controls="v-pills-links" aria-selected="false">Links</Link>
                    </div>
                </div>
            </div>
        {
            //#endregion
        }
        {
            //#region Switch Router
        }
            <div className ="col-11">
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
            </div>
        {
            //#endregion
        }
        </div>
        </Router>
        </>
     );
}

export default AnonSubNav;