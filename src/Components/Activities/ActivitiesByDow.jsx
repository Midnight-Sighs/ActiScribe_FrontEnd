import React, {useState, useEffect} from 'react';
import AllActivities from './AllActivities';

const ActivitiesByDow=(props)=> {

    const[dow, setDow]=useState('')
    const[filtered, setFiltered]=useState(false)
    const[allActivities, setAllActivities]=useState(props.allActivities)

    const onSubmit=(event)=>{
        event.preventDefault()
        props.filterDow(dow)
        if(props.allActivities !== undefined || props.allActivities.length > 0){
            setFiltered(true)
            setAllActivities(props.allActivities)
        }
    }

    useEffect(()=>{
        setAllActivities(props.allActivities)
    }, [props])

    return ( 
        <>
        <form onSubmit={onSubmit}> 
            <select name="dow" onChange={e=>setDow(e.currentTarget.value)}>
                <option value="Social">Social</option>
                <option value="Physical">Physical</option>
                <option value="Emotional">Emotional</option>
                <option value="Spiritual">Spiritual</option>
                <option value="Environmental">Environmental</option>
                <option value="Financial">Financial</option>
                <option value="Creative">Creative</option>
                <option value="Intellectual">Intellectual</option>
                <option value="Occupational">Occupational</option>
                <option value="Sensory">Sensory</option>
            </select>
            <input type="submit" value="Submit"></input>
        </form>
        {filtered ? <AllActivities allActivities={allActivities} setActiveActivity={props.setActiveActivity} activity={props.activeActivity}/>: null}
        </>
     );
}

export default ActivitiesByDow;