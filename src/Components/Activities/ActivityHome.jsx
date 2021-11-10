import axios from 'axios';
import React, { Component } from 'react'
import ActivitySubNav from './ActivitySubNav'

class ActivityHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allActivities : [],
            activitiesByDOW : [],
            partByActivity:[],
            activeActivity:{},
            activeId: '',
        }
    }

    componentDidMount(){
        this.getAllActivities()
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

    render() { 
        return ( 
            <>
            <div className = "row">
                <div className="col-3">
                    <ActivitySubNav getAllActivities={this.getAllActivities} part={this.state.partByActivity} activeActivity={this.state.activeActivity} setActiveActivity={this.setActiveActivity} participation={this.participationByActivity} allActivities={this.state.allActivities} dowActivities={this.state.activitiesByDOW} filterDow={this.getActivitiesByDOW}/>
                </div>
            </div>
            </>
         );
    }
}
 
export default ActivityHome;