import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ViewAssessment=(props)=> {

    const[assessment, setAssessment]=useState([])
    const[residentId, setResidentId]=useState(props.resident)

    useEffect(()=>{
        setResidentId(props.residentId)
        getAssessmentByResident(residentId)
        setAssessment(props.assessment)
    }, [props])

    useEffect(()=>{
        setResidentId(props.residentId)
        getAssessmentByResident(residentId)
        setAssessment(props.assessment)
    }, [])


    const getAssessmentByResident =async (residentId)=>{
        const jwt = localStorage.getItem('token')
        try{
        let response = await axios.get(`http://127.0.0.1:8000/api/actiscribe/residents/${residentId}/assessment/`, {headers: {Authorization: 'Bearer '+ jwt}});
        setAssessment(response.data)
        }
        catch(err){
            console.log(err, "Problem getting assessment or assessment does not exist")
        }
    }


    if(assessment == undefined){
        return(
            <p>Currently no assessment for this resident</p>
        )
    }

    return ( 
        <>
            <p className="ass-line">Nickname</p>
            <p className="ass-value">{assessment.nickname }</p>
            <p className="ass-line">Games</p>
            <p className="ass-value">{assessment.games_yn }</p>
            <p className="ass-line">Books</p>
            <p className="ass-value">{assessment.books_yn}</p>
            <p className="ass-line">Music</p>
            <p className="ass-value">{assessment.music_yn}</p>
            <p className="ass-line">Crafts</p>
            <p className="ass-value">{assessment.crafts_yn}</p>
            <p className="ass-line">Arts</p>
            <p className="ass-value">{assessment.arts_yn}</p>
            <p className="ass-line">Learning</p>
            <p className="ass-value">{assessment.learning_yn}</p>
            <p className="ass-line">Gardening</p>
            <p className="ass-value">{assessment.gardening_yn}</p>
            <p className="ass-line">Sports</p>
            <p className="ass-value">{assessment.sports_yn}</p>
            <p className="ass-line">Exercise</p>
            <p className="ass-value">{assessment.exercise_yn}</p>
            <p className="ass-line">Outside</p>
            <p className="ass-value">{assessment.outside_yn}</p>
            <p className="ass-line">Animals</p>
            <p className="ass-value">{assessment.animals_yn}</p>
            <p className="ass-line">Socializing</p>
            <p className="ass-value">{assessment.socializing_yn}</p>
            <p className="ass-line">Work</p>
            <p className="ass-value">{assessment.work}</p>
            <p className="ass-line">Volunteer</p>
            <p className="ass-value">{assessment.volunteer}</p>
            <p className="ass-line">Parents</p>
            <p className="ass-value">{assessment.parents}</p>
            <p className="ass-line">Siblings</p>
            <p className="ass-value">{assessment.siblings}</p>
            <p className="ass-line">Close Family</p>
            <p className="ass-value">{assessment.close_family}</p>
            <p className="ass-line">Spouse</p>
            <p className="ass-value">{assessment.spouse}</p>
            <p className="ass-line">Children</p>
            <p className="ass-value">{assessment.children}</p>
            <p className="ass-line">Technology</p>
            <p className="ass-value">{assessment.technology}</p>
            <p className="ass-line">City or Country</p>
            <p className="ass-value">{assessment.city_or_country}</p>
            <p className="ass-line">Travel</p>
            <p className="ass-value">{assessment.travel}</p>
            <p className="ass-line">Alone Fun</p>
            <p className="ass-value">{assessment.alone_fun}</p>
            <p className="ass-line">Social Fun</p>
            <p className="ass-value">{assessment.social_fun}</p>
            <p className="ass-line">One Thing You Wish Everyone Knew</p>
            <p className="ass-value">{assessment.one_thing}</p>
        </>
     );
}

export default ViewAssessment;