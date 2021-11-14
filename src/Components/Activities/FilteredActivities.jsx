import React from 'react';
import ActivityDateFilter from './ActivityDateFilter';
import ActivitiesByDow from './ActivitiesByDow'

const FilteredActvities=(props)=> {
    return ( 
        <>
        <div className="conts">
            <ActivitiesByDow allActivities={props.allActivities} setActiveActivity={props.setActiveActivity} filterDow={props.filterDow} activity={props.activeActivity}/>
            <hr />
            <ActivityDateFilter activitiesForFilter={props.activitiesForFilter} />
        </div>
        </>
     );
}

export default FilteredActvities;