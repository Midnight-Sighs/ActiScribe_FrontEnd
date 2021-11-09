import React, { Component } from 'react'
import axios from 'axios';

class NewActivity extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            is_active: true,
            is_archived: false,
            dow_one: "",
            dow_two: "",
            dow_three: "",
         }
    }

    createNewActivity = async(newActivity)=>{
        const jwt = localStorage.getItem('token')
        await axios.post(`http://127.0.0.1:8000/api/actiscribe/activities/`, newActivity, {headers: {Authorization: 'Bearer '+ jwt}});
    }

    onSubmit =(event)=>{
        debugger
        event.preventDefault()
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
            <form onSubmit={this.onSubmit}> 
            <table>
                <tbody>
                    <tr>
                        <td><label className = "new-act-label">Activity Name</label></td>
                        <td><input className = "new-act-label" name="name" onChange={this.handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Dimension of Wellness</td>
                        <td>
                            <select name="dow_one" onChange={e=>this.setState({dow_one: e.currentTarget.value})}>
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
                        </td>
                    </tr>
                    <tr>
                        <td>Dimension of Wellness (optional)</td>
                        <td>
                            <select name="dow_two" onChange={e=>this.setState({dow_two: e.currentTarget.value})}>
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
                        </td>
                    </tr>
                    <tr>
                        <td>Dimension of Wellnes (optional)</td>
                        <td>
                            <select name="dow_three" onChange={e=>this.setState({dow_three: e.currentTarget.value})}>
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
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit">Save Activity</button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </form>
            </>
         );
    }
}
 
export default NewActivity;