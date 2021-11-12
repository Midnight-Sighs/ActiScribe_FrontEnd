import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import '../src/Styles/App.css'
import AnonBody from './Components/Anon/AnonBody'
import Header from './Components/HeadAndFoot/Header'
import ResidentHome from'./Components/Resident/ResidentHome'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        user: [],
        logInRedirect: false,
        logOutRedirect: false,
        loggedIn: false,
        localToken: localStorage.token,
        userDetails: [],
    }
  }

  componentDidMount(){
    this.decodeToken()
  }

  decodeToken=()=>{
    const jwt = localStorage.getItem('token');
    try{
      const user = jwtDecode(jwt);
      this.setState({
        user:user,
        loggedIn: true
      })
      this.getUserDetails();
    }
    catch{
      console.log("No token in local storage.  Please log in.")
    }
  }

  userLogin =async(login)=>{
    try{
      let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', login)
      this.setState({
        token: response.data.token,
        logInRedirect: true,
      }, ()=>{
      localStorage.setItem('token', response.data.access)
      this.decodeToken();
      });
    }
    catch{
      console.log("Improper Credentials")
    }
  }

  logout = () =>{
    localStorage.removeItem('token')
    this.setState({
      user: [],
      loggedIn: false,
      localToken: '',
      logOutRedirect: true
    })
  }

  getUserDetails = async()=>{
    const jwt = localStorage.getItem('token')
    try{
    let response = await axios.get('http://127.0.0.1:8000/api/auth/user/3/', {headers: {Authorization: 'Bearer '+ jwt}});
    this.setState({
      userDetails : response.data
    })
    }
    catch(err){
      console.log(err, "Error getting user details")
    }

  }


  render() { 
    return ( 
        <>
        <Header login={this.userLogin} userDetails={this.state.userDetails} logout={this.logout} loggedIn={this.state.loggedIn} />
        <div className="app-background">
          <Router>
            <Switch>

              {this.state.loggedIn ? <Redirect to="/Residents" render={props=> <ResidentHome {...props} user={this.state.userDetails} />} /> :
              <Redirect to="/" component={AnonBody} />}
            </Switch>
          </Router>
        </div>
        </>
     );
  }
}
 
export default App;