import React, {useState, useEffect} from 'react';
import '../Styles/AnonBody.css'
import axios from "axios";
import fogWave from '../../Images/fogWave.jpg'
import NavBar from '../../HeadAndFoot/NavBar'

const Home =()=> {

    const[quote, setQuote]=useState("Leave a Little Sparkle Wherever You Go...")
    const[whoSaid, setWhoSaid]=useState(" - anonymous")
    const[quoteImg, setQuoteImg]=useState('')
    const[success, setSuccess]=useState(false)

    const feelGoodQuote = async()=>{
        let response = await axios.get("https://quotes.rest/qod?language=en")
        if(response !== undefined){
            setQuote(response.data.contents.quotes[0].quote)
            setWhoSaid(response.data.contents.quotes[0].author)
            setQuoteImg(response.data.contents.quotes[0].background)
             setSuccess(true)
        }
    }

    useEffect(()=>{
        feelGoodQuote()
    }, [])


    return ( 
        <>
            <div className = 'row home-container'>
                <div className = "col-2"></div>
                <div className = "col-8"> 
                    <div className="random-img" style={{backgroundImage: `url(${quoteImg})` }} >
                        <h1 className ="welcome-msg">Welcome to Actiscribe!</h1>
                        <h1 className="quote-msg">{quote}</h1>
                        <h3 className="author-msg">{whoSaid}</h3>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Home;