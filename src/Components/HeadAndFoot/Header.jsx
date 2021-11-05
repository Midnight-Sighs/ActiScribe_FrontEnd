import React from 'react';
import './Styles/HeadAndFoot.css'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Register from '../User/Register'
import Login from '../User/Login'

function Header() {
    return ( 
        <>
            <Router>
            <div className ="title-bar">
                <div className="row">
                        <div className = "col-1">
                            <span></span>
                        </div>
                        <div className="col-8">
                            <h1 className = "title">Actiscribe</h1>
                        </div>
                        <div className = "col-2 log-reg">
                            <span><Link to="/login">Login</Link>   <Link to ='/register'>Register</Link>  <Link to = '/Home'>Home</Link></span>
                        </div>
                </div>        
            </div>

                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                </Switch>
            </Router>

        </>
     );
}

export default Header;