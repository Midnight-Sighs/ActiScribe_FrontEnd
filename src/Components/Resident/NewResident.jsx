import React, {Component} from 'react';
import './Styles/Residents.css'

class NewResident extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            r_first_name:'',
            r_last_name:'',
            r_other_identifier: '',
            is_active: true,
            is_archived: false,
            last_assessment: ''
         }
    }

    handleChange=(event)=>{
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleCheck=()=>{
        let bool_one = !this.state.is_active
        let bool_two = !this.state.is_archived
        this.setState({
            is_active: bool_one,
            is_archived: bool_two
        })
    }

    onSubmit=()=>{
        let newResident={
            "r_first_name":this.state.r_first_name,
            "r_last_name":this.state.r_last_name,
            "r_other_identifier":this.state.r_other_identifier,
            "is_active":this.state.is_active,
            "is_archived":this.state.is_archived,
            "last_assessment":this.state.last_assessment
        }
        debugger
        this.props.newResident(newResident)
    }

    render() { 
        return ( 
            <>
                <form onSubmit={this.onSubmit} className="new-res">
                    <table>
                        <tbody>
                            <tr>
                                <td><label className="new-res-label">Resident First Name</label></td>
                                <td><input className='new-res-field' name='r_first_name' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className="new-res-label">Resident Last Name</label></td>
                                <td><input className='new-res-field' name='r_last_name'onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className="new-res-label">Identifier (such as room number)</label></td>
                                <td><input className='new-res-field' name='r_other_identifier' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className="new-res-label">Last Assessment Date</label></td>
                                <td><input className='new-res-field' type="date" name='last_assessment'onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <input type="checkbox" id="active-status" name="is_active" onChange={this.handleCheck} value="is_active" />
                                        <label for="active-status">Archive Resident?</label>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <button type="submit">Create New Resident</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </>
        );
    }
}

export default NewResident;