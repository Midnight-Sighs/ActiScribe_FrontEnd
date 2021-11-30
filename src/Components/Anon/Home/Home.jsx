import React, {useState, useEffect} from 'react';
import '../Styles/AnonBody.css'
import axios from "axios";

const Home =(props)=> {

    const[quote, setQuote]=useState("Leave a Little Sparkle Wherever You Go...");
    const[whoSaid, setWhoSaid]=useState(" - anonymous");
    const[user, setUser]=useState(props.user);
    const[activeResidentCount, setActiveResidents]=useState('');
    const[archivedResidentCount, setArchivedResidents]=useState('')

    const feelGoodQuote = async()=>{
        let response = await axios.get("https://quotes.rest/qod?language=en")
        if(response !== undefined){
            setQuote(response.data.contents.quotes[0].quote)
            setWhoSaid(response.data.contents.quotes[0].author)
        }
    }
    
    const countResidents = ()=>{
        let resCount = props.residents.length;
        let archCount = props.archived.length;
        setActiveResidents(resCount);
        setArchivedResidents(archCount);
    }

    useEffect(()=>{
        feelGoodQuote()
        countResidents()
    }, [])


    return ( 
        <>
            <div className = 'row conts'>
                <div className = "col-12"> 
                    <h1 className ="welcome-msg">Welcome {user.first_name} </h1>
                    <p className="res-count">You currently have {activeResidentCount} active residents in our system and {archivedResidentCount} archived residents.</p>
                    <h1 className="quote-msg">" {quote} " --- {whoSaid}</h1>
                </div>
            </div>
        </>
     );
}

export default Home;