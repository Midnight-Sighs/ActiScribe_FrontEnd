import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../Participation/Styles/Participation.css'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Ferns from '../Images/Ferns.jpg'

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

    const notifyH = () => toast('Participation Added Successfully', {containerId:'H'});
    const notifyI = () => toast('Adding Participation Failed', {containerId:'I'});

    const postParticipation = async (residentId, participation)=>{
        const jwt = localStorage.getItem('token')
        try{
            await axios.post(`http://127.0.0.1:8000/api/actiscribe/residents/${residentId}/participation/`,participation, {headers: {Authorization: 'Bearer '+ jwt}});
            console.log("Your participation has been recorded.")
            notifyH()
        }
        catch(err){
            console.log(err, "Error creating participation")
            notifyI()
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
        debugger
        let activityId = parseInt(selectedActivity)
        let newParticipation={
            "id":activityId,
            "date":activityDate
        }
        postParticipation(selectedResident, newParticipation)
    }

    if(allResidents === undefined || allActivities === undefined){
        return(
            <h3>No data loaded</h3>
        )
    }

    return ( 
        <>
        <div className="my-wrapper">
            <ToastContainer enableMultiContainer containerId={'H'} position={toast.POSITION.TOP_RIGHT} />
            <ToastContainer enableMultiContainer containerId={'I'} position={toast.POSITION.TOP_RIGHT} />    
            <div className="new-part conts">
                <div className="new-part-form row">
                    <div className="col-6">
                        <form onSubmit={onSubmit}>
                            <div className="part-select">
                                <select onChange={handleResChange}>
                                    <option defaultValue >Select a Resident</option>
                                    {allResidents.map((resident)=><option value={resident.id}>{resident.r_first_name} {resident.r_last_name}</option>)}
                                </select>
                                <br />
                                <select onChange={handleActChange}>
                                    <option defaultValue >Select an Activity</option>
                                    {allActivities.map((activity)=><option value={activity.id}>{activity.name}</option>)}
                                </select>
                            </div>
                            <label className="part-label">Activity Date</label>
                            <br />
                            <input className="part-date" name="date" value={activityDate} onChange={handleDateChange} type="date"></input>
                            <br />
                            <br />
                            <button className="text-btn save-part-btn" type="submit">Save Participation</button>
                        </form>
                    </div>
                    <div className=" col-6 new-part-img">
                        <img src={Ferns} />
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default NewParticipation;