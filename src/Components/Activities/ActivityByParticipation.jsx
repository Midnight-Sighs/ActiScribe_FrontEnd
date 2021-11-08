import React, {useState, useEffect} from 'react';

const ActivityByParticipation=(props)=> {
    
    const filterByDate=(start, end, participation)=>{
        let filtered=[]
        participation.map((each)=>{
            if(each.date >= start && each.date <= end){
                filtered.push(each)
            }
        })
    }
    
    return ( 
        <>

        </>
     );
}

export default ActivityByParticipation;