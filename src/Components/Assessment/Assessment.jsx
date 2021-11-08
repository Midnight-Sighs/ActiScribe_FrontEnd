import React, { Component } from 'react'
import axios from 'axios';

class Assessment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeAssessment:[],
            residentId: "",
            nickname: "",
            games_yn:"",
            books_yn:"",
            music_yn:"",
            crafts_yn:"",
            arts_yn:"",
            learning_yn:"",
            gardening_yn:"",
            sports_yn:"",
            exercise_yn:"",
            outside_yn:"",
            animals_yn:"",
            socializing_yn:"",
            work:"",
            volunteer:"",
            parents:"",
            siblings:"",
            close_family:"",
            spouse:"",
            children:"",
            technology:"",
            city_or_country:"",
            travel:"",
            alone_fun:"",
            social_fun:"",
            one_thing:"",
         }
    }

    componentDidMount=()=>{
        this.setState({
            residentId:this.props.resident
        })
    }

    componentDidUpdate=(prevProps)=>{
        if(prevProps != this.props)
        this.setState({
            residentId:this.props.resident
        })
    }


    newAssessment =async (residentId, newAssessment)=>{
        const jwt = localStorage.getItem('token')
        debugger
        try{
        let response = await axios.post(`http://127.0.0.1:8000/api/actiscribe/residents/${residentId}/assessment/`, newAssessment, {headers: {Authorization: 'Bearer '+ jwt}});
        this.setState({
            activeAssessment: response.data
        })
        }
        catch(err){
            console.log(err, "Problem submitting assessment")
        }
    }

    handleChange=(event)=>{
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    onSubmit=(event)=>{
        let residentId= this.state.residentId
        let newAssessment={
            "nickname": this.state.nickname,
            "games_yn":this.state.games_yn,
            "books_yn":this.state.books_yn,
            "music_yn":this.state.music_yn,
            "crafts_yn":this.state.crafts_yn,
            "arts_yn":this.state.arts_yn,
            "learning_yn":this.state.learning_yn,
            "gardening_yn":this.state.gardening_yn,
            "sports_yn": this.state.sports_yn,
            "exercise_yn":this.state.exercise_yn,
            "outside_yn":this.state.outside_yn,
            "animals_yn":this.state.animals_yn,
            "socializing_yn":this.state.socializing_yn,
            "work":this.state.work,
            "volunteer":this.state.volunteer,
            "parents":this.state.parents,
            "siblings":this.state.siblings,
            "close_family": this.state.close_family,
            "spouse":this.state.spouse,
            "children":this.state.children,
            "technology": this.state.technology,
            "city_or_country":this.state.city_or_country,
            "travel":this.state.travel,
            "alone_fun":this.state.alone_fun,
            "social_fun":this.state.social_fun,
            "one_thing":this.state.one_thing
        }
        this.newAssessment(residentId, newAssessment)
        this.props.toggleHS()
    }

    render() { 
        return ( 
            <>
                <form onSubmit={this.onSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label className='ass-form-label'>Nickname</label></td>
                                <td><input className = 'ass-form-input' name='nickname' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Games?</label></td>
                                <td><input className = 'ass-form-input' name='games_yn' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Books?</label></td>
                                <td><input className = 'ass-form-input' name='books_yn' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Music</label></td>
                                <td><input className = 'ass-form-input' name='music_yn' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Crafts</label></td>
                                <td><input className = 'ass-form-input' name='crafts_yn' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Arts</label></td>
                                <td><input className = 'ass-form-input' name='arts_yn' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Learning</label></td>
                                <td><input className = 'ass-form-input' name='learning_yn' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Gardening</label></td>
                                <td><input className = 'ass-form-input' name='gardening_yn' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Sports</label></td>
                                <td><input className = 'ass-form-input' name='sports' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Exercise</label></td>
                                <td><input className = 'ass-form-input' name='exercise' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Outside</label></td>
                                <td><input className = 'ass-form-input' name='outside_yn' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Animals</label></td>
                                <td><input className = 'ass-form-input' name='animals_yn' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Socializing</label></td>
                                <td><input className = 'ass-form-input' name='socializing_yn' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Work, Past Jobs</label></td>
                                <td><input className = 'ass-form-input' name='work' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Volunteer Work</label></td>
                                <td><input className = 'ass-form-input' name='volunteer' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Parents</label></td>
                                <td><input className = 'ass-form-input' name='parents' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Siblings</label></td>
                                <td><input className = 'ass-form-input' name='siblings' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Other Close Family</label></td>
                                <td><input className = 'ass-form-input' name='close_family' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Spouse</label></td>
                                <td><input className = 'ass-form-input' name='spouse' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Children</label></td>
                                <td><input className = 'ass-form-input' name='children' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Technology</label></td>
                                <td><input className = 'ass-form-input' name='technology' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>City or Country</label></td>
                                <td><input className = 'ass-form-input' name='city_or_country' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Travel Experience</label></td>
                                <td><input className = 'ass-form-input' name='travel' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Alone Fun</label></td>
                                <td><input className = 'ass-form-input' name='alone_fun' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Social Fun</label></td>
                                <td><input className = 'ass-form-input' name='social_fun' onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>One Thing They Wish Everyone Knew</label></td>
                                <td><input className = 'ass-form-input' name='one_thing' onChange={this.handleChange} /></td>
                            </tr>
                            <button type="submit">Save Assessment</button>
                        </tbody>
                    </table>
                </form>
            </>
         );
    }
}
 
export default Assessment;