import React from 'react';
import './Styles/HeadAndFoot.css'
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from 'react-router-dom';
import Register from '../User/Register'
import Login from '../User/Login'
import NavBar from './NavBar'
import AnonMainNav from '../Anon/AnonMainNav';
import Profile from '../User/Profile'


const Header=(props)=> {
    return ( 
        <>
            <Router>
            <div className ="title-bar">
                <div className="row">
                        
                        <div className="col-7">
                            <h1 className = "title">Actiscribe</h1>
                        </div>
                        <div className='col-1'></div>
                        <div className = "col-3 log-reg">
                            {props.loggedIn ? <Redirect to="/Residents" />: <span><Link to="/login">Login</Link></span>}
                            {props.loggedIn ? null: <span> <Link to ='/register'>Register</Link></span>}
                            {props.loggedIn?<span><Link to="/Profile" className="header-link">Profile</Link></span>:null }
                            {props.loggedIn ? <span><Link to="/" className = "header-link" onClick={props.logout}>Logout</Link></span>: null}
                        </div>
                </div>        
            </div>
            {props.loggedIn ? <NavBar /> : null }

                <Switch>
                    <Route path='/login' >
                        {props.loggedIn ? null: <Login login={props.login} />}
                    </Route>
                    <Route path='/register' >
                        {props.loggedIn ? null: <Register />}
                    </Route>
                    <Route exact path="/">
                        {props.loggedIn ? null : <AnonMainNav />}
                    </Route>
                    <Route exact path="/profile">
                        {props.loggedIn ? <Profile user={props.userDetails}/>:null}
                    </Route>
                </Switch>
            </Router>

        </>
     );
}

export default Header;