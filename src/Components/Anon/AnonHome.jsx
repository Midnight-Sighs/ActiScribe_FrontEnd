import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AnonHome=()=> {

    const[quote, setQuote]=useState("I always try to write on the principle of the iceberg. There is seven-eighths of it underwater for every part that shows.")
    const[author, setAuthor]=useState(" - Anonymous")

    useEffect(()=>{
        anonInspirationalQuote()
    },[])

    const anonInspirationalQuote=async()=>{
        try{
            let response = await axios.get("https://goquotes-api.herokuapp.com/api/v1/random?count=1");
            setQuote(response.data.quotes[0].text)
            setAuthor(response.data.quotes[0].author)
        }
        catch(err){
            console.log(err, "Error getting random quote.")
        }
    }

    return ( 
        <>
            <div className="anon-wrapper row">
                <div className="ink-quill">
                </div>
                <div className="quote-block">
                    <p>{quote}
                    <br/>{author}</p>
                </div>
            </div>
        </>
     );
}

export default AnonHome;