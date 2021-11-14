import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';

const ActivityDateFilter=(props)=> {

    const[startDate, setStartDate]=useState()
    const[endDate, setEndDate]=useState()
    const[selectedActivity, setSelectedActivity]=useState()
    const[participation, setParticipation]=useState()
    const[filteredParticipation, setFilteredParticipation]=useState()
    const[fullParticipation, setFullParticipation]=useState([])
    const[haveFullPart, setHaveFullPart]=useState(false)

    const handleActChange=(e)=>{
        e.preventDefault()
        setParticipation()
        setSelectedActivity(e.target.value)
    }

    const getParticipation=async(activityId)=>{
        const jwt = localStorage.getItem('token')
        try{
        let response = await axios.get(`http://127.0.0.1:8000/api/actiscribe/activities/${activityId}/participation/`,{headers: {Authorization: 'Bearer '+ jwt}});
        setParticipation(response.data)
        }
        catch(err){
            console.log(err, "Problem getting participation")
        }
    }

    const getFullParticipation=async(partId)=>{
        const jwt = localStorage.getItem('token')
        setFullParticipation([])
        try{
        let response = await axios.get(`http://127.0.0.1:8000/api/actiscribe/participation/${partId}/`,{headers: {Authorization: 'Bearer '+ jwt}});
        setFullParticipation(oldArray => [...oldArray, response.data])
        }
        catch(err){
            console.log(err, "Problem getting participation")
        }
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        setFullParticipation([])
        setHaveFullPart(false)
        getParticipation(selectedActivity)
    }

    const filterDates =()=>{
        let tempActivities=[];
        participation.participation.map((part)=>{
        if(part.date >= startDate && part.date <= endDate ){
            tempActivities.push(part)
        }})
        setFilteredParticipation(tempActivities)
    }

    useEffect(()=>{
        setHaveFullPart(false)
    },[])

    useEffect(()=>{
        if(participation){
            filterDates()
        }
    }, [participation])
    
    useEffect(()=>{
        if(filteredParticipation){
            getFullParticipationFilter()
        }
    }, [filteredParticipation])

    useEffect(()=>{
        if(Object.keys(fullParticipation).length>0){
           console.log(fullParticipation)
           if(Object.keys(fullParticipation).length === filteredParticipation.length){
               setHaveFullPart(true)
           }
        }
    }, [fullParticipation])


    const getFullParticipationFilter =()=>{
        if(filteredParticipation){
        for(let i =0; i< filteredParticipation.length; i++){
            getFullParticipation(filteredParticipation[i].id)
        }
        }
    }

    const resetDateFilter =()=>{
        setHaveFullPart(false)
        setSelectedActivity()
        setParticipation()
        setFilteredParticipation()
        setFullParticipation([])
    }

    return ( 
        <>
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className=" col-4 select-act">
                    <select onChange={handleActChange}>
                        <option defaultValue >Select an Activity</option>
                        {props.activitiesForFilter.map((activity)=><option key={activity.id} value={activity.id}>{activity.name}</option>)}
                    </select>
                </div>
                <div className="col-8">
                    <input className="filter-date" type="date" value={startDate} onChange={s=>setStartDate(s.currentTarget.value)}/>
                    <input className="filter-date" type="date" value={endDate} onChange={e=>setEndDate(e.currentTarget.value)} />
                    <button className="text-btn filter-btn" type="submit">Filter</button>
                    <button className="text-btn filter-btn" onClick={resetDateFilter}>Reset Search</button>
                </div>
            </div>
        </form>

            {haveFullPart ? 
            <table className="filter-res">
                <tbody>
                    <tr>
                        <th className="fil-act-col">Activity</th>
                        <th className="fil-res-col">Resident</th>
                        <th className="fil-date-col">Date</th>
                    </tr>
                   
                        {fullParticipation.map((part)=>{
                            return(
                                <>
                                <tr>
                                    <td key={part.participation.id}>{part.activity.name}</td>
                                    <td>{part.resident.r_first_name} {part.resident.r_last_name}</td>
                                    <td>{part.participation.date} </td>
                                </tr>
                                </>
                            )
                        })}
                </tbody>
            </table>
            :null}

        </>
     );
}

export default ActivityDateFilter;