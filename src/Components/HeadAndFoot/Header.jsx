import React from 'react';
import './Styles/HeadAndFoot.css'
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from 'react-router-dom';
import Register from '../User/Register'
import Login from '../User/Login'
import NavBar from './NavBar'
import AnonMainNav from '../Anon/AnonMainNav';
import ResidentHome from '../Resident/ResidentHome'


const Header=(props)=> {
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
                            {props.loggedIn ? null: <span><Link to="/login">Login</Link></span>}  <span> <Link to ='/register'>Register</Link>  <Link to = '/'>Home</Link> </span> {props.loggedIn ? <span><Link to="/" className = "header-link" onClick={props.logout}>Logout</Link></span>: null}
                        </div>
                </div>        
            </div>
            {props.loggedIn ? <NavBar /> : null }

                <Switch>
                    <Route exact path='/login' render={() => <Login login={props.login} />} />
                    <Route exact path='/register' component={Register} />
                    {props.loggedIn ? <Route exact path='/' component={ResidentHome} /> : <Route exact path='/' component={AnonMainNav} />}
                </Switch>
            </Router>

        </>
     );
}

export default Header;