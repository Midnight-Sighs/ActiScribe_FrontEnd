import React, { Component } from 'react'
import './Styles/LogReg.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
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
    }

    render() { 
        return ( 
            <>
            
            <div className="log-reg-cont">
                <div className="row">
                    <div className="col-5 log-img">
                    </div>
                    <div className="col-7">
                        <form onSubmit={this.handleSubmit}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label className='log-reg-form-label'>User Name</label></td>
                                        <td><input className = 'log-reg-form-input' name='username' onChange={this.handleChange} /></td>
                                    </tr>
                                    <tr>
                                        <td><label className='log-reg-form-label'>Password</label></td>
                                        <td><input className = 'log-reg-form-input' name='password' type='password' onChange={this.handleChange} /></td>
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