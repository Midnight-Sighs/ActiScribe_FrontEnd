import React,{useState, useEffect} from 'react';
import './Styles/Activity.css'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

const AllActivities=(props)=>{

    const[allActivities, setAllActivities]=useState(props.allActivities)

    useEffect(()=>{
        setAllActivities(props.allActivities)
    }, [props])

    if(props.allActivities == undefined){
        return(
            <h3>You have no activities right now!  Add one to get started!</h3>
        )
    }
    else{
        return ( 
            <>
            <table className='activitiy-table'>
                <tbody>
                    <tr>
                        <th className="name-col">Name</th>
                        <th className="iden-col" colSpan="3">Dimensions of Wellness</th>
                    </tr>
                {allActivities.map((activity)=>{
                return(

                        <tr key={activity.id}>
                            <td className="name-col">{activity.name}</td>
                            <td classname='iden-col'>{activity.dow_one}</td>
                            <td classname='iden-col'>{activity.dow_two}</td>
                            <td classname='iden-col'>{activity.dow_three}</td>
                        </tr>  
                )})}
                </tbody>
            </table>

            </>
        );
    }
}

export default AllActivities;