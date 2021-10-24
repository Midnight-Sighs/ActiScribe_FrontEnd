//#region Imports
import React from 'react';
import './Styles/Tutorials.css'
import DOW from './DOW'
import SOM from './SOM'
import Links from './Links'
import AssessmentExplained from './AssessmentExplained'
import SampleAdmissionAssessment from './Assessments/01SampleAdmissionAssessment'
import InterpretAdmissionAssessment from './Assessments/02InterpretAdmissionAssessment'
import ExampleAssessment from './Assessments/03ExampleAssessment';
import Careplanning from './Assessments/04Careplanning';
import Interventions from './Assessments/05Interventions';
import UpdateAssessments from './Assessments/06QuarterlyYearlyAssessments';
import EndingNotes from './Assessments/07EndingNotes';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
//#endregion


const Tutorials = () =>{

    return(
        <div className="tutorial-container">
            <h1>Assessment Tutorial</h1>
            <p>This is a bit of a long-winded topic.  There are a lot of little intricacies behind creating good care plans and it all starts the minute a new resident comes into your facility.  From your admission assessment on, your care plan will continue to grow and change on a regular basis.  If you wish to learn, follow through the pages and read on!</p>


            <Router>
            <Switch>
                <Route path="/Sample_Admission_Assessment">
                    <SampleAdmissionAssessment />
                </Route>
                <Route path="/Interpret_Admission_Assessment">
                    <InterpretAdmissionAssessment />
                </Route>
                <Route path="/Example_Assessment">
                    <ExampleAssessment />
                </Route>
                <Route path="/Care_Plan_Basics">
                    <Careplanning />
                </Route>
                <Route path="/Interventions">
                    <Interventions />
                </Route>
                <Route path="/Update_Assessments">
                    <UpdateAssessments />
                </Route>
                <Route path="/Ending_Notes">
                    <EndingNotes />
                </Route>
            </Switch>

            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li class="page-item"><Link class="page-link" to ="/Sample_Admission_Assessment" >1</Link></li>
                    <li class="page-item"><Link class="page-link" to ="/Interpret_Admission_Assessment" >2</Link></li>
                    <li class="page-item"><Link class="page-link" to ="/Example_Assessment" >3</Link></li>
                    <li class="page-item"><Link class="page-link" to ="/Care_Plan_Basics" >4</Link></li>
                    <li class="page-item"><Link class="page-link" to ="/Interventions" >5</Link></li>
                    <li class="page-item"><Link class="page-link" to ="/Update_Assessments" >6</Link></li>
                    <li class="page-item"><Link class="page-link" to ="/Ending_Notes">7</Link></li>
                </ul>
            </nav>

            </Router>
            


        </div>
    )
}
export default Tutorials