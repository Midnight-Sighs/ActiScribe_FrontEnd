import axios from 'axios';
import React, { Component } from 'react'
import ActivitySubNav from './ActivitySubNav'

class ActivityHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allActivities : [],
            activitiesByDOW : [],
            participationByActivity:[],
            activeActivity:{},
        }
    }

    componentDidMount(){
        this.getAllActivities()
        this.getActivitiesByDOW()
    }

    getAllActivities = async ()=>{
        const jwt = localStorage.getItem('token')
        try{
            let response = await axios.get("http://127.0.0.1:8000/api/actiscribe/activities/", {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            allActivities: response.data
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

    participationByActivity = async(activityId)=>{
        const jwt = localStorage.getItem('token')
        try{
        let response = await axios.get(`http://127.0.0.1:8000/api/actiscribe/activities/${activityId}/participation/`,{headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            participationByActivity:response.data
        })
        }
        catch(err){
            console.log(err, "Error getting activities.")
        }
    }

    setActiveActivity =async(activity)=>{
        this.setState({
            activeActivity:activity
        },()=>{

        })
    }

    render() { 
        return ( 
            <>
                <ActivitySubNav activeActivity={this.state.activeActivity} setActiveActivity={this.setActiveActivity} participation={this.participationByActivity}allActivities={this.state.allActivities} dowActivities={this.state.activitiesByDOW} filterDow={this.getActivitiesByDOW}/>
            </>
         );
    }
}
 
export default ActivityHome;