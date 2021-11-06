import React, { Component } from 'react'
import axios from 'axios';
import ResidentSubNav from './ResidentSubNav';

class ResidentHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            residents: [],
            archivedResidents: [],
            activeResident: {},
            activeId:'',
         }
    }

    componentDidMount(){
        this.getAllActiveResidents()
        this.getAllArchivedResidents()
    }

    setActiveResident=(resident)=>{
        let activeResident = resident
        this.setState({
            activeResident: activeResident,
            activeId: activeResident.id
        })
    }

    getAllActiveResidents =async()=>{
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://127.0.0.1:8000/api/actiscribe/residents/', {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            residents: response.data
        })
    }

    getAllArchivedResidents =async ()=>{
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://127.0.0.1:8000/api/actiscribe/residents/archived/', {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            archivedResidents: response.data
        })
    }

    newResident = async(newResident) =>{
        const jwt = localStorage.getItem('token')
        await axios.post('http://127.0.0.1:8000/api/actiscribe/residents/', newResident, {headers: {Authorization: 'Bearer '+ jwt}});  
        debugger
        this.getAllActiveResidents()
    }

    editResident = async(resident, resident_id)=>{
        const jwt = localStorage.getItem('token')
        await axios.put(`http://127.0.0.1:8000/api/actiscribe/residents/${resident_id}/`, resident, {headers: {Authorization: 'Bearer '+ jwt}});  
        this.getAllActiveResidents()
    }

    archiveResident = async(resident, resident_id)=>{
        const jwt = localStorage.getItem('token')
        await axios.patch(`http://127.0.0.1:8000/api/actiscribe/residents/${resident_id}/`, resident, {headers: {Authorization: 'Bearer '+ jwt}});  
        this.getAllActiveResidents()
    }

    singleResident = async(resident, resident_id)=>{
        const jwt = localStorage.getItem('token')
        await axios.patch(`http://127.0.0.1:8000/api/actiscribe/residents/${resident_id}/`, resident, {headers: {Authorization: 'Bearer '+ jwt}});
        
    }

    notesByResident = async(resident_id)=>{
        const jwt = localStorage.getItem('token')
        await axios.get(`http://127.0.0.1:8000/api/actiscribe/residents/${resident_id}/notes/`, {headers: {Authorization: 'Bearer '+ jwt}});
    }

    render() { 
        return ( 
            <>
                <ResidentSubNav activeResident={this.state.activeResident} setResident={this.setActiveResident} residents={this.state.residents} archived={this.state.archivedResidents} newResident={this.newResident}/>
            </>
        );
    }
}
 
export default ResidentHome;