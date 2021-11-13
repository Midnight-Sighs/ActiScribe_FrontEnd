import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const ArchivedActivities=(props)=> {
   
   const[allActivities, setAllActivities]=useState(props.allActivities)

   useEffect(()=>{
       setAllActivities(props.allActivities)
   }, [props])
   
    return ( 
        <>
        <div className="conts">
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
                                <td><Link to='/Activity_Detail' className="text-btn" onClick={()=>props.setActiveActivity(activity)}>Details</Link></td>
                            </tr>  
                    )})}
                    </tbody>
                </table>
        </div>
        </>
     );
}

export default ArchivedActivities;