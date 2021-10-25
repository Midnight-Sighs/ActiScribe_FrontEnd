import React from 'react';
import './Styles/Tutorials.css'

export const ActivityIdeas = () =>{
    return(
        <>
            <p className="bold-text">Sometimes we're just starting out or we get stuck in a rut.  The provided links are here to help prevent that rut and give you ideas for types of activities.</p>
            <div>
                <ul>
                    <li><a className="link-cats" href="https://www.notjustbingo.com/" target="_blank" rel="noopener noreferrer">Not Just Bingo</a></li>
                    <li><a href="https://www.greatseniorliving.com/articles/fun-activities-for-seniors" className="link-cats" target="_blank" rel="noopener noreferrer">Great Senior Living</a></li>
                    <li><a href="https://www.vivehealth.com/blogs/resources/activities-elderly-seniors" className="link-cats" target="_blank" rel="noopener noreferrer">110 Things for Seniors To Do</a></li>
                    <p>This link includes many things that are easier for seniors outside of a care home, but they can still give inspiration for ideas.</p>
                </ul>
            </div>
        </>
    )
}

export const Regulations = () =>{
    return(
        <>
            <p className="bold-text">Following are links where you can find rules and regulations in regards to nursing facilities.</p>
            <ul>
                <li><a href="https://www.cms.gov/" className="link-cats" target="_blank" rel="noopener noreferrer">CMS.gov</a></li>
                <li><a href="https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/Internet-Only-Manuals-IOMs-Items/CMS1201984" className="link-cats" target="_blank" rel="noopener noreferrer">State Operations Manual</a></li>
                <li><a href="https://www.cdc.gov/phlp/publications/topic/hipaa.html#:~:text=The%20Health%20Insurance%20Portability%20and,the%20patient's%20consent%20or%20knowledge." className="link-cats" target="_blank" rel="noopener noreferrer">HIPAA Laws</a></li>
            </ul>
        </>
    )
}

export const CalendarCreators = () =>{
    return(
        <>
            <p className="bold-text">This site has a calendar feature, but it isn't meant to be a pretty calendar.  There are plenty of references for creating nice calendars in addition to many ways of creating them from scratch.</p>
            <ul>
                <li><a href="https://www.activityconnection.com/account/monthly/8/2018/calendars/" className="link-cats" target="_blank" rel="noopener noreferrer">Activity Connection</a></li>
                <li><a href="https://www.goldencarers.com/free-activity-calendar-for-seniors/4857/" className="link-cats" target="_blank" rel="noopener noreferrer">Golden Carers</a></li>
                <p>This site also includes the random "holidays" such as National Coffee day and the like.  They can be deleted, but they can make for fun themes!</p>
            </ul>
        </>
    )
}

export const CraftIdeas = () =>{
    return(
        <>
            <p className="bold-text">Crafts are insanely expansive.  There are so many different routes and ways to go.  What I post are only the tip of the iceberg as far as resources go.</p>
            <ul>
                <li><a href="https://www.pinterest.com/" className="link-cats" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                <p>If you're one of the few people who doesn't know about Pinterest, you need to learn.  This is the single biggest resource for any craft or hobby.</p>
                <li><a href="https://diyjoy.com/easy-crafts-to-make-and-sell/" className="link-cats" target="_blank" rel="noopener noreferrer">Random Crafts in various degrees of simplicity</a></li>
                <li><a href="https://www.countryliving.com/diy-crafts/" className="link-cats" target="_blank" rel="noopener noreferrer">Country Living</a></li>
                <p>While Country Living crafts aren't always simple, it's a name that older generations may remember fondly as it used to be a big magazine name.</p>
            </ul>
        </>
    )
}