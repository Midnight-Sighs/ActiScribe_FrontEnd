import React, { useState } from 'react';
import { Social, Physical, Emotional, Spiritual, Environmental, Financial, Intellectual, Creative, Occupational, Sensory } from './DOWExplanations'

const DOW = () => {

    //#region
    //HideShow State for each section.  Attempted custom hook here to shorten this to no avail
    const [hideShowSoc, setHideShowSoc] = useState(false)
    const [hideShowPhy, setHideShowPhy] = useState(false)
    const [hideShowEmo, setHideShowEmo] = useState(false)
    const [hideShowSpi, setHideShowSpi] = useState(false)
    const [hideShowEnv, setHideShowEnv] = useState(false)
    const [hideShowFin, setHideShowFin] = useState(false)
    const [hideShowInt, setHideShowInt] = useState(false)
    const [hideShowCre, setHideShowCre] = useState(false)
    const [hideShowOcc, setHideShowOcc] = useState(false)
    const [hideShowSen, setHideShowSen] = useState(false)
    //#endregion

    //#region
    //Click for each region.  Same as above, attempted to use custom hook, didn't work for me
    
    const onClickHideShowSoc = () =>{
        setHideShowSoc(!hideShowSoc)
    }
    const onClickHideShowPhy = () =>{
        setHideShowPhy(!hideShowPhy)
    }
    const onClickHideShowEmo = () =>{
        setHideShowEmo(!hideShowEmo)
    }
    const onClickHideShowSpi = () =>{
        setHideShowSpi(!hideShowSpi)
    }
    const onClickHideShowEnv = () =>{
        setHideShowEnv(!hideShowEnv)
    }
    const onClickHideShowFin = () =>{
        setHideShowFin(!hideShowFin)
    }
    const onClickHideShowInt = () =>{
        setHideShowInt(!hideShowInt)
    }
    const onClickHideShowCre = () =>{
        setHideShowCre(!hideShowCre)
    }
    const onClickHideShowOcc = () =>{
        setHideShowOcc(!hideShowOcc)
    }
    const onClickHideShowSen = () =>{
        setHideShowSen(!hideShowSen)
    }
    //#endregion

    return ( 
        <div className="container-fluid">
            <div className=" row tutorial-summary">
                <div className="col-12">
                    <h1>Dimensions of Wellness</h1>
                    <h2>What are they and why do we need to know them?</h2>
                    <p>The SOM isn't clear on what constitutes as person centered care and every individual is different so how can you measure or gauge what kind of wellness you are providing to your residents?  There are aspects of all of our being referred to as the dimensions of wellness (hereby abbreviated to DOW) that pertain to each and every one of us to some degree.  There are many different definitions of how to break down the DOW but the overall concept remains the same.  Because the DOW can apply to each and every person, it only makes sense to categorize our activities by these because we're trying to provide the most well rounded enrichment to their lives.</p>
                </div>
            </div>
            <div className = "row">
                <div className="col-4">
                    <div className="category">
                        <h3 onClick={onClickHideShowSoc}>Social Wellness</h3>
                    </div>
                    <div className="category">
                        <h3 onClick={onClickHideShowPhy}>Physical Wellness</h3>
                    </div>
                    <div className="category">
                        <h3 onClick={onClickHideShowEmo}>Emotional Wellness</h3>
                    </div>
                    <div className="category">
                        <h3 onClick={onClickHideShowSpi}>Spiritual Wellness</h3>
                    </div>
                    <div className="category">
                        <h3 onClick={onClickHideShowEnv}>Environmental Wellness</h3>
                    </div>
                    <div className="category">
                        <h3 onClick={onClickHideShowFin}>Financial Wellness</h3>
                    </div>
                    <div className="category">
                        <h3 onClick={onClickHideShowInt}>Intellectual Wellness</h3>
                    </div>
                    <div className="category">
                        <h3 onClick={onClickHideShowCre}>Creative Wellness</h3>
                    </div>
                    <div className="category">
                        <h3 onClick={onClickHideShowOcc}>Occupational Wellness</h3>
                    </div>
                    <div className="category">
                        <h3 onClick={onClickHideShowSen}>Sensory Wellness</h3>
                    </div>
                </div>
                <div className="col-7 hidden-box">
                    <div>
                        {hideShowSoc ? <Social /> : null}
                        {hideShowPhy ? <Physical />: null}
                        {hideShowEmo ? <Emotional />: null}
                        {hideShowSpi ? <Spiritual />: null}
                        {hideShowEnv ? <Environmental />: null}
                        {hideShowFin ? <Financial />: null}
                        {hideShowInt ? <Intellectual />: null}
                        {hideShowCre ? <Creative />: null}
                        {hideShowOcc ? <Occupational />: null}
                        {hideShowSen ? <Sensory />: null}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default DOW;