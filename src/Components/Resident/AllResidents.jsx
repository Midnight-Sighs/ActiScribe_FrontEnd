import React,{useState, useEffect} from 'react';
import './Styles/Residents.css'
import ResidentDetail from './ResidentDetail'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

const AllResidents=(props)=>{

    const[activeResident, setActiveResident]=useState('')


    useEffect(()=>{
        console.log(activeResident)
    }, [activeResident])

    return ( 
    
        <div className="all-res-wrapper conts">
        <table className='res-table'>
            <tbody>
                <tr className="all-res-row">
                    <th className="name-col">Name</th>
                    <th className="iden-col">Identifier</th>
                    <th className="ass-col">Last Assessment</th>
                    <th>Details</th>
                </tr>
            {props.residents.map((resident)=>{
            return(
                <>
                    <tr className="all-res-row" key={resident.id}>
                        <td className="name-col">{resident.r_first_name} {resident.r_last_name}</td>
                        <td className='iden-col'>{resident.r_other_identifier}</td>
                        <td className='ass-col'>{resident.last_assessment}</td>
                        <td><Link to='/Resident_Detail'className="detail-link" onClick ={()=>props.setResident(resident)}>Details</Link></td>
                    </tr> 
                </>
            )})}
            </tbody>
        </table>
        </div>
        
     );
}

export default AllResidents;