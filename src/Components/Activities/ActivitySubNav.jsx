import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import '../../Styles/App.css'
import AllActivities from '../Activities/AllActivities'
import ActivitiesByDow from './ActivitiesByDow';
import NewActivity from './NewActivity';
import ActivityDetail from './ActivityDetails'

const ActivitySubNav=(props)=>{

    const[participation, setParticipation]=useState(props.part)

    useEffect(()=>{
        setParticipation(props.part)
    }, [props])

    return ( 
        <>
            <Router>
            <div className = "row my-wrapper">
                <div className="col-2 col-sm-row tutorial-nav">
                    <div class="d-flex align-items-start">
                        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <Link to="/All_Activities"  class="nav-link" id="v-pills-all-act-tab" data-bs-toggle="pill" href="#v-pills-all-act" role="tab" aria-controls="v-pills-all-act" aria-selected="true">All Activities</Link>
                            <Link to="/Dow_Activities" class="nav-link" id="v-pills-dow-act-tab" data-bs-toggle="pill" href="#v-pills-dow-act" role="tab" aria-controls="v-pills-dow-act" aria-selected="false">DOW</Link>
                            <Link to="/New_Activity" class="nav-link" id="v-pills-new-act-tab" data-bs-toggle="pill" href="#v-pills-new-act" role="tab" aria-controls="v-pills-new-act" aria-selected="false">New Activity</Link>
                        </div>
                    </div>
                </div>
        
                <div className ="col-10">
                    <Switch>
                        <Route exact path="/Activities" />
                        <Route exact path="/All_Activities">
                            <AllActivities setActiveActivity={props.setActiveActivity} allActivities={props.allActivities} participation={props.part} />
                        </Route>
                        <Route exact path="/Dow_Activities">
                            <ActivitiesByDow allActivities={props.dowActivities} setActiveActivity={props.setActiveActivity} filterDow={props.filterDow} activity={props.activeActivity} />
                        </Route>
                        <Route exact path='/New_Activity'>
                            <NewActivity getAllActivities={props.getAllActivities}/>
                        </Route>
                        <Route exact path='/Activity_Detail'>
                            <ActivityDetail participation={participation} activity={props.activeActivity}/>
                        </Route>                
                    </Switch>
                </div>
            </div>
        </Router>


        </>
     );
}

export default ActivitySubNav
