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
            errors:{
                error: false,
                nickname: null,
                fifty: null,
                two_fifty: null
            }
         }
    }

    componentDidMount=()=>{
        this.setState({
            residentId:this.props.resident
        })
        if(!this.props.assessment){

        }else{
            this.setState({
                nickname: this.props.assessment.nickname,
                games_yn:this.props.assessment.games_yn,
                books_yn:this.props.assessment.books_yn,
                music_yn:this.props.assessment.music_yn,
                crafts_yn:this.props.assessment.crafts_yn,
                arts_yn:this.props.assessment.arts_yn,
                learning_yn:this.props.assessment.learning_yn,
                gardening_yn:this.props.gardening_yn,
                sports_yn:this.props.assessment.sports_yn,
                exercise_yn:this.props.assessment.exercise_yn,
                outside_yn:this.props.assessment.outside_yn,
                animals_yn:this.props.assessment.animals_yn,
                socializing_yn:this.props.assessment.socializing_yn,
                work:this.props.assessment.work,
                volunteer:this.props.assessment.volunteer,
                parents:this.props.assessment.parents,
                siblings:this.props.assessment.siblings,
                close_family:this.props.assessment.close_family,
                spouse:this.props.assessment.spouse,
                children:this.props.assessment.children,
                technology:this.props.assessment.technology,
                city_or_country:this.props.assessment.city_or_country,
                travel:this.props.assessment.travel,
                alone_fun:this.props.assessment.alone_fun,
                social_fun:this.props.assessment.social_fun,
                one_thing:this.props.assessment.one_thing
            })
        }
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
        if(!this.props.assessment){
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
        else{
            try{
                let response = await axios.put(`http://127.0.0.1:8000/api/actiscribe/residents/${residentId}/assessment/`, newAssessment, {headers: {Authorization: 'Bearer '+ jwt}});
                this.setState({
                    activeAssessment: response.data
                })
                }
                catch(err){
                    console.log(err, "Problem submitting assessment")
                }
        }
    }

    handleChange=(event)=>{
        let errors=this.state.errors;
        if(event.target.name =='nickname'){
            errors.nickname = event.target.value && event.target.value.length >=20 ? "That field must be less than 20 characters in length" :null
            if(errors.nickname !==null){
                errors.error = true
            }else{errors.error = false}
        }
        if(event.target.name ==="games_yn"||event.target.name === "books_yn"||event.target.name === "music_yn"||event.target.name ==="crafts_yn"||event.target.name ==="arts_yn"||event.target.name ==="learning_yn"||event.target.name ==="gardening_yn"||event.target.name ==="sports_yn" ||event.target.name ==="exercise_yn"||event.target.name ==="outside_yn"||event.target.name ==="animals_yn"||event.target.name ==="socializing_yn"){
            errors.fifty = event.target.value && event.target.value.length >=50 ? "That field must be 50 characters or less.": null
            if(errors.fifty!==null){
                errors.error = true
            }else{errors.error=false}
        }
        if(event.target.name ==="work"||event.target.name==="volunteer"||event.target.name==="parents"||event.target.name==="siblings"||event.target.name==="close_family"||event.target.name==="spouse"||event.target.name==="children"||event.target.name==="technology"||event.target.name==="city_or_country"||event.target.name==="travel"||event.target.name==="alone_fun"||event.target.name==="social_fun"||event.target.name==="one_thing"){
            errors.two_fifty = event.target.value && event.target.value.length >=250 ? "That field must be 250 characters or less":null
            if(errors.two_fifty!==null){
                errors.error=true
            }else{errors.error=false}
        }
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
            <div className="row">
                <div className="col-6">
                <form onSubmit={this.onSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label className='ass-form-label'>Nickname</label></td>
                                <td><input className = 'ass-form-input' name='nickname' value={this.state.nickname} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Games?</label></td>
                                <td><input className = 'ass-form-input' name='games_yn' value={this.state.games_yn}onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Books?</label></td>
                                <td><input className = 'ass-form-input' name='books_yn' value={this.state.books_yn}onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Music</label></td>
                                <td><input className = 'ass-form-input' name='music_yn' value={this.state.music_yn}onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Crafts</label></td>
                                <td><input className = 'ass-form-input' name='crafts_yn' value={this.state.crafts_yn}onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Arts</label></td>
                                <td><input className = 'ass-form-input' name='arts_yn' value={this.state.arts_yn} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Learning</label></td>
                                <td><input className = 'ass-form-input' name='learning_yn' value={this.state.learning_yn}onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Gardening</label></td>
                                <td><input className = 'ass-form-input' name='gardening_yn' value={this.state.gardening_yn}onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Sports</label></td>
                                <td><input className = 'ass-form-input' name='sports_yn' value={this.state.sports_yn}onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Exercise</label></td>
                                <td><input className = 'ass-form-input' name='exercise_yn' value={this.state.exercise_yn}onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Outside</label></td>
                                <td><input className = 'ass-form-input' name='outside_yn' value={this.state.outside_yn}onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Animals</label></td>
                                <td><input className = 'ass-form-input' name='animals_yn' value={this.state.animals_yn} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Socializing</label></td>
                                <td><input className = 'ass-form-input' name='socializing_yn' value={this.state.socializing_yn}onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Work, Past Jobs</label></td>
                                <td><input className = 'ass-form-input' name='work' value={this.state.work} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Volunteer Work</label></td>
                                <td><input className = 'ass-form-input' name='volunteer' value={this.state.volunteer} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Parents</label></td>
                                <td><input className = 'ass-form-input' name='parents' value={this.state.parents} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Siblings</label></td>
                                <td><input className = 'ass-form-input' name='siblings' value={this.state.siblings} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Other Close Family</label></td>
                                <td><input className = 'ass-form-input' name='close_family' value={this.state.close_family} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Spouse</label></td>
                                <td><input className = 'ass-form-input' name='spouse' value={this.state.spouse} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Children</label></td>
                                <td><input className = 'ass-form-input' name='children' value={this.state.children} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Technology</label></td>
                                <td><input className = 'ass-form-input' name='technology' value={this.state.technology} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>City or Country</label></td>
                                <td><input className = 'ass-form-input' name='city_or_country' value={this.state.city_or_country} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Travel Experience</label></td>
                                <td><input className = 'ass-form-input' name='travel' value={this.state.travel} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Alone Fun</label></td>
                                <td><input className = 'ass-form-input' name='alone_fun' value={this.state.alone_fun} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>Social Fun</label></td>
                                <td><input className = 'ass-form-input' name='social_fun' value={this.state.social_fun} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label className='ass-form-label'>One Thing They Wish Everyone Knew</label></td>
                                <td><input className = 'ass-form-input' name='one_thing' value={this.state.one_thing} onChange={this.handleChange} /></td>
                            </tr>
                            {this.state.errors.error ? <button type="submit" disabled>Save Assessment</button> : <button type="submit">Save Assessment</button>}
                        </tbody>
                    </table>
                </form>
                </div>
                <div className = "col-2">
                    {this.state.errors.nickname ? <span className="ass-error">{this.state.errors.nickname}</span>:null}
                    {this.state.errors.fifty ? <span className="ass-error">{this.state.errors.fifty}</span>:null}
                    {this.state.errors.two_fifty? <span className="ass-error">{this.state.errors.two_fifty}</span>:null}
                </div>
            </div>
            </>
         );
    }
}
 
export default Assessment;