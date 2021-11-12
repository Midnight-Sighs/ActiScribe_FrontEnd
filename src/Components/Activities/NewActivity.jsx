import React, { Component } from 'react'
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


class NewActivity extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            description: "",
            is_active: true,
            is_archived: false,
            dow_one: "",
            dow_two: "",
            dow_three: "",
         }
    }

    createNewActivity = async(newActivity)=>{
        const jwt = localStorage.getItem('token')
        try{
        await axios.post(`http://127.0.0.1:8000/api/actiscribe/activities/`, newActivity, {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            name: "",
            description:"",
            is_active: true,
            is_archived: false,
            dow_one: "",
            dow_two: "",
            dow_three: "",
            },()=>{
                this.props.getAllActivities()
                this.notify()
            })
        }
        catch(err){
            console.log(err, "Problem creating activity.")
        }
    }

    notify =()=> toast("New activity made successfully");

    onSubmit =(event)=>{
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
        let newActivity = {
            "name": this.state.name,
            "is_active": true,
            "is_archived": false,
            "dow_one": this.state.dow_one,
            "dow_two": this.state.dow_two,
            "dow_three": this.state.dow_three
        }
        this.createNewActivity(newActivity)
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
            <div className="conts new-act-form">
            <ToastContainer />
                <form onSubmit={this.onSubmit}> 
                <table>
                    <tbody>
                        <tr>
                            <td><label className = "edit-act-label">Activity Name</label></td>
                            <td><input className = "edit-act-field" maxLength="50" name="name" value={this.state.name} onChange={this.handleChange} required /></td>
                        </tr>
                        <tr>
                            <td><label className="edit-act-label">Activity Description</label></td>
                            <td><textarea maxLength="250" className="edit-act-field" name="description" value={this.state.description} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td className="edit-act-label">Dimension of Wellness</td>
                            <td>
                                <div className="select-dow">
                                    <select name="dow_one" value={this.state.dow_one} onChange={e=>this.setState({dow_one: e.currentTarget.value})}>
                                        <option value="">Select One</option>
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
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="edit-act-label">Dimension of Wellness (optional)</td>
                            <td>
                                <div className="select-dow">
                                    <select name="dow_two" value={this.state.dow_two} onChange={e=>this.setState({dow_two: e.currentTarget.value})}>
                                        <option value= ""> --- </option>
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
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="edit-act-label">Dimension of Wellnes (optional)</td>
                            <td>
                                <div className="select-dow">
                                    <select name="dow_three" value={this.state.dow_three} onChange={e=>this.setState({dow_three: e.currentTarget.value})}>
                                        <option value= ""> --- </option>
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
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className="text-btn add-act-btn" type="submit">Save Activity</button>
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
 
export default NewActivity;