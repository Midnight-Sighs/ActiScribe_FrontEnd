import React from 'react';
import './Styles/Tutorials.css'
import DOW from './DOW'
import SOM from './SOM'
import Links from './Links'
import AssessmentExplained from './AssessmentExplained'
import SampleAdmissionAssessment from './Assessments/01SampleAdmissionAssessment'
import InterpretAdmissionAssessment from './Assessments/02InterpretAdmissionAssessment'
import ExampleAssessment from './Assessments/03ExampleAssessment';

const Tutorials = () =>{

    return(
        <div className="tutorial-container">
            
            <ExampleAssessment />
        </div>
    )
}
export default Tutorials