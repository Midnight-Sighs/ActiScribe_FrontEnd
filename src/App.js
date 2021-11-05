import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import '../src/Styles/App.css'
import AnonBody from './Components/Anon/AnonBody'
import Header from './Components/HeadAndFoot/Header'
import Home from './Components/Anon/Home/Home'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        user: [],
        userId: '',
        localToken: localStorage.token,
        token: [],
    }
  }

  componentDidMound(){
    const jwt = localStorage.getItem('token');
    try{
      const user = jwtDecode(jwt);
      this.setState({
        user:user
      })
    }
    catch{
      console.log("No token in local storage.  Please log in.")
    }
  }

  userLogin =async(login)=>{
    try{
      let response = axios.get('http://127.0.0.1:8000/api/auth/login/', login)
      this.setState({
        token: response.data.token,
      });
      localStorage.setItem('token', response.data.token)
    }
    catch{
      console.log("Improper Credentials")
    }
  }


  render() { 
    return ( 
        <>
        <Header />
        <div className="app-background">
          <Router>
            <Switch>
              <Route path="/Home" component={Home} />
              <Route path="/Anon" component={AnonBody} />
            </Switch>
          </Router>
        </div>
        </>
     );
  }
}
 
export default App;