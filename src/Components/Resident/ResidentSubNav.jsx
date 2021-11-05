import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import AllResidents from './AllResidents';

const ResidentSubNav=(props)=>{
    return ( 
        <>
            <Router>
            <div className = "row">
                <div className="col-1 col-sm-row tutorial-nav">
                    <div class="d-flex align-items-start">
                        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <Link to="/All_Residents"  class="nav-link" id="v-pills-all-res-tab" data-bs-toggle="pill" href="#v-pills-all-res" role="tab" aria-controls="v-pills-all-res" aria-selected="true">All Residents</Link>
                            <Link to="/Archived_Residents" class="nav-link" id="v-pills-arch-res-tab" data-bs-toggle="pill" href="#v-pills-arch-res" role="tab" aria-controls="v-pills-arch-res" aria-selected="false">Archived Residents</Link>
                            {/* <Link to="/State_Operations_Manual" class="nav-link" id="v-pills-som-tab" data-bs-toggle="pill" href="#v-pills-som" role="tab" aria-controls="v-pills-som" aria-selected="false">SOM</Link>
                            <Link to="/Assessments_Explained" class="nav-link" id="v-pills-assessments-tab" data-bs-toggle="pill" href="#v-pills-assessments" role="tab" aria-controls="v-pills-assessments" aria-selected="false">Assessments</Link>
                            <Link to="/Helpful_Links" class="nav-link" id="v-pills-links-tab" data-bs-toggle="pill" href="#v-links-assessments" role="tab" aria-controls="v-pills-links" aria-selected="false">Links</Link> */}
                        </div>
                    </div>
                </div>
        
                <div className ="col-11">
                    <Switch>
                        <Route path="/All_Residents">
                            <AllResidents residents={props.residents} />
                        </Route>
                        <Route path="/Archived_Residents">
                            <AllResidents residents={props.archived} />
                        </Route>
                        {/* <Route path="/State_Operations_Manual">
                            <SOM />
                        </Route>
                        <Route path="/Assessments_Explained">
                            <AssessmentExplained />
                        </Route>
                        <Route path="/Helpful_Links">
                            <Links />
                        </Route> */}
                    </Switch>
                </div>
            </div>
        </Router>


        </>
     );
}

export default ResidentSubNav
