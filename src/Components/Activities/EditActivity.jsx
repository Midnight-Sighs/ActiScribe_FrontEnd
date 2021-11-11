import React, {Component} from 'react';
import axios from 'axios';

class EditActivity extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            dow_one: "",
            dow_two: "",
            dow_three: "",
         }
    }

    componentDidMount=()=>{
        this.setState({
            name: this.props.activity.name,
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
    }

    editActivity=async(activity, activityId)=>{
        const jwt = localStorage.getItem('token')
        await axios.put(`http://127.0.0.1:8000/api/actiscribe/activities/${activityId}/`, activity, {headers: {Authorization: 'Bearer '+ jwt}});  
    }

    onSubmit=()=>{
        let editActivity = {
            "name": this.state.name,
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
                <label className = "edit-act-label">Activity Name</label>
                <input className = "edit-act-label" name="name" onChange={this.handleChange} value={this.state.name}/>
                <select name="dow_one" onChange={e=>this.setState({dow_one: e.currentTarget.value})}>
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
                </select>
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
                </select>
                <select name="dow_three" onChange={e=>this.setState({dow_three: e.currentTarget.value})}>
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
                </select>
                <button type="submit">Save Activity</button>
            </form>
            <br />
            <button onClick={this.archiveOnClick}>Archive Activity</button>
            </>
         );
    }
}
 
export default EditActivity;