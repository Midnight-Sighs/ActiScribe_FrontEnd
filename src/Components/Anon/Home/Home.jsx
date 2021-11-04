import React, {useState, useEffect} from 'react';
import '../Styles/AnonBody.css'
import axios from "axios";

const Home =()=> {

    const[quote, setQuote]=useState("Leave a Little Sparkle Wherever You Go...")
    const[whoSaid, setWhoSaid]=useState(" - anonymous")
    const[quoteImg, setQuoteImg]=useState('')

    const feelGoodQuote = async()=>{
        let response = await axios.get("https://quotes.rest/qod?language=en")
        setQuote(response.data.contents.quotes[0].quote)
        setWhoSaid(response.data.contents.quotes[0].author)
        setQuoteImg(response.data.contents.quotes[0].background)
    }

    useEffect(()=>{
        feelGoodQuote()
    }, [])


    return ( 
        <>
            <div className = 'row'>
                <div className = "col-2"></div>
                <div className = "col-8 random-img" >
                    <h1 className ="welcome-msg">Welcome to Actiscribe!</h1>
                    <h1 className="quote-msg">{quote}</h1>
                    <h3 className="author-msg">{whoSaid}</h3>
                </div>

            </div>
        </>
     );
}

export default Home;