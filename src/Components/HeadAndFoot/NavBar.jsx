import React from 'react';
import ResidentHome from '../Resident/ResidentHome';
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
                        {/* <Link to="/Tutorials_Home" class="nav-link" id="nav-tutorials-tab" data-bs-toggle="tab" href="#nav-tutorials" role="tab" aria-controls="nav-tutorials" aria-selected="false">Tutorials</Link>
                        <Link to="/Features_Home" class="nav-link" id="nav-features-tab" data-bs-toggle="tab" href="#nav-features" role="tab" aria-controls="nav-features" tabindex="-1" aria-selected="false">Site Features</Link> */}
                    </nav>
                </div>
            </div>

            <Switch>
                <Route path="/Residents" component={ResidentHome} />
            </Switch>
            
        </Router>

        
            
        </>
     );
}

export default NavBar;