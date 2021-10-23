import React from 'react';
import '../Styles/Assessments.css'

function ExampleAssessment() {
    return ( 
        <>
        <div className ="ex-ass"> 
        <h1>Example Assessment</h1>
            <table className = "table-top">
                <tbody>    
                    <tr>
                        <td>Name:</td>
                        <td className="answers"> Jane</td>
                    </tr>
                    <tr>
                        <td>Nickname:</td>
                        <td className="answers"> J, Jan</td>
                    </tr>
                    <tr>
                        <td className="subtitle" colspan="2">Do you like . . . if  yes, what type</td>
                    </tr>
                    <tr>
                        <td> . . . Games?</td>
                        <td className="answers"> Yes, crosswords</td>
                    </tr>
                    <tr>
                        <td> . . . Books?</td>
                        <td className="answers"> In youth, no time in adulthood</td>
                    </tr>
                    <tr>
                        <td> . . . Music?</td>
                        <td className="answers"> Love 60s and 70s</td> 
                    </tr>
                    <tr>
                        <td> . . . Crafts?</td>
                        <td className="answers"> no</td>
                    </tr>
                    <tr>
                        <td> . . . Arts?</td>
                        <td className="answers"> no</td>
                    </tr>
                    <tr>
                        <td> . . . Learning?</td>
                        <td className="answers"> no</td>
                    </tr>
                    <tr>
                        <td> . . . Gardening?</td>
                        <td className="answers"> Had a flourishing garden, flowers, vegetables, fruit trees</td>
                    </tr>
                    <tr>
                        <td> . . . Sports?</td> 
                        <td className="answers">Basketball, baseball</td>
                    </tr>
                    <tr>
                        <td> . . . Exercise?</td> 
                        <td className="answers">Not other than yardwork</td>
                    </tr>
                    <tr>
                        <td> . . . Spending time outside?</td>
                        <td> All the time</td>
                    </tr>
                    <tr>
                        <td> . . . Animals?</td> 
                        <td className="answers">yes</td>
                    </tr>
                    <tr>
                        <td> . . . Socializing?</td>
                        <td className="answers"> no</td>
                    </tr>
                </tbody>
            </table>
            <table className = "table-bottom">
                <tbody>
                    <tr>
                        <td>• What did you do for work?</td>
                        <td className="answers"> Administrative Assistant</td>
                    </tr>
                    <tr>
                        <td>• Did you volunteer?</td> 
                        <td className="answers">Community Garden, church</td>
                    </tr>
                    <tr>
                        <td>• What is your spiritual preference?</td> 
                        <td className="answers">Christian</td>
                    </tr>
                    <tr>
                        <td>• What did your parents do for a living?</td> 
                        <td className="answers">Dad was a farmer, mom was a homemaker</td>
                    </tr>
                    <tr>
                        <td>• Do you have any siblings?</td> 
                        <td className="answers">Only child</td>
                    </tr>
                    <tr>
                        <td>• Do you have any close friends/other family?</td> 
                        <td className="answers">Many friends from church and gardening groups</td></tr>
                    <tr>
                        <td>• Were you married?</td>
                        <td className="answers"> Widowed</td>
                    </tr>
                    <tr>
                        <td>• Do you have children?</td>
                        <td className="answers"> Two, live across the country</td>
                    </tr>
                    <tr>
                        <td>• Do you utilize technological devices?</td> 
                        <td className="answers">Have a smart phone, know the basics</td>
                    </tr>
                    <tr> 
                        <td>• Did you live in the city or country?</td>
                        <td className="answers">Country for childhood, suburban life for most of adulthood</td>
                    </tr>
                    <tr>
                        <td>• Did you travel?</td>
                        <td className="answers"> Camping, day trips</td>
                    </tr>
                    <tr>
                        <td>• What do you like to do for fun by yourself?</td>
                        <td className="answers"> Garden, watch HGTV, crossword puzzles</td>
                    </tr>
                    <tr>
                        <td>• What did you do for fun with other people?</td> 
                        <td className="answers">Badminton and Pinochle</td>
                    </tr>
                    <tr> 
                        <td>• What is one thing you wish everyone knew about you?</td> <td className="answers">"That my garden was my pride and joy"</td>
                    </tr>
                </tbody>
            </table>    
        </div>
        </>
     );
}

export default ExampleAssessment;