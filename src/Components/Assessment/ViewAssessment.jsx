import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Assessment from './Assessment'
import '../Resident/Styles/Residents.css'

const ViewAssessment=(props)=> {

    const[assessment, setAssessment]=useState([])
    const[residentId, setResidentId]=useState(props.resident)
    const[newAssessmentHS, setNewAssessmentHS]=useState(false)
    const[editHS, setEditHS]=useState(true)

    useEffect(()=>{
        setResidentId(props.resident)
        getAssessmentByResident(residentId)
        setAssessment(props.assessment)
    }, [props])

    useEffect(()=>{
        setResidentId(props.resident)
        getAssessmentByResident(residentId)
        setAssessment(props.assessment)
    }, [])

    const newAssessmentClick =()=>{
        setNewAssessmentHS(!newAssessmentHS)
    }

    const editOnClick=()=>{
        setEditHS(!editHS)
    }


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


    if(assessment === undefined){
        return(
            <>
            <div className="add-ass">
                <p>Currently no assessment for this resident</p>
                {newAssessmentHS ? null: <button className="edit-note-btn" onClick={newAssessmentClick}>Add Assessment</button>}
                {newAssessmentHS ? <Assessment {...props} toggleHS={newAssessmentClick} residentId={residentId}/> : null}
            </div>
            </>
        )
    }

    return ( 
        <>
        {editHS ?
            <>
            <div className="ass-view">
            <table>
                <tbody>
                    <tr>
                        <td className="ass-line">Nickname</td>
                        <td className="ass-value">{assessment.nickname }</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Games</td>
                        <td className="ass-value">{assessment.games_yn }</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Books</td>
                        <td className="ass-value">{assessment.books_yn}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Music</td>
                        <td className="ass-value">{assessment.music_yn}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Crafts</td>
                        <td className="ass-value">{assessment.crafts_yn}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Arts</td>
                        <td className="ass-value">{assessment.arts_yn}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Learning</td>
                        <td className="ass-value">{assessment.learning_yn}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Gardening</td>
                        <td className="ass-value">{assessment.gardening_yn}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Sports</td>
                        <td className="ass-value">{assessment.sports_yn}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Exercise</td>
                        <td className="ass-value">{assessment.exercise_yn}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Outside</td>
                        <td className="ass-value">{assessment.outside_yn}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Animals</td>
                        <td className="ass-value">{assessment.animals_yn}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Socializing</td>
                        <td className="ass-value">{assessment.socializing_yn}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Work</td>
                        <td className="ass-value">{assessment.work}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Volunteer</td>
                        <td className="ass-value">{assessment.volunteer}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Parents</td>
                        <td className="ass-value">{assessment.parents}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Siblings</td>
                        <td className="ass-value">{assessment.siblings}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Close Family</td>
                        <td className="ass-value">{assessment.close_family}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Spouse</td>
                        <td className="ass-value">{assessment.spouse}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Children</td>
                        <td className="ass-value">{assessment.children}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Technology</td>
                        <td className="ass-value">{assessment.technology}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">City or Country</td>
                        <td className="ass-value">{assessment.city_or_country}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Travel</td>
                        <td className="ass-value">{assessment.travel}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Alone Fun</td>
                        <td className="ass-value">{assessment.alone_fun}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">Social Fun</td>
                        <td className="ass-value">{assessment.social_fun}</td>
                    </tr>
                    <tr>
                        <td className="ass-line">One Thing You Wish Everyone Knew</td>
                        <td className="ass-value">{assessment.one_thing}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="edit-ass-btn">
                <button className="edit-note-btn"onClick={editOnClick}>Edit Assessment?</button>
            </div>
            </>
            :
            <Assessment resident={residentId} toggleHS={editOnClick} assessment={assessment}/>}
        </>
     );
}

export default ViewAssessment;