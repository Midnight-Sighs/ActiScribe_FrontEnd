import React, { Component } from 'react'
import axios from 'axios';

class ResidentHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            residents: [],
            archivedResidents: [],

         }
    }

    componentDidMount(){
        this.getAllActiveResidents()
        this.getAllArchivedResidents()
    }

    getAllActiveResidents =async()=>{
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://127.0.0.1:8000/api/actiscribe/residents/', {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            residents: response.data
        })
    }

    getAllArchivedResidents =async ()=>{
        const jwt = localStorage.getItem('token')
        let response = await axios.get('http://127.0.0.1:8000/api/actiscribe/residents/archived/', {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            archivedResidents: response.data
        })
    }

    render() { 
        return ( 
            <>

            </>
        );
    }
}
 
export default ResidentHome;