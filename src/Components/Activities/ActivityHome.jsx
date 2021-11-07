import axios from 'axios';
import React, { Component } from 'react'
import ActivitySubNav from './ActivitySubNav'

class ActivityHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allActivities : [],
            activitiesByDOW : [],

        }
    }

    componentDidMount(){
        this.getAllActivities()
        this.getActivitiesByDOW()
    }

    getAllActivities = async ()=>{
        const jwt = localStorage.getItem('token')
        let response = await axios.get("http://127.0.0.1:8000/api/actiscribe/activities/", {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            allActivities: response.data
        })
    }

    getActivitiesByDOW = async (DOW)=>{
        const jwt = localStorage.getItem('token')
        let response = await axios.get(`http://127.0.0.1:8000/api/actiscribe/${DOW}/`, {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            activitiesByDOW: response.data
        })
    }

    render() { 
        return ( 
            <>
                <ActivitySubNav allActivities={this.state.allActivities} dowActivities={this.state.activitiesByDOW} filterDow={this.getActivitiesByDOW}/>
            </>
         );
    }
}
 
export default ActivityHome;