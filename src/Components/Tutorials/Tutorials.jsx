//#region Imports
import React from 'react';
import './Styles/Tutorials.css'
import DOW from './DOW'
import SOM from './SOM'
import Links from './Links'
import AssessmentExplained from './AssessmentExplained'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
//#endregion


const Tutorials = () =>{

    return(
        <>
            <div className="tutorial-container">
                <h1>Tutorials</h1>
                <p>Here you'll be able to find some helpful things I've written on the topics of  care planning, assessments, and the dimensions of wellness.  If you're a seasoned pro, these will hopefully help to provide some new insights for you.  If you're new to the industry, they will hopefully help you begin your journey as an activity professional on the right feet.</p>
            </div>
        </>
    )
}
export default Tutorials