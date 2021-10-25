import React from 'react';
import './Styles/Assessments.css'
import SampleAdmissionAssessment from './Assessments/01SampleAdmissionAssessment'
import InterpretAdmissionAssessment from './Assessments/02InterpretAdmissionAssessment'
import ExampleAssessment from './Assessments/03ExampleAssessment';
import Careplanning from './Assessments/04Careplanning';
import Interventions from './Assessments/05Interventions';
import UpdateAssessments from './Assessments/06QuarterlyYearlyAssessments';
import EndingNotes from './Assessments/07EndingNotes';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

const AssessmentExplained = () =>{

    return(
        <>
        <div className="tutorial-container">
            <div className="assessment-main">
                <h1>Care Plans and Assessments!</h1>
                    <p>This is a bit of an indepth subject, but I'll make it as brief as possible while still providing examples and references to help make things clear.</p>

                    <p>Assessments are a very important part of developing person-centered activities.  Afterall, how can you try to plan and coordinate for someone if you don't know them?  </p>

                    <p>My favorite care plans to write are admission care plans because I feel a little bit like a detective.  You get to meet someone new, get to know them (and potentially their family and friends), and you're going to learn along the way.</p>  

                    <p>There is a balance to getting to know people.  In my facility (and as a state requirement), we have to get a base care plan in place within 24 hours of admission.  At my old facility it was 1 week, but take that guideline with a grain of salt.  At another, they didn't actually have a system in place for move in assessments and I had to try to get something in place for each of my residents (who had lived there as long as years) when I started. Each state has different guidelines so be sure to check into your own.  Anyway, when you're doing a care plan within 24 hours, and all departments have this same requirement, you do not want to overwhelm the resident too much as they're also fielding tons of questions about their diet, their continence, their eyes, ears, fingers, and toes!! You get the idea.  And time in these first 24 hours is very limited. I've made getting to know you questionnaires that are 6 pages long and genuinely want to know all the answers, but generally I find that a page of well curtailed questions is enough to get you started without impeding on the time for other departments or overwhelming your new resident.  </p>

                    <p>These questionnaires and requirements may also vary from facility to facility.  Some facilities may have specific questions they want asked and these may differ if you also have a separate social services assessment.  You also have to test the waters on the fly.  Some people just want to answer yes or no questions because they're tired - they've been answering nurses' questions and signing paperwork and moving!  With other people, switch to simple open ended questions that can be satisfied with 1 word answers.  For some, the interview with us is a break and something nice, to be able to express themselves, and they want to talk to you for an hour and tell you their life story.  No matter which type your resident is, you can use any information gathered to create a successful care plan.  </p>

                    <p>There are a few instances where this is nigh impossible but in my experience, these have been rare.  In my years in this profession, I have only had one person that I've assessed who had no family (they were under guardianship) and was in such a state that she was unable to answer any questions and her guardian was state appointed and knew next to nothing about her.  Even with her, over time and paying close attention, I was able to deduce enough things that I feel like I make her life more content.  She reaches for me and tries to talk to me when I'm around her now whereas with other people, she's quiet and seems indifferent.  </p>

                    <p>When you're creating a care plan, put on your detective hat and know that when you're starting with admission assessments, you're getting a framework, not their entire life.  You're taking a snapshot and creating a starting point that you'll develop and modify over time. </p> 

                    <p>You want to touch on each of the categories of wellness in some sense.  You also want to try to capture some of who your resident was before they started aging or suffering from whatever their primary disability is.  You want to figure out what kind of modifications they may need to be successful in their activity endeavors (although a lot of this one can be done through observation and actually reading through the nursing assessments to see the physical and mental limitations that may be challenging your resident.)  Some of these things will be apparent at admission but some will not.  That's why care plans grow and change.</p>
            </div>
            {
            //#region Switch Router
            }
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
            {
            //#endregion
            }

            {
                //#region Pagination for Tutorial Page
            }
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
            {
                //#endregion
            }
        </div>

        </>
    )
}

export default AssessmentExplained