import React, { Component } from 'react'
import axios from 'axios';
import ResidentSubNav from './ResidentSubNav';
import {toast} from 'react-toastify';
import Home from '../Anon/Home/Home'

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
        },()=>{
            this.getAllArchivedResidents()
        })
        }
        catch(err){
            console.log(err, "Problem getting all active residents")
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
            console.log(err, "Problem getting all archived residents")
        }
    }

    notifyJ = () => toast('Resident Created Successfully', {containerId:'J'});

    newResident = async(newResident) =>{
        const jwt = localStorage.getItem('token')
        try{
        await axios.post('http://127.0.0.1:8000/api/actiscribe/residents/', newResident, {headers: {Authorization: 'Bearer '+ jwt}});  
        this.notifyJ()
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
            <div className="row my-wrapper">
                <div className="col-3">
                    <ResidentSubNav user={this.props.user} getNotesByRes={this.notesByResident} getParticipation={this.participationByResident} user={this.props.user} getResidents={this.getAllActiveResidents} archive={this.archiveResident} edit={this.editResident} notes={this.state.activeNotes} participation={this.state.activeParticipation} activeResident={this.state.activeResident} setResident={this.setActiveResident} residents={this.state.residents} archived={this.state.archivedResidents} newResident={this.newResident}/>
                </div>
            </div>
            </>
        );
    }
}
 
export default ResidentHome;