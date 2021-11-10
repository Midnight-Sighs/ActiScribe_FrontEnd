import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../Resident/Styles/Residents.css'


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
        debugger
        try{
            await axios.post(`http://127.0.0.1:8000/api/actiscribe/residents/${residentId}/participation/`,participation, {headers: {Authorization: 'Bearer '+ jwt}});
            console.log("Your participation has been recorded.")
        }
        catch(err){
            console.log(err, "Error creating participation")
        }
    }

    const handleResChange=(e)=>{
        e.preventDefault()
        setSelectedResident(e.target.value)
    }

    const handleActChange=(e)=>{
        e.preventDefault()
        setSelectedActivity(e.target.value)
    }

    const handleDateChange=(e)=>{
        e.preventDefault()
        setActivityDate(e.target.value)
    }

    const onSubmit=(e)=>{
        e.preventDefault()
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
        <div className="my-wrapper">
        <div className="new-part conts">
            <form onSubmit={onSubmit}>

                <select onChange={handleResChange}>
                    <option defaultValue >Select a Resident</option>
                    {allResidents.map((resident)=><option value={resident.id}>{resident.r_first_name} {resident.r_last_name}</option>)}
                </select>

                <select onChange={handleActChange}>
                    <option defaultValue >Select an Activity</option>
                    {allActivities.map((activity)=><option value={activity.name}>{activity.name}</option>)}
                </select>

                <label className="">Activity Date</label>
                <input name="date" value={activityDate} onChange={handleDateChange} type="date"></input>
                <button type="submit">Save Participation</button>
            </form>
        </div>
        </div>
        </>
     );
}

export default NewParticipation;