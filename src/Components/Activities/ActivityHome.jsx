import axios from 'axios';
import React, { Component } from 'react'
import ActivitySubNav from './ActivitySubNav'
import ActivitiesForChart from '../Utilities/Chart/ActivitiesForChart';

class ActivityHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allActivities : [],
            archivedActivities:[],
            activitiesByDOW : [],
            partByActivity:[],
            activeActivity:{},
            activeId: '',
            alertActivities: [],
        }
    }

    componentDidMount(){
        this.getAllActivities()
        this.getAllArchivedActivities()
    }

    getAllActivities = async ()=>{
        const jwt = localStorage.getItem('token')
        try{
            let response = await axios.get("http://127.0.0.1:8000/api/actiscribe/activities/", {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            allActivities: response.data
        },()=>{
            this.getActivitiesByDOW()
        })
        }
        catch(err){
            console.log(err, "Error getting activities")
        }
    }

    getActivitiesByDOW = async (DOW)=>{
        const jwt = localStorage.getItem('token')
        try{
        let response = await axios.get(`http://127.0.0.1:8000/api/actiscribe/${DOW}/`, {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            activitiesByDOW: response.data
        })
        }
        catch(err){
            console.log(err, "Error getting activities")
        }
    }

    getAllArchivedActivities= async()=>{
        const jwt = localStorage.getItem('token')
        try{
        let response = await axios.get(`http://127.0.0.1:8000/api/actiscribe/activities/archived/`, {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            archivedActivities: response.data
        })
        }
        catch(err){
            console.log(err, "Error getting archived activities")
        }
    }

    getParticipationByActivity = async(activityId)=>{
        const jwt = localStorage.getItem('token')
        try{
        let response = await axios.get(`http://127.0.0.1:8000/api/actiscribe/activities/${activityId}/participation/`,{headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            partByActivity:response.data
        })
        }
        catch(err){
            console.log(err, "Error getting activities.")
        }
    }

    setActiveActivity =async(activity)=>{
        this.setState({
            activeActivity:activity,
            activeId:activity.id
        },()=>{
            this.getParticipationByActivity(this.state.activeId)
        })
    }

    setAlertActivities=(activities)=>{
        this.setState({
            alertActivities:activities
        })
    }


    render() { 
        return ( 
            <>
            <div className = "row">
                <div className="col-2">
                    <ActivitySubNav getArchivedActivities={this.getAllArchivedActivities} alertActivities={this.state.alertActivities} homeAlertActivities={this.setAlertActivities} archivedActivities={this.state.archivedActivities} getAllActivities={this.getAllActivities} part={this.state.partByActivity} activeActivity={this.state.activeActivity} setActiveActivity={this.setActiveActivity} participation={this.participationByActivity} allActivities={this.state.allActivities} dowActivities={this.state.activitiesByDOW} filterDow={this.getActivitiesByDOW}/>
                </div>
                <div className=" col-1 cheating">
                    <ActivitiesForChart activities={this.state.allActivities} homeAlertActivities={this.setAlertActivities}/>
                </div>
            </div>
            </>
         );
    }
}
 
export default ActivityHome;