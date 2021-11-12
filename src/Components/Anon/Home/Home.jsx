import React, {useState, useEffect} from 'react';
import '../Styles/AnonBody.css'
import axios from "axios";

const Home =(props)=> {

    const[quote, setQuote]=useState("Leave a Little Sparkle Wherever You Go...")
    const[whoSaid, setWhoSaid]=useState(" - anonymous")
    const[user, setUser]=useState(props.user)
    const[quoteImg, setQuoteImg]=useState('')
    const[success, setSuccess]=useState(false)

    const feelGoodQuote = async()=>{
        let response = await axios.get("https://quotes.rest/qod?language=en")
        if(response !== undefined){
            setQuote(response.data.contents.quotes[0].quote)
            setWhoSaid(response.data.contents.quotes[0].author)
            setSuccess(true)
        }
    }

    useEffect(()=>{
        feelGoodQuote()
    }, [])


    return ( 
        <>
            <div className = 'row conts'>
                <div className = "col-12"> 
                    <h1 className ="welcome-msg">Welcome</h1>
                    <h1 className="quote-msg">" {quote} " --- {whoSaid}</h1>
                </div>
            </div>
        </>
     );
}

export default Home;