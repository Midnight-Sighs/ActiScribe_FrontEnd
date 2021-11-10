import React from 'react';
import '../Styles/Assessments.css'

const SampleAdmissionAssessment = () => {

    return(
        <>
            <div className="sample-ass-container">
            <h1>Sample Assessment</h1>
            <p>These assessments can vary depending on your facility and the resources that you have available.  However, the more you know always helps, even if it's something that seems minor.  As people's mental state deteriorates, they may also revert to preferences of their past, so something as seemingly unimportant as "I played volleyball when I was in grade school" may one day become a connecting point for someone who hasn't played it since as their mental state deteriorates.  You just never know what may be important down the road so more is always better.</p>

            <p>These are the types of go to questions I use and I keep them open and collect additional information as the opportunity arises.  For example, if I ask someone "do you like to read? What genre?" and they answer with a passionate response, I'll spend more time delving into authors or specific books and that sort of thing.  If they answer yes in a generic sort of way, I move on.  There are hundreds, if not thousands, of follow-up questions that we can use for any given topic, but this is where I start.</p>

            <p>I don't necessarily do the questions in this order - this is just categorized to make writing it simple.  In my facility, some of these questions are actually on the social services assessment but it's information that I utilize as well when writing up my care plans.  And if the resident is overwhelmed, half this information will help you get a base care plan in place.  Remember, you're just getting to know a person and who they were may not even be who they are now.  We're trying to get some things in place as we further get to know our new resident. </p>

                <ul className="tab-in">
                    <li>Name:</li>
                    <li>Nickname:</li>
                    <li>[Do you like . . .   -if  yes, what type/genre?]</li>
                    <table>
                        <tbody>
                            <tr>
                                <td><li className="extra-tab">. . . Games?</li></td>
                                <td><li className="extra-tab">. . . Books?</li></td>
                            </tr>
                            <tr>
                                <td><li className="extra-tab">. . . Music?</li></td>
                                <td><li className="extra-tab">. . . Crafts?</li></td>
                            </tr>
                            <tr>
                                <td><li className="extra-tab">. . . Arts?</li></td>
                                <td><li className="extra-tab">. . . Learning?</li></td>
                            </tr>
                            <tr>    
                                <td><li className="extra-tab">. . . Gardening?</li></td>
                                <td><li className="extra-tab">. . . Sports?</li></td>
                            </tr>
                            <tr>    
                                <td><li className="extra-tab">. . . Exercise?</li></td>
                                <td><li className="extra-tab">. . . Spending time outside?</li></td>
                            </tr>
                            <tr>
                                <td><li className="extra-tab">. . . Animals?</li></td>
                                <td><li className="extra-tab">. . . Socializing?</li></td>
                            </tr>
                        </tbody>
                    </table>
                    <li>What did you do for work?</li>
                    <li>Did you volunteer?</li>
                    <li>What is your spiritual preference?</li>
                    <li>What did your parents do for a living?</li>
                    <li>Do you have any siblings?</li>
                    <li>Do you have any close friends/other family?</li>
                    <li>Were you married?</li>
                    <li>Do you have children?</li>
                    <li>Do you utilize technological devices?</li>
                    <li>Did you live primarily in the city or country?</li>
                    <li>Did you travel?</li>
                    <li>What do you like to do for fun by yourself?</li>
                    <li>What did you do for fun with other people?</li>
                    <li>If there was one thing you wish everyone knew about you, what would it be?</li>
                </ul>
            </div>
        </>
    )
}

export default SampleAdmissionAssessment