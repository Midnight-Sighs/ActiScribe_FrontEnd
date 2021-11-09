import React, {useState, useEffect} from 'react';
import axios from 'axios';


const NewParticipation=()=> {

    const[allResidents, setAllResidents]=useState()
    const[allActivities, setAllActivities]=useState()
    const[selectedResident, setSelectedResident]=useState()
    const[selectedActivity, setSelectedActivity]=useState()
    const[activityDate, setActivityDate]=useState()


    useEffect(()=>{
        getAllActiveResidents()
        getAllActivities()
    },[])

    useEffect(()=>{

    }, [allResidents])

    const getAllActiveResidents =async()=>{
        const jwt = localStorage.getItem('token')
        try{
        let response = await axios.get('http://127.0.0.1:8000/api/actiscribe/residents/', {headers: {Authorization: 'Bearer '+ jwt}});
        setAllResidents(response.data)
        }
        catch(err){
            console.log(err, "Problem getting all residents")
        }
    }

    const getAllActivities = async ()=>{
        const jwt = localStorage.getItem('token')
        try{
            let response = await axios.get("http://127.0.0.1:8000/api/actiscribe/activities/", {headers: {Authorization: 'Bearer '+ jwt}});
            setAllActivities(response.data)
        }
        catch(err){
            console.log(err, "Error getting activities")
        }
    }

    const postParticipation = async (residentId, participation)=>{
        const jwt = localStorage.getItem('token')
        try{
            await axios.post(`http://127.0.0.1:8000/api/actiscribe/residents/${residentId}/participation/`,participation, {headers: {Authorization: 'Bearer '+ jwt}});
        }
        catch(err){
            console.log(err, "Error creating participation")
        }
    }

    const handleResChange=(e)=>{
        setSelectedResident(e.target.value)
    }

    const handleActChange=(e)=>{
        setSelectedActivity(e.target.value)
    }

    const handleDateChange=(e)=>{
        setActivityDate(e.target.value)
    }

    const onSubmit=()=>{
        let newParticipation={
            "name":selectedActivity,
            "date":activityDate
        }
        postParticipation(selectedResident, newParticipation)
    }

    if(allResidents == undefined || allActivities == undefined){
        return(
            <h3>No data loaded</h3>
        )
    }

    return ( 
        <>
            <form onSubmit={onSubmit}>

                <select onChange={handleResChange}>
                    <option defaultValue disabled >Select a Resident</option>
                    {allResidents.map((resident)=><option value={resident.id}>{resident.r_first_name} {resident.r_last_name}</option>)}
                </select>

                <select onChange={handleActChange}>
                    <option defaultValue disabled >Select an Activity</option>
                    {allActivities.map((activity)=><option value={activity.name}>{activity.name}</option>)}
                </select>

                <label className="">Activity Date</label>
                <input name="date" value={activityDate} onChange={handleDateChange} type="date"></input>
                <button type="submit">Save Participation</button>
            </form>

        </>
     );
}

export default NewParticipation;