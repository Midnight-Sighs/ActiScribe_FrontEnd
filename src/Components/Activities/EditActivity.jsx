import React, {Component} from 'react';
import axios from 'axios';

class EditActivity extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            description: "",
            dow_one: "",
            dow_two: "",
            dow_three: "",
         }
    }

    componentDidMount=()=>{
        this.setState({
            name: this.props.activity.name,
            description: this.props.activity.description,
            dow_one: this.props.activity.dow_one,
            dow_two: this.props.activity.dow_two,
            dow_three: this.props.activity.dow_three,
        })
    }

    archiveOnClick=()=>{
        let activityId = this.props.activity.id
        this.archiveActivity(activityId)
    }

    archiveActivity=async(activityId)=>{
        const jwt = localStorage.getItem('token')
        await axios.patch(`http://127.0.0.1:8000/api/actiscribe/activities/${activityId}/`, {headers: {Authorization: 'Bearer '+ jwt}, });   
        console.log("Activity Updated")
        this.props.getAllActivities()
        this.props.getArchivedActivities()
        this.props.onClick()
    }

    editActivity=async(activity, activityId)=>{
        const jwt = localStorage.getItem('token')
        await axios.put(`http://127.0.0.1:8000/api/actiscribe/activities/${activityId}/`, activity, {headers: {Authorization: 'Bearer '+ jwt}});  
        console.log(activity.name + " has been updated.")
        this.props.getAllActivities()
        this.props.onClick()
    }

    onSubmit=()=>{
        let editActivity = {
            "name": this.state.name,
            "description": this.state.description,
            "dow_one": this.state.dow_one,
            "dow_two": this.state.dow_two,
            "dow_three": this.state.dow_three,
        }

        this.editActivity(editActivity, this.props.activity.id)
    }

    handleChange=(event)=>{
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() { 
        return ( 
            <>
        <form onSubmit={this.onSubmit}> 
            <table>
                <tbody>
                        <tr>
                            <td><label className = "edit-act-label">Activity Name</label></td>
                            <td><label className="edit-act-label tab-dow">DOW</label></td>
                        </tr>
                        <tr>
                            <td><input className = "edit-act-field" name="name" maxlength="50" onChange={this.handleChange} value={this.state.name} required/></td>
                            <td><div className="select-dow"><select name="dow_one" onChange={e=>this.setState({dow_one: e.currentTarget.value})}>
                                <option value="" defaultValue disabled hiddden>{this.state.dow_one}</option>
                                <option value="Social">Social</option>
                                <option value="Physical">Physical</option>
                                <option value="Emotional">Emotional</option>
                                <option value="Spiritual">Spiritual</option>
                                <option value="Environmental">Environmental</option>
                                <option value="Financial">Financial</option>
                                <option value="Creative">Creative</option>
                                <option value="Intellectual">Intellectual</option>
                                <option value="Occupational">Occupational</option>
                                <option value="Sensory">Sensory</option>
                            </select></div></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><div className="select-dow">
                                <select name="dow_two" onChange={e=>this.setState({dow_two: e.currentTarget.value})}>
                                <option value="" defaultValue disabled hiddden>{this.state.dow_two}</option>
                                <option value=""> --- </option>
                                <option value="Social">Social</option>
                                <option value="Physical">Physical</option>
                                <option value="Emotional">Emotional</option>
                                <option value="Spiritual">Spiritual</option>
                                <option value="Environmental">Environmental</option>
                                <option value="Financial">Financial</option>
                                <option value="Creative">Creative</option>
                                <option value="Intellectual">Intellectual</option>
                                <option value="Occupational">Occupational</option>
                                <option value="Sensory">Sensory</option>
                            </select></div></td>
                        </tr>
                        <tr>
                            <td><label className ="edit-act-label">Activity Description</label></td>
                            <td><div className="select-dow">
                                <select  name="dow_three" onChange={e=>this.setState({dow_three: e.currentTarget.value})}>
                                <option value="" defaultValue disabled hiddden>{this.state.dow_three}</option>
                                <option value=""> --- </option>
                                <option value="Social">Social</option>
                                <option value="Physical">Physical</option>
                                <option value="Emotional">Emotional</option>
                                <option value="Spiritual">Spiritual</option>
                                <option value="Environmental">Environmental</option>
                                <option value="Financial">Financial</option>
                                <option value="Creative">Creative</option>
                                <option value="Intellectual">Intellectual</option>
                                <option value="Occupational">Occupational</option>
                                <option value="Sensory">Sensory</option>
                            </select></div></td>
                        </tr>
                        <tr>
                            <td><textarea className="edit-act-field" maxlength="250" name="description" onChange={this.handleChange} value={this.state.description} /></td>
                        </tr>
                        <tr>
                            <td><button className="text-btn" type="submit">Save Activity</button></td>
                        </tr>
                </tbody>
            </table>
        </form>
            <br />
            <button className="text-btn" onClick={this.archiveOnClick}>Activity Status</button>
            </>
         );
    }
}
 
export default EditActivity;