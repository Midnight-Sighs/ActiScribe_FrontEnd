import React from 'react';
import '../../Tutorials/Styles/Tutorials.css'
import WhyDOW from './WhyDOW'
import ScreenShots from './ScreenShots'
import WhyTrack from './WhyTrack'
import Features from './Features'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

function AnonSubNav() {
    return ( 
        <>
        <Router>
        <div className = "row my-wrapper">
            <div className="col-2 col-sm-row tutorial-nav">
                <div class="d-flex align-items-start">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Link to="/Features_Home"  class="nav-link" id="v-pills-feat-home-tab" data-bs-toggle="pill" href="#v-pills-feat-home-tab" role="tab" aria-controls="v-pills-feat-home" aria-selected="true">Features</Link>
                        <Link to="/Why_DOW"  class="nav-link" id="v-pills-feat-dow-tab" data-bs-toggle="pill" href="#v-pills-feat-dow-tab" role="tab" aria-controls="v-pills-feat-dow" aria-selected="false">Why DOW?</Link>
                        <Link to="/Why_Track" class="nav-link" id="v-pills-feat-track-tab" data-bs-toggle="pill" href="#v-pills-feat-track-tab" role="tab" aria-controls="v-pills-feat-track" aria-selected="false">Why Track?</Link>
                        <Link to="/ScreenShots" class="nav-link" id="v-pills-feat-screens-tab" data-bs-toggle="pill" href="#v-pills-feat-screens-tab" role="tab" aria-controls="v-pills-feat-screens" aria-selected="false">Screenshots</Link>
                    </div>
                </div>
            </div>

            <div className ="col-10">
                <Switch>
                    <Route path="/Features_Home">
                        <Features />
                    </Route>
                    <Route path="/Why_DOW">
                        <WhyDOW />
                    </Route>
                    <Route path="/Why_Track">
                        <WhyTrack />
                    </Route>
                    <Route path="/ScreenShots">
                        <ScreenShots />
                    </Route>
                </Switch>
            </div>
        </div>
        </Router>
        </>
     );
}

export default AnonSubNav;