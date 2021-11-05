import React from 'react';
import heartCoffee from '../../Images/heartCoffee.jpg'

function EndingNotes() {
    return ( 
        <>
        <div className = "ending-notes">
            <h1>Ending Notes</h1>
            <div className ="row">
                <div className="col-8">
                    <p>There are many more small things that go into care planning.  These tutorials will go into more depth in the future, especially in regards to MDS.  However, this guide should help you to get started and hopefully provided you with some insight that you did not previously know.  You have to remember that every resident is a unique individual and is your chance to have a new bond with someone else.  As individuals, every care plan will be unique.  That's not to say that there aren't activities or interventions that can't be repeated, but they have to fit the person you're applying them to.  You're job as an activity professional is to get to know your residents in a way unique to our profession.  I wish you well in your endeavors.</p>
                </div>
                <div className = "col-4">
                    <img src={heartCoffee} alt="Cup of coffee with a heart in it"></img>
                </div>
            </div>
        </div>
        </>
     );
}

export default EndingNotes;