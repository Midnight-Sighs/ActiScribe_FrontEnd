import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const ActivitiesByDow=(props)=> {

    const[dow, setDow]=useState('')
    const[filtered, setFiltered]=useState(false)
    const[allActivities, setAllActivities]=useState(props.allActivities)

    const onSubmit=(event)=>{
        event.preventDefault()
        props.filterDow(dow)
        if(props.allActivities !== undefined || props.allActivities.length > 0){
            setFiltered(true)
            setAllActivities(props.allActivities)
        }
    }

    useEffect(()=>{
        setAllActivities(props.allActivities)
    }, [props])

    return ( 
        <>
        <div className="conts activity-by-dow">
            <form onSubmit={onSubmit}> 
                <select name="dow" onChange={e=>setDow(e.currentTarget.value)}>
                    <option value="Social">Social</option>
                    <option value="Physical">Physical</option>
                    <option value="Emotional">Emotional</option>
                    <option value="Spiritual">Spiritual</option>
                    <option value="Environmental">Environmental</option>
                    <option value="Financial">Financial</option>
                    <option value="Creative">Creative</option>
                    <option value="Intellectual">Intellectual</option>
                    <option value="Occupational">Occupational</option>
                    <option value="Sensory">Sensory</option>
                </select>
                <input type="submit" value="Submit"></input>
            </form>
            {filtered ? 
                <table className='activity-table'>
                    <tbody>
                        <tr>
                            <th className="name-col">Name</th>
                            <th className="iden-col" colSpan="3">Dimensions of Wellness</th>
                            <th></th>
                        </tr>
                    {allActivities.map((activity)=>{
                    return(

                            <tr key={activity.id}>
                                <td className="name-col">{activity.name}</td>
                                <td className='iden-col'>{activity.dow_one}</td>
                                <td className='iden-col'>{activity.dow_two}</td>
                                <td className='iden-col'>{activity.dow_three}</td>
                                <td><Link to='/Activity_Detail' onClick={()=>props.setActiveActivity(activity)}>Details</Link></td>
                            </tr>  
                    )})}
                    </tbody>
                </table> 
                : null}
        
        </div>
        </>
     );
}

export default ActivitiesByDow;