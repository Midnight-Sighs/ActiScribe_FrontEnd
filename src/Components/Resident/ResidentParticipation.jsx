import React, { useEffect} from 'react';

const ResidentParticipation=(props)=>{
    
    useEffect(()=>{

    }, [props])

    
    if(props.participation.length == 0){
        return(
            <h3>There is no listed participation</h3>
        )
    }
    return ( 
        <>
        <div className="row">
            <div className="col-8">
                <table className="res-part-table">
                    <tr>
                        <th className='det-activity'>Activity Name</th>
                        <th colSpan="3" className='det-dow'>Dimensions of Wellness</th>
                    </tr>
                        {props.participation.activity.map((activity)=>{
                            return(
                            <tbody>
                                <tr>
                                    <td className="det-activity">{activity.name} </td>
                                    <td className='det-dow'>{activity.dow_one}  </td>
                                    <td className='det-dow'>{activity.dow_two} </td> 
                                    <td className='det-dow'>{activity.dow_three} </td> 
                                </tr>
                            </tbody>
                            )
                        })}
                </table>
            </div>
            <div className="col-2">
                <table>
                    <tbody>
                        <tr>
                            <th className='det-date'>Date</th>
                        </tr>
                        {props.participation.participation.map((date)=>{
                            return(
                                <tr>
                                    <td className ='det-date'>
                                        {date.date}
                                    </td>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default ResidentParticipation;