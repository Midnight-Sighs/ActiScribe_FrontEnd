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
                <div className = 'main-body'>
                    <form onSubmit ={this.handleSubmit}>
                        <label className='form-label'>User Name</label>
                        <input className = 'form-input' name='username' onChange={this.handleChange} />
                        {this.state.errors.username ? <span className="error"> {this.state.errors.username}</span> : null}

                        <label className = 'form-label'>Password</label>
                        <input className='form-input' type='password' name='password' onChange={this.handleChange} />
                        {this.state.errors.password ? <span className = "error"> {this.state.errors.password}</span>:null}

                        <label className = 'form-label'>Re-Enter Password</label>
                        <input className = 'form-input'type='password' name='verify_password' onChange={this.handleChange} />
                        {this.state.errors.verify_password ? <span className = "error">{this.state.errors.verify_password}</span> : null}
                        
                        <label className='form-label'>E-mail</label>
                        <input className ='form-input' type='email' name='email' onChange={this.handleChange} />

                        <label className = 'first_name'>First Name</label>
                        <input className='form-input' name='first_name' onChange={this.handleChange} />

                        <label className='last_name'>Last Name</label>
                        <input className='form-input' name='last_name' onChange={this.handleChange} />

                        <label className='middle_name'>Middle Name</label>
                        <input className='form-input' name='middle_name' onChange={this.handleChange} />
                    
                        {this.state.errors.error ? <button type="submit" disabled>Register</button> : <button type="submit">Register</button>}
                    </form>

                </div>
            </>
         );
    }
}
 
export default Register;
