import React from 'react';
import Login from './Login'
import Register from './Register'
import Header from '../HeadAndFoot/Header'

function LogRegPage() {
    return ( 
        <>
            <div className='col-1' />
            <div className = 'col-10'>
                <Header />
                <Register />
            </div>
            <div className='col-1'/>
        </>
    );
}

export default LogRegPage;