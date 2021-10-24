//#region Imports
import React from 'react';
import './Styles/Tutorials.css'
import DOW from './DOW'
import SOM from './SOM'
import Links from './Links'
import AssessmentExplained from './AssessmentExplained'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
//#endregion


const Tutorials = () =>{

    return(
        <div className="tutorial-container">
            
            {
                //#region Switch Router
            }
            <Router>
                <Switch>
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
                <a class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                <Link to="/Dimensions_of_Wellness" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Dimensions of Wellness</Link>
                <Link to="/State_Operations_Manual" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">State Operations Manual</Link>
                <Link to="/Assessments_Explained" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Assessments Explained</Link>
                <Link to="/Helpful_Links" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Helpful Links</Link>
            </nav>
            </Router>
            


        </div>
    )
}
export default Tutorials