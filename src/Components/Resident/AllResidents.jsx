import React from 'react';
import ResidentSubNav from './ResidentSubNav';
import './Styles/Residents.css'

const AllResidents=(props)=> {
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
                    <tr>
                        <td className="name-col">{resident.r_first_name} {resident.r_last_name}</td>
                        <td classname='iden-col'>{resident.r_other_identifier}</td>
                        <td className='ass-col'>{resident.last_assessment}</td>
                        <td className='detail-btn'><button>Details</button></td>
                    </tr>
            )})}
            </tbody>
        </table>
        </>
     );
}

export default AllResidents;