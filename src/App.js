import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import '../src/Styles/App.css'
import AnonBody from './Components/Anon/AnonBody'
import Header from './Components/HeadAndFoot/Header'
import Home from './Components/Anon/Home/Home'
import NavBar from './Components/HeadAndFoot/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        user: [],
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
      });
      localStorage.setItem('token', response.data.access)
      this.decodeToken();
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
    })
  }

  getUserDetails = async()=>{
    const jwt = localStorage.getItem('token')
    let response = await axios.get('http://127.0.0.1:8000/api/auth/user/3/', {headers: {Authorization: 'Bearer '+ jwt}});
    this.setState({
      userDetails : response.data
    })
  }


  render() { 
    return ( 
        <>
        <Header login={this.userLogin} logout={this.logout} loggedIn={this.state.loggedIn} />
        {this.state.loggedIn ? <NavBar /> : null}
        <div className="app-background">
          <Router>
            <Switch>
              {this.state.loggedIn ? <Route exact path="/" component={Home} /> :
              <Route exact path="/" component={AnonBody} />}
            </Switch>
          </Router>
        </div>
        </>
     );
  }
}
 
export default App;