import React, {Component} from 'react';
import axios from 'axios';

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

    handleSubmit = ()=>{
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
        debugger
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
        await axios.put(`http://127.0.0.1:8000/api/actiscribe/residents/${resident_id}/`, resident, {headers: {Authorization: 'Bearer '+ jwt}});  
    }

    archiveResident = async(resident_id)=>{
        const jwt = localStorage.getItem('token')
        await axios.patch(`http://127.0.0.1:8000/api/actiscribe/residents/${resident_id}/`, {headers: {Authorization: 'Bearer '+ jwt}});   
    }

    render() { 
        return ( 
            <>


            <form onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label className="edit-res-label">First Name</label></td>
                            <td><input className="edit-res-field" name="r_first_name" onChange={this.handleChange} value={this.state.r_first_name} /></td>
                        </tr>
                        <tr>
                            <td><label className="edit-res-label">Last Name</label></td>
                            <td><input className="edit-res-field" name="r_last_name" onChange={this.handleChange} value={this.state.r_last_name} /></td>
                        </tr>
                        <tr>
                            <td><label className="edit-res-label">Other Identifier</label></td>
                            <td><input className="edit-res-field" name="r_other_identifier" onChange={this.handleChange} value={this.state.r_other_identifier} /></td>
                        </tr>
                        <tr>
                            <td><label className="edit-res-label">Last Assessment</label></td>
                            <td><input className="edit-res-field" name="edit-res-field" onChange={this.handleChange} value={this.state.last_assessment} /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit">Save Edits</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <p>This will change your resident to an archived status (if they're active).  This is used to remove your active resident but retain your statistics and records. If your resident is archived (extended stay somewhere else, readmission, etc), you can set their status to active again.</p>
                <button type="button" onClick={this.archiveOnClick}>Resident Status</button>
            </>
         );
    }
}
 
export default EditResident;