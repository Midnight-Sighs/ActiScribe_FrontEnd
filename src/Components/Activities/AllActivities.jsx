import React,{useState} from 'react';
import './Styles/Activity.css'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

function AllActivities(props){

    const[urlPath, setUrl]=useState(``)


    return ( 
        <>
        <table className='activitiy-table'>
            <tbody>
                <tr>
                    <th className="name-col">Name</th>
                    <th className="iden-col" colSpan="3">Dimension of Wellness</th>
                </tr>
            {props.activities.map((activity)=>{
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

export default AllActivities;