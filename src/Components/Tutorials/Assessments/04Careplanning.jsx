import React from 'react';
import notebookPlantCoffee from '../../Images/notebookPlantCoffee.jpg'

function Careplanning() {
    return ( 
        <>
        <div className = "care-planning">
            <h1>How to Care Plan?</h1>
            <div className = "row top-cp">
                <div className="col-7">
                    <p>According to the Medicare website and it's regulations, care plans are required to follow "person centered care planning".  </p>

                    <p>But what does person centered care mean?</p>

                    <p>The theory was first documented in the 1960s, but it took a long time for it to become an industry standard.  It wasn't until the 2000s, more than 40 years later, that it started to become something serious in the industry.  While it's simple in theory, there is no true concrete definition to person-centered care because there are so many aspects it could be referring to.  The Health Foundation put it in terms that I really like.  Being vague enough to work for anyone but being something a framework can be built upon: </p>
                        <ol>
                            <li>  "Affording people dignity, compassion and respect.</li> 
                            <li>  Offering coordinated care, support or treatment. </li>
                            <li>  Offering personalized care, support or treatment. </li>
                            <li>  Supporting people to recognize and develop their own strengths and abilities to enable them to live an independent and fulfilling life."</li>
                        </ol>
                </div>
                <div className="col-4">
                    <img src={notebookPlantCoffee}></img>
                </div>
            </div>
                <p>It has also been more recently adopted that these imply that there is a partnership between staff and residents - you could design an arbitrary care plan and dictate their care needs and what they would benefit from, all while treating a person with dignity, but to truly adhere to person-centered care, you must do it with your resident or their representative to best provide for each person.</p>

                <p>I feel like this is something that was instinctual for me.  I wanted to get to know everyone, personally.  I'm a people pleaser and my goal, especially at work, is to make as many people as happy (or content) and fulfilled as I possibly can.  While I may be able to memorize and recite "this person likes this" and "this person did that for a living" and "this is important to them", not everyone can, nor can they be expected to!  That's where activity care plans are important!</p>

                <p>We create these care plans in order to allow other staff to know our residents' history, preferences, and desires as well as we do.  We're going to talk about how to create those care plans. </p> 

                <p>Your care plan should be a place for any staff member to see how to best try to make their resident happy or content.  It should give a snapshot of what our resident likes (or doesn't like) and how to best follow through with that.  It should also be a guideline for staff to assist in providing person-centered care because there are some ways that we know our residents better than other departments.  I've found in every facility, due to the relationship that I develop with residents, many of them come to trust me to voice their frustrations in various different aspects of their care.  This isn't just because activity staff usually end up hosting resident council in most facilities but because of the personal nature of our relationship with our residents.</p>  

                <p>There are various different format for care plans and your facility will probably want you to follow the lead of the nursing staff as they write a great many more care plans than we do.  The point of care planning is to identify a barrier, create a goal, and include solutions.  </p>

                <p>The barrier (or could be called focus, problem, or many other things) is what is preventing your resident from being fulfilled by activities.  Generally, in our case, it's something like "at risk for activity impairment due to diagnosis of depression and MS."  or "at risk for isolation due to preference of remaining alone in room".</p>

                <p>Goals are exactly like they sound - the goals for this person in this care area.  Since we use person-centered care, if they're able to, they should contribute to what they want their goals to be.  Other people may be unable to do this independently.  On nearly every care plan I include the goals "develops meaningful relationships with staff [and/or] peers", "participate in group activity [daily, every other day, weekly]." and "will utilize independent/in-room activities every day."  These are generic but they do apply in some sense to most everyone and make a good foundation for creating more personalized goals.</p>

                <p>Lastly, we should include solutions.  I've always care planned these as "interventions" but I'm sure there's quite a bit of other verbiage that could be used here.  Nevertheless, that doesn't change what this part of the care plan means.  Interventions are what you do in response to a problem, what adaptations your resident needs for success, and preferred activities.  </p>
            
                <p>Let's take a look at how we develop these care plans.</p>

        </div>
        </>
     );
}

export default Careplanning;