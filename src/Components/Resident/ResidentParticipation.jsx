import React, {useState, useEffect} from 'react';
import './Styles/Residents.css'
import axios from 'axios';


const ResidentParticipation=(props)=>{
    
    const[partId, setPartId]=useState()

    useEffect(()=>{

    }, [props])

    useEffect(()=>{
        deleteParticipation(partId)
    },[partId])

    const deleteParticipation = async(partId)=>{
        const jwt = localStorage.getItem('token')
        try{
        await axios.delete(`http://127.0.0.1:8000/api/actiscribe/participation/${partId}/`, {headers: {Authorization: 'Bearer '+ jwt}}); 
        }
        catch(err){
            console.log(err, "Problem deleting participation.")
        }
    }

  

    
    if(props.participation.length == 0){
        return(
            <h3>There is no listed participation</h3>
        )
    }
    return ( 
        <>
        <div className="row">
            <h1></h1>
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
            <div className="col-4">
                <table>
                    <tbody>
                        <tr>
                            <th className='det-date'>Date</th>
                        </tr>
                        {props.participation.participation.map((date)=>{
                            return(
                                <tr>
                                    <td className ='det-date'>
                                        <div className="date-span">{date.date}</div>
                                    </td>
                                    <td><button className="delete-part" onClick={()=>setPartId(date.id)}>Delete</button></td>
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