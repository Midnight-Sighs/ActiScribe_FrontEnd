import React from 'react';
import './Styles/Residents.css'
import {Link} from 'react-router-dom';

const AllResidents=(props)=>{

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
                    <tr key={resident.id} className="all-res-row">
                        <td className="name-col">{resident.r_first_name} {resident.r_last_name}</td>
                        <td className='iden-col'>{resident.r_other_identifier}</td>
                        <td className='ass-col'>{resident.last_assessment}</td>
                        <td><Link to='/Resident_Detail'className="text-btn" onClick ={()=>props.setResident(resident)}>Details</Link></td>
                    </tr> 
                </>
            )})}
            </tbody>
        </table>
        </div>
        
     );
}

export default AllResidents;