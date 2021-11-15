import React, {useState, useEffect} from 'react';
import './Styles/HeadAndFoot.css'
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from 'react-router-dom';
import Register from '../User/Register'
import Login from '../User/Login'
import NavBar from './NavBar'
import AnonMainNav from '../Anon/AnonMainNav';
import Profile from '../User/Profile'
import Modal from '../Utilities/Modal'
import ResidentHome from '../Resident/ResidentHome'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Header=(props)=> {

    const[profileHS, setProfileHS]=useState(false)

    const notifyS = () => toast("Successfully Edited Profile", {containerId:'S'})
    const notifyT = () => toast("Failed to Edit Profile", {containerId:'T'})

    const onClick = ()=>{
        setProfileHS(!profileHS)
    }

    useEffect(()=>{

    },[props])

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
                        {props.loggedIn ? null: <span><Link className = "header-link" to="/login">Login</Link></span>}
                        {props.loggedIn ? null: <span> <Link to ='/register' className = "header-link">Register</Link></span>}
                        {props.loggedIn?<span><button onClick={onClick} className="header-button">Profile</button></span>:null }
                        {props.loggedIn ? <span><Link to="/" className = "header-link" onClick={props.logout}>Logout</Link></span>: <Link to="/" className = "header-link" >Home</Link>}
                    </div>
                </div>        
            </div>

            {props.loggedIn ? <NavBar /> : null }
                <Switch>
                    <Route path='/login' >
                        {props.loggedIn ? null: <Login loggedIn={props.loggedIn} login={props.login} />}
                    </Route>
                    <Route path='/register' >
                        {props.loggedIn ? null: <Register />}
                    </Route>
                    <Route exact path="/">
                        {props.loggedIn ? <Redirect to="/" component={ResidentHome}/> : <AnonMainNav />}
                    </Route>
                </Switch>
            </Router>
            <Modal onClick={onClick} hideShow={profileHS}>
                <Profile notifyS={notifyS} notifyT={notifyT} onClick={onClick} user={props.userDetails}/>
            </Modal>
            <ToastContainer enableMultiContainer containerId={'S'} position={toast.POSITION.TOP_RIGHT} />
            <ToastContainer enableMultiContainer containerId={'T'} position={toast.POSITION.TOP_RIGHT} />
        </>
     );
}

export default Header;