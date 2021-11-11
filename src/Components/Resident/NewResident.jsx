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

    onSubmit=(event)=>{
        event.preventDefault()
        let newResident={
            "r_first_name":this.state.r_first_name,
            "r_last_name":this.state.r_last_name,
            "r_other_identifier":this.state.r_other_identifier,
            "is_active":this.state.is_active,
            "is_archived":this.state.is_archived,
            "last_assessment":this.state.last_assessment
        }
        this.props.newResident(newResident)
        console.log({newResident})
        this.clearForm()
    }

    clearForm =()=>{
        this.setState({
            r_first_name:'',
            r_last_name:'',
            r_other_identifier: '',
            is_active: true,
            is_archived: false,
            last_assessment: ''
        })
    }

    render() { 
        return ( 
            <>
            <div className="new-res-form conts">
                <h1>New Resident</h1>
                <form onSubmit={this.onSubmit} className="new-res">
                    <table>
                        <tbody>
                            <tr>
                                <td><label className="new-res-label">Resident First Name</label></td>
                                <td><input className='new-res-field' maxLength="20" name='r_first_name' onChange={this.handleChange} value={this.state.r_first_name} required /></td>
                            </tr>
                            <tr>
                                <td><label className="new-res-label">Resident Last Name</label></td>
                                <td><input className='new-res-field' maxLength="20" name='r_last_name'onChange={this.handleChange} value={this.state.r_last_name} required /></td>
                            </tr>
                            <tr>
                                <td><label className="new-res-label">Identifier (such as room number)</label></td>
                                <td><input className='new-res-field' maxLength="20" name='r_other_identifier' onChange={this.handleChange} value={this.state.r_other_identifier} required /></td>
                            </tr>
                            <tr>
                                <td><label className="new-res-label">Last Assessment Date</label></td>
                                <td><input className='new-res-field' maxLength="20" type="date" name='last_assessment'onChange={this.handleChange} value={this.state.last_assessment} required /></td>
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
            </div>
            </>
        );
    }
}

export default NewResident;