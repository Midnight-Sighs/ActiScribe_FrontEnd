import React from 'react';
import '../../Tutorials/Styles/Tutorials.css'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';


const SiteFeatures=()=> {
    return ( 
        <>
            <div className="body-container conts">
                <h1>Site Features</h1>
                <p>Thank you for taking the time to check out Actiscribe!  Here you can find some tidbits about why you should subscribe!  If you want to read more before making up your mind, check out the tutorial section!</p>
                <h3>Resident Tracking</h3>
                <p>You can enter your residents' names, identifiers (such as a room number), and last assessment date.  You can easily view this data for your residents on their detail page.  Here you also add notes and add/edit their admission assessment.</p>
                <h3>Activity Tracking and Filtering</h3>
                <p>You can easily see your old and new activities.  You can archive activities that are no longer used in your calendar but you still want to keep for reference.  You can add the dimensions of wellness that your activity pertains to and then easily see how your activity plan is balanced in terms of dimensions of wellness.</p>
                <h3>Participation Tracking</h3>
                <p>You can input your resident participation quickly and easily through the participation tab.  After adding their participation you will see it under the relevant activity and under relevant residents.</p>
                <h3>Note Taking</h3>
                <p>If you have some minor notes you want to keep track of, you can add them for easy viewing on your resident page.</p>
                <h3>Admission Assessments</h3>
                <p>Admission assessments are completely optional.  Some facilities have a stock assessment they want you to do and some have nothing at all.  This is simply another tool you can choose to use or not.</p>
                <h3>Tutorials</h3>
                <p>After you sign up, you'll still have access to the tutorial page so you can read up on the dimensions of wellness and careplanning tips, tricks, and basics.</p>

            </div>
        </>
     );
}

export default SiteFeatures;