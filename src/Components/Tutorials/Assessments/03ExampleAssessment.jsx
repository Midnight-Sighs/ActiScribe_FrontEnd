import React from 'react';
import '../Styles/Assessments.css'
import teaAndHerbs from '../../Images/teaAndHerbs.jpg'

function ExampleAssessment() {
    return ( 
        <>
        <div className ="ex-ass"> 
        <h1>Example Assessment</h1>
        <div className = "row">
            <div className = "col-7">
                <table className = "table-top">
                    <tbody>    
                        <tr>
                            <td>Name:</td>
                            <td className="answers"> Jane</td>
                        </tr>
                        <tr>
                            <td>Nickname:</td>
                            <td className="answers">J, Jan</td>
                        </tr>
                        <tr>
                            <td className="subtitle" colspan="2">Do you like . . . if  yes, what type</td>
                        </tr>
                        <tr>
                            <td> . . . Games?</td>
                            <td className="answers">Yes, crosswords</td>
                        </tr>
                        <tr>
                            <td> . . . Books?</td>
                            <td className="answers">In youth, no time in adulthood</td>
                        </tr>
                        <tr>
                            <td> . . . Music?</td>
                            <td className="answers">Love 60s and 70s</td> 
                        </tr>
                        <tr>
                            <td> . . . Crafts?</td>
                            <td className="answers">No</td>
                        </tr>
                        <tr>
                            <td> . . . Arts?</td>
                            <td className="answers">No</td>
                        </tr>
                        <tr>
                            <td> . . . Learning?</td>
                            <td className="answers">No</td>
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
                            <td className="answers"> All the time</td>
                        </tr>
                        <tr>
                            <td> . . . Animals?</td> 
                            <td className="answers">Yes</td>
                        </tr>
                        <tr>
                            <td> . . . Socializing?</td>
                            <td className="answers">No</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className= "col-5">
                <img className="tea-herb-img" src={teaAndHerbs} alt="Relaxing Cup of Tea"></img>
            </div>
        </div>
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
        <div className = "example-explanation">
            <p>Before we get to the specifics of Jane's care plan, I want to point something out.  When Jane was asked if she likes games, she only answered with "crosswords".  However, when we ask Jane what she liked to do with other people, she answered with Pinochle.  She also mentioned badminton with that question and she didn't with sports or exercise.  Some people don't think clearly when they're put on the spot or tired or answering too many questions.  Phrasing the same thing in multiple ways can provide us a more clear and full picture because it can cause people to think of things in a different light.</p>

            <p>So a couple of things stand out to me among Jane's assessment.  First, her primary focus seemed to be the time she spent outdoors.  Jane gardened, she volunteered at a community garden, she had a wide variety of different experience in the yard.  In her introductory care plan, I would put "Invite Jane to spend time out in the courtyard/garden/patio as she spent much of her life gardening" and "offer Jane a houseplant or plant cutting to care for in her room" and then later update this to "Check if Jane needs anything for her houseplants" or "water/care for houseplants PRN" depending on her situation and abilities. </p>

            <p>Generally, when I'm making the initial care plan, I try to include a snippet of why I'm including that.  As time goes on and staff knows the resident better, I will shorten these entries into the care plan.  The assessments are always available, but having that tiny bit of information in the care plan helps care staff to know why this is included or important.  While you may have done the assessment and may have possibly already memorized all this new information, there are many other people who will be interacting with your resident who may not have the time or the access to read a full assessment.  </p>

            <p>Jane mentioned that she doesn't like socializing but she volunteered, she was a part of her church, and she played a group Pinochle game and badminton with people.  She may not consider herself social but by nature, most of us are to some degree and Jane did a number or social things in her life.  The next thing I would include in her care plan is to "invite Jane Pinochle games and other card and trivia games to assess interest."  We do not know all there is to know about Jane.  When she answered the initial question about games, she, who presumably knows herself best, left out Pinochle.  What other games does she like that she didn't tell us?  Or did she play Pinochle because her best friend always asked her to go play and she really has no interest?  </p>

            <p>This base care plan isn't going to give us all the answers but it gives us a starting point.  It may be that in a month's time, Jane may have discovered she likes UNO better than Pinochle or that playing with the people in your facility just isn't the same as her old friend group and she doesn't like it anymore.  We will adjust the care plan as we learn more about Jane and as Jane changes.  Care plans never stop adjusting because people are always changing, whether they realize it or not.  </p>

            <p>You'll first update this care plan a week after admission and then you should be updating them at least quarterly after that.  Of course, if something changes drastically, you change the care plan as it changes.</p>

            <p>Other interventions I would include in Jane's care plan, based on the assessment above, would be something like this:</p>
            <div className="sample-interventions">
            - "Invite Jane to church (bible study, what have you) as she was active in her church community"
            <br />          
            - "Invite Jane to a variety of group activities to assess interest"
            <br />
            - "Volunteer (manicurist, hairdresser, musician, whatever you have) to connect with Jane to assess interest"
            <br />
            - "Introduce Jane to peers of a similar level of functioning.  Facilitate socialization and get togethers as needed"
            <br />
            - "Offer independent activity supplies to Jane to assess interest"
            <br />
            - "Offer the newspaper (or puzzle books, or printouts) for the crossword to Jane as she's historically enjoyed them"
            <br />
            - "Jane has a smart phone that she can independently operate.  Assist PRN if directed by Jane.  Assist with any TV issues PRN"
            <br />
            - "Topics for conversation, interests, and preferences: Gardening, farming, camping trips, trivial knowledge, 60s/70s music, HGTV"
            </div>
            <br />
            <br />
            <p>From this initial assessment, we have been able to gleam a lot of information about Jane.  There are a lot of interventions, as a result, but they are all fairly quick and easy to read over and some of them are generalized.  As your CNAs/care givers get used to reading your care plans, they'll get used to seeing "invite to xxxx to assess interest" and should be in the routine of doing that from the start of admission.  Anything important, you want to pass on verbally, like at a change of shift.  It's also always good practice to announce a brief bit about new admits at the first couple meetings after move-in anyway.  In an ideal world, your CNAs are checking these new care plans as soon as they're put out, but we all know that we're human and that doesn't always end up being the case!</p>
        </div>
        </>
     );
}

export default ExampleAssessment;