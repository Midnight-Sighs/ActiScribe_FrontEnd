import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
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
        loggedIn: false,
        localToken: localStorage.token,
        userDetails: [],
        hasToken: false,
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
        loggedIn:true
      }, ()=>{
        this.getUserDetails();
      })
    }
    catch(err){
      console.log(err)
    }
  }
  
  userLogin =async(login)=>{
    try{
      let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', login)
      this.setState({
        token: response.data.token,
      }, ()=>{
      localStorage.setItem('token', response.data.access)
      this.setState({
        hasToken:true
      },()=>{
        this.decodeToken();
      })
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
      userDetails: [],
    })
  }

  getUserDetails = async()=>{
    const jwt = localStorage.getItem('token')
    let userId = this.state.user.user_id
    try{
    let response = await axios.get(`http://127.0.0.1:8000/api/auth/user/${userId}/`, {headers: {Authorization: 'Bearer '+ jwt}});
    this.setState({
      userDetails : response.data,
    })
    if(this.state.userDetails){
      this.setState({
        loggedIn:true
      });
      <Redirect to="/" component={ResidentHome} />
    }}
    catch(err){
      console.log(err, "Error getting user details")
      if(this.state.hasToken === true){
        for(let i=2; i>0; i--){
          this.getUserDetails()
          i--
        }
      }
    }

  }


  render() { 
    return ( 
        <>
        <Header login={this.userLogin} userDetails={this.state.userDetails} logout={this.logout} loggedIn={this.state.loggedIn} />
        <div className="app-background">
          <Router>
            <Switch>

              {this.state.loggedIn ? <Redirect to="/" component={ResidentHome} /> :
              <Redirect to="/" component={AnonBody} />}
            </Switch>
          </Router>
        </div>
        </>
     );
  }
}
 
export default App;