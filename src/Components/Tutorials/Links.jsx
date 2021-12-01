import React from 'react';
import { ActivityIdeas, Regulations, CalendarCreators, CraftIdeas} from './LinkCategories'
import './Styles/Tutorials.css'

const Links = () => {

    return(
        <>
        <div className="tutorial-container conts">
            <div className="link-summary">
                <h1>Helpful Links</h1>
                <p>This page is here to list links that may be helpful in your endevours, for a variety of different reasons.  There are resources to particular types of activities, resources for guidelines, and resources to making pretty calendars for printing.</p>
            </div>
            <hr />
            <div className="row">
                <div className="col-3 sticky-cat">
                    <h3 className="category">Activity Ideas</h3>
                </div>
                <div className="col-7 link-descripts">
                    <ActivityIdeas />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-3 sticky-cat">
                    <h3 className="category">Regulations</h3>
                </div>
                <div className="col-7 link-descripts">
                    <Regulations />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-3 sticky-cat">
                    <h3 className="category">CalendarCreators</h3>
                </div>
                <div className="col-7 link-descripts">
                    <CalendarCreators />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-3 sticky-cat">
                    <h3 className="category">CraftIdeas</h3>
                </div>
                <div className="col-7 link-descripts">
                    <CraftIdeas />
                </div>
            </div>
        </div>
        </>
    )
}

export default Links