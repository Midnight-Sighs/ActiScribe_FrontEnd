import React, {Component} from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

class EditResident extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            r_first_name:"",
            r_last_name:"",
            r_other_identifier: "",
            last_assessment: "",
        }
    }

    handleChange = (event)=>{
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        let edits = {
            "r_first_name": this.state.r_first_name,
            "r_last_name": this.state.r_last_name,
            "r_other_identifier": this.state.r_other_identifier,
            "last_assessment":this.state.last_assessment
        }
        this.editResident(edits, this.props.resident.id)
    }

    archiveOnClick =()=>{
        let resident_id = this.props.resident.id
        this.archiveResident(resident_id)
    }

    componentDidMount=()=>{
        this.setState({
            r_first_name: this.props.resident.r_first_name,
            r_last_name: this.props.resident.r_last_name,
            r_other_identifier: this.props.resident.r_other_identifier,
            last_assessment: this.props.resident.last_assessment
        })
    }

    editResident = async(resident, resident_id)=>{
        const jwt = localStorage.getItem('token')
        try{
            await axios.put(`http://127.0.0.1:8000/api/actiscribe/residents/${resident_id}/`, resident, {headers: {Authorization: 'Bearer '+ jwt}});
            console.log({resident} + " has been edited") 
            this.props.getResidents() 
            this.props.notifyK()
            this.props.onClick()
        }
        catch(err){
            console.log(err, "Problem editing resident.")
            this.props.notifyL()
        }
    }

    archiveResident = async(resident_id)=>{
        const jwt = localStorage.getItem('token')
        try{
            await axios.patch(`http://127.0.0.1:8000/api/actiscribe/residents/${resident_id}/archive/`, {headers: {Authorization: 'Bearer '+ jwt}});
            console.log(this.state.r_first_name + " has been edited") 
            this.props.getResidents()  
            this.props.notifyM()
        }
        catch(err){
            console.log(err, "Problem changing residen status")
            this.props.notifyN()
        }
    }

    render() { 
        return ( 
            <>

            <div className="edit-resident">
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label className="edit-res-label">First Name</label></td>
                                <td><input className="edit-res-field" maxLength="20" name="r_first_name" onChange={this.handleChange} value={this.state.r_first_name} required/></td>
                            </tr>
                            <tr>
                                <td><label className="edit-res-label">Last Name</label></td>
                                <td><input className="edit-res-field" maxLength="20" name="r_last_name" onChange={this.handleChange} value={this.state.r_last_name} required /></td>
                            </tr>
                            <tr>
                                <td><label className="edit-res-label">Other Identifier</label></td>
                                <td><input className="edit-res-field" maxLength="20" name="r_other_identifier" onChange={this.handleChange} value={this.state.r_other_identifier} required /></td>
                            </tr>
                            <tr>
                                <td><label className="edit-res-label">Last Assessment</label></td>
                                <td><input className="edit-res-field" name="edit-res-field" onChange={this.handleChange} value={this.state.last_assessment} required /></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button className="text-btn modal-btn" type="submit">Save Edits</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <p>Status will change your resident to active/archived.  This is used to remove your active resident but retain your statistics and records. Useful for residents on extended stay elsewhere or possibility of readmission later.</p>
                    <button className="text-btn modal-btn" type="button" onClick={this.archiveOnClick}>Resident Status</button>
            </div>
            </>
         );
    }
}
 
export default EditResident;