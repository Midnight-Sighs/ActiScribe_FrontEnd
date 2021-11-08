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
            activeNotes:[],
            activeParticipation:[],
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
        },()=>{
            this.notesByResident(this.state.activeId)
            this.participationByResident(this.state.activeId)
        })
    }

    getAllActiveResidents =async()=>{
        const jwt = localStorage.getItem('token')
        try{
        let response = await axios.get('http://127.0.0.1:8000/api/actiscribe/residents/', {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            residents: response.data
        })
        }
        catch(err){
            console.log(err, "Problem getting all residents")
        }
    }

    getAllArchivedResidents =async ()=>{
        const jwt = localStorage.getItem('token')
        try{
        let response = await axios.get('http://127.0.0.1:8000/api/actiscribe/residents/archived/', {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            archivedResidents: response.data
        })
        }
        catch(err){
            console.log(err, "Problem getting all residents")
        }
    }

    newResident = async(newResident) =>{
        const jwt = localStorage.getItem('token')
        try{
        await axios.post('http://127.0.0.1:8000/api/actiscribe/residents/', newResident, {headers: {Authorization: 'Bearer '+ jwt}});  
        this.getAllActiveResidents()
        }
        catch(err){
            console.log(err, "Problem adding resident")
        }
    }

    singleResident = async(resident, resident_id)=>{
        const jwt = localStorage.getItem('token')
        try{
        await axios.patch(`http://127.0.0.1:8000/api/actiscribe/residents/${resident_id}/`, resident, {headers: {Authorization: 'Bearer '+ jwt}}); 
        }
        catch(err){
            console.log(err, "Problem changing resident status.")
        }
    }

    notesByResident = async(resident_id)=>{
        const jwt = localStorage.getItem('token')
        try{
        let response = await axios.get(`http://127.0.0.1:8000/api/actiscribe/residents/${resident_id}/notes/`, {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            activeNotes: response.data
        })
        }
        catch(err){
            console.log(err, "Problem getting resident notes")
        }
    }

    participationByResident = async(resident_id)=>{
        const jwt = localStorage.getItem('token')
        try {
        let response = await axios.get(`http://127.0.0.1:8000/api/actiscribe/residents/${resident_id}/participation/`, {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            activeParticipation: response.data
        })
        }
        catch(err){
            console.log(err, "Problem getting resident participation")
        }
    }

    render() { 
        return ( 
            <>
                <ResidentSubNav archive={this.archiveResident} edit={this.editResident} notes={this.state.activeNotes} participation={this.state.activeParticipation} activeResident={this.state.activeResident} setResident={this.setActiveResident} residents={this.state.residents} archived={this.state.archivedResidents} newResident={this.newResident}/>
            </>
        );
    }
}
 
export default ResidentHome;