import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import '../../Styles/App.css'
import AllActivities from '../Activities/AllActivities'
import ActivitiesByDow from './ActivitiesByDow';

const ResidentSubNav=(props)=>{
    return ( 
        <>
            <Router>
            <div className = "row">
                <div className="col-2 col-sm-row tutorial-nav">
                    <div class="d-flex align-items-start">
                        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <Link to="/All_Activities"  class="nav-link" id="v-pills-all-act-tab" data-bs-toggle="pill" href="#v-pills-all-act" role="tab" aria-controls="v-pills-all-act" aria-selected="true">All Activities</Link>
                            <Link to="/Dow_Activities" class="nav-link" id="v-pills-dow-act-tab" data-bs-toggle="pill" href="#v-pills-dow-act" role="tab" aria-controls="v-pills-dow-act" aria-selected="false">DOW</Link>
                            {/* <Link to="/New_Resident" class="nav-link" id="v-pills-new-res-tab" data-bs-toggle="pill" href="#v-pills-new-res" role="tab" aria-controls="v-pills-new-res" aria-selected="false">New Resident</Link> */}
                        </div>
                    </div>
                </div>
        
                <div className ="col-10">
                    <Switch>
                        <Route exact path="/All_Activities">
                            <AllActivities allActivities={props.allActivities} />
                        </Route>
                        <Route exact path="/Dow_Activities">
                            <ActivitiesByDow allActivities={props.dowActivities} filterDow={props.filterDow} />
                        </Route>
                        
 
                
                    </Switch>
                </div>
            </div>
        </Router>


        </>
     );
}

export default ResidentSubNav
