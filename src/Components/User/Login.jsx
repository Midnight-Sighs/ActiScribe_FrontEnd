import React, { Component } from 'react'
import './Styles/LogReg.css'
import {Redirect} from 'react-router-dom'
import InkAndQuill from '../Images/inkAndQuill.jpg'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
         }
    }

    componentDidUpdate=()=>{
        this.checkTokenStatus()
    }

    checkTokenStatus=()=>{
        const jwt = localStorage.getItem('token')
        if(jwt){
            <Redirect to="/" />
        }
    }

    handleChange = (event)=>{
        event.preventDefault()
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit =(event)=>{
        event.preventDefault()
        let login = {
            "username": this.state.username,
            "password": this.state.password 
        }
        this.props.login(login);
        this.checkTokenStatus();
    }

    render() { 
        return ( 
            <>
            
            <div className="log-reg-cont">
                <div className="row">
                    <div className="col-5 log-img">
                        <img src={InkAndQuill} />
                    </div>
                    <div className="col-7">
                        <form onSubmit={this.handleSubmit}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label className='log-reg-form-label'>User Name</label></td>
                                        <td><input className = 'log-reg-form-input' name='username' onChange={this.handleChange} required /></td>
                                    </tr>
                                    <tr>
                                        <td><label className='log-reg-form-label'>Password</label></td>
                                        <td><input className = 'log-reg-form-input' name='password' type='password' onChange={this.handleChange} required /></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <button type="submit">Login</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
            </>
         );
    }
}
 
export default Login;