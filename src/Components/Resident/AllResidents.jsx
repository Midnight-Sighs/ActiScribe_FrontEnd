import React,{useState, useEffect} from 'react';
import './Styles/Residents.css'
import ResidentDetail from './ResidentDetail'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

const AllResidents=(props)=>{

    const[urlPath, setUrl]=useState(``)
    const[activeResident, setActiveResident]=useState('')


    function onClick (){

    }

    useEffect(()=>{
        console.log(activeResident)
    }, [activeResident])

    return ( 
        <>
        <table className='res-table'>
            <tbody>
                <tr>
                    <th className="name-col">Name</th>
                    <th className="iden-col">Identifier</th>
                    <th className="ass-col">Last Assessment</th>
                    <th className="detail-btn">Details</th>
                </tr>
            {props.residents.map((resident)=>{
            return(

                    <tr key={resident.id}>
                        <td className="name-col">{resident.r_first_name} {resident.r_last_name}</td>
                        <td classname='iden-col'>{resident.r_other_identifier}</td>
                        <td className='ass-col'>{resident.last_assessment}</td>
                        <td><Link to='/Resident_Detail' onClick ={()=>props.setResident(resident)}>Details</Link></td>
                    </tr>  
            )})}
            </tbody>
        </table>

    
        </>
     );
}

export default AllResidents;