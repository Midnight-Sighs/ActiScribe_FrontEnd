import React,{useState, useEffect} from 'react';
import './Styles/Activity.css'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import ActivitiesForChart from '../Utilities/Chart/ActivitiesForChart';

const AllActivities=(props)=>{

    const[allActivities, setAllActivities]=useState(props.allActivities)

    useEffect(()=>{
        setAllActivities(props.allActivities)
    }, [props])

    if(props.allActivities === undefined){
        return(
            <h3>You have no activities right now!  Add one to get started!</h3>
        )
    }
    else{
        return ( 
            <>
            <div className="conts">
            <ActivitiesForChart activities={props.allActivities} />
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
                </div>
            </>
        );
    }
}

export default AllActivities;