import React from 'react';

const ResidentParticipation=(props)=>{
    return ( 
        <>
        <table>
            <tbody>
                <tr>
                    <th>Activity Name</th>
                    <th colSpan="3">Dimensions of Wellness</th>
                    <th>Date</th>
                </tr>
                    <tr>
                    {props.participation.activity.map((activity)=>{
                        return(
                            <>
                            <td>{activity.name} </td>
                            <td>{activity.dow_one}  </td>
                            <td>{activity.dow_two} </td> 
                            <td>{activity.dow_three} </td> 
                            </>
                        )
                    })}
                    {props.participation.participation.map((date)=>{
                        return(
        
                            <td>
                                {date.date}
                            </td>
                        )

                    })}
                    </tr>
            </tbody>
        </table>
        </>
     );
}

export default ResidentParticipation;