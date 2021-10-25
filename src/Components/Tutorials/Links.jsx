import React from 'react';
import { ActivityIdeas, Regulations, CalendarCreators, CraftIdeas} from './LinkCategories'
import './Styles/Tutorials.css'

const Links = () => {

    return(
        <>
        <div className="tutorial-container">
            <div className="tutorial-summary">
                <h1>Helpful Links</h1>
                <p>This page is here to list links that may be helpful in your endevours, for a variety of different reasons.  There are resources to particular types of activities, resources for guidelines, and resources to making pretty calendars for printing.</p>
            </div>
            <div className="row">
                <div className="col-4 sticky-cat">
                    <h3 className="category"><a href="#ActivityIdeas">Activity Ideas</a></h3>
                    <h3 className="category"><a href="#Regulations">Regulations</a></h3>
                    <h3 className="category"><a href="#CalendarCreators">Calendar Creators</a></h3>
                    <h3 className="category"><a href="#CraftIdeas">Craft Ideas</a></h3>
                </div>
                <div className="col-1"></div>
                <div className="col-7">
                    <div id="ActivityIdeas"><ActivityIdeas /></div>
                    <div id="Regulations"><Regulations /></div>
                    <div id="CalendarCreators"><CalendarCreators /></div>
                    <div id="CraftIdeas"><CraftIdeas /></div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Links