import React, { Component } from 'react'
import axios from "axios"
import './Styles/LogReg.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
            email: "",
            first_name:"",
            last_name: "",
            middle_name:"",
            errors: {
                username: null,
                verify_password: null,
                password: null,
                email: null,
                error: false,
            }
         }
    }

    newUser = async ()=>{
        let newUser = {
            "username" :this.state.username,
            "password" : this.state.password,
            "email" : this.state.email,
            "first_name" : this.state.first_name,
            "last_name" : this.state.last_name,
            "middle_name" : this.state.middle_name
        }
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', newUser)
        if(response === undefined){
            console.log('Error registering user.')
        }
    }

    handleSubmit = (event) =>{
        this.setState({
        [event.target.name] : event.target.value
        }, ()=>{
            this.newUser()
        });
    }

    handleChange = (event)=>{
        let errors = this.state.errors;
        if(event.target.name === 'username'){
            errors.username = event.target.value && event.target.value.length < 3 ? 'Your username should be more than 3 characters long' : null
            if(errors.username !== null){
                errors.error = true
            }
            else{
                errors.error = false
            }
        }
        if(event.target.name === 'password'){
            errors.password = event.target.value && event.target.value.length < 7 ? 'Your password must be more than 6 characters long and include a number and symbol': null
            if(errors.username !== null){
                errors.error = true
            }
            else{
                errors.error = false
            }
            this.setState({
                password:event.target.value
            })
        }
        if(event.target.name === 'verify_password'){
            errors.verify_password = event.target.value && event.target.value !== this.state.password ? 'Your passwords do not match.' : null
            if(errors.verify_password !== null){
                errors.error = true
            }
            else{
                errors.error = false
            }
        }
        this.setState({
            [event.target.name] : event.target.value, errors:errors
        })
    }

    render() { 
        return ( 
            <>
                <div>
                    <form className = 'main-reg' onSubmit ={this.handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label className='log-reg-form-label'>User Name</label></td>
                                    <td><input className = 'log-reg-form-input' name='username' onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td colspan="2">    
                                        {this.state.errors.username ? <span className="log-reg-error"> {this.state.errors.username}</span> : null}
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className = 'log-reg-form-label'>Password</label></td>
                                    <td><input className='log-reg-form-input' type='log-reg-password' name='password' onChange={this.handleChange} /></td>
                                </tr>
                                <tr>  
                                    <td colspan="2">
                                        {this.state.errors.password ? <span className = "error"> {this.state.errors.password}</span>:null}
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className = 'log-reg-form-label'>Re-Enter Password</label></td>
                                    <td><input className = 'log-reg-form-input'type='password' name='verify_password' onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td colspan="2">    
                                        {this.state.errors.verify_password ? <span className = "error">{this.state.errors.verify_password}</span> : null}
                                    </td>
                                </tr>
                                <tr>  
                                    <td><label className='log-reg-form-label'>E-mail</label></td>
                                    <td><input className ='log-reg-form-input' type='email' name='email' onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td><label className = 'log-reg-form-label'>First Name</label></td>
                                    <td><input className='log-reg-form-input' name='first_name' onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td><label className='log-reg-form-label'>Last Name</label></td>
                                    <td><input className='log-reg-form-input' name='last_name' onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td><label className='log-reg-form-label'>Middle Name</label></td>
                                    <td><input className='log-reg-form-input' name='middle_name' onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        {this.state.errors.error ? <button className="log-reg-btn" type="submit" disabled>Register</button> : <button className="log-reg-btn" type="submit">Register</button>}
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
 
export default Register;
