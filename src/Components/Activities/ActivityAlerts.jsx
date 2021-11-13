import React from 'react';
import './Styles/Activity.css'

const ActivityAlerts=(props)=> {


    return ( 
        <>
        <div className = "conts">
            <h1>Welcome to your activity section!</h1>
            <p>Hello!  Please keep in mind that these alerts are purely informational.  We fully recognize that your individual activity plan may differ from having a completely balanced activity plan as every population of residents and facility is different.</p>

            <h3>Your activity plan is lacking in the following Dimensions of Wellness:</h3>
            <div className="lacking-dow">
                {props.alertActivities.map((alert)=>{
                    return(
                        <p className="alert-p">{alert}</p>
                    )
                })}
            </div>
           </div>
        </>
     );
}

export default ActivityAlerts;