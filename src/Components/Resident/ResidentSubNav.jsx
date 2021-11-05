import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import AllResidents from './AllResidents';
import NewResident from './NewResident';

const ResidentSubNav=(props)=>{
    return ( 
        <>
            <Router>
            <div className = "row">
                <div className="col-2 col-sm-row tutorial-nav">
                    <div class="d-flex align-items-start">
                        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <Link to="/All_Residents"  class="nav-link" id="v-pills-all-res-tab" data-bs-toggle="pill" href="#v-pills-all-res" role="tab" aria-controls="v-pills-all-res" aria-selected="true">All Residents</Link>
                            <Link to="/Archived_Residents" class="nav-link" id="v-pills-arch-res-tab" data-bs-toggle="pill" href="#v-pills-arch-res" role="tab" aria-controls="v-pills-arch-res" aria-selected="false">Archived Residents</Link>
                            <Link to="/New_Resident" class="nav-link" id="v-pills-new-res-tab" data-bs-toggle="pill" href="#v-pills-new-res" role="tab" aria-controls="v-pills-new-res" aria-selected="false">New Resident</Link>
                        </div>
                    </div>
                </div>
        
                <div className ="col-10">
                    <Switch>
                        <Route path="/All_Residents">
                            <AllResidents residents={props.residents} />
                        </Route>
                        <Route path="/Archived_Residents">
                            <AllResidents residents={props.archived} />
                        </Route>
                        <Route path="/New_Resident">
                            <NewResident newResident={props.newResident} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>


        </>
     );
}

export default ResidentSubNav
