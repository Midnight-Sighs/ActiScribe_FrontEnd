import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userId:"",
            username: "",
            email: "",
            first_name:"",
            last_name:"",
            middle_name:"",
            redirect: false,
         }
    }

    componentDidMount(){
        this.setState({
            userId:this.props.user.id,
            username: this.props.user.username,
            email: this.props.user.email,
            first_name:this.props.user.first_name,
            last_name:this.props.user.last_name,
            middle_name:this.props.user.middle_name
        })
    }

    handleChange =(e)=>{
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        let userId = this.state.userId
        let editUser = {
            "username" :this.state.username,
            "email" : this.state.email,
            "first_name" : this.state.first_name,
            "last_name" : this.state.last_name,
            "middle_name" : this.state.middle_name
        }
        this.editUser(editUser, userId)
    }

    editUser = async (editUser, userId)=>{
        const jwt = localStorage.getItem('token')
        try{
            let response = await axios.put(`http://127.0.0.1:8000/api/auth/user/${userId}/`, editUser, {headers: {Authorization: 'Bearer '+ jwt}})
        console.log(response.data, "Edit successful")
            this.setState({
                redirect:true
            })
        }
        catch(err){
            console.log(err, "Problem editing user.")
        }
    }
    

    render() { 
        return ( 
            <>
            {this.state.redirect ?<Redirect to="/Residents" /> : null}
                <div className="edit-profile conts">
                    <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label className="pro-edit-label">User Name</label> </td>
                                <td><input className="pro-edit-field" name='username' value={this.state.username} onChange={this.handleChange} required/></td>
                            </tr>
                            <tr>
                                <td><label className="pro-edit-label">Email</label> </td>
                                <td><input className="pro-edit-field" type="email" name='email' value={this.state.email} onChange={this.handleChange} required/></td>
                            </tr>
                            <tr>
                                <td><label className="pro-edit-label">First Name</label> </td>
                                <td><input className="pro-edit-field" name='first_name' value={this.state.first_name}onChange={this.handleChange} required/></td>
                            </tr>
                            <tr>
                                <td><label className="pro-edit-label">Last Name</label> </td>
                                <td><input className="pro-edit-field" name='last_name' value={this.state.last_name} onChange={this.handleChange} required/></td>
                            </tr>
                            <tr>
                                <td><label className="pro-edit-label">Middle Name</label> </td>
                                <td><input className="pro-edit-field" name='middle_name' value={this.state.middle_name} onChange={this.handleChange} required/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button type="submit">Save Changes</button></td>
                            </tr>
                        </tbody>
                    </table>
                    </form>
                </div>
            </>
         );
    }
}
 
export default Profile;