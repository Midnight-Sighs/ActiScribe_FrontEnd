import React, {useState, useEffect} from 'react';
import Chart from '../Chart/Chart'

function ActivitiesForChart(props) {

    const[partNumbers, setPartNumbers]=useState([])
    const[partLoaded, setPartLoaded]=useState(false)
    const[percentSoc, setPercentSoc]=useState()
    const[percentPhy, setPercentPhy]=useState()
    const[percentEmo, setPercentEmo]=useState()
    const[percentSpi, setPercentSpi]=useState()
    const[percentEnv, setPercentEnv]=useState()
    const[percentFin, setPercentFin]=useState()
    const[percentInt, setPercentInt]=useState()
    const[percentCre, setPercentCre]=useState()
    const[percentOcc, setPercentOcc]=useState()
    const[percentSen, setPercentSen]=useState()

    const filterAllActivities=()=>{
        let x = filterActivities("Social");
        let y = filterActivities("Physical");
        let z = filterActivities("Emotional");
        let a = filterActivities("Spiritual");
        let b = filterActivities("Environmental");
        let c = filterActivities("Financial");
        let d = filterActivities("Intellectual");
        let e = filterActivities("Creative");
        let f = filterActivities("Occupational");
        let g = filterActivities("Sensory");
        let sum = (x+y+z+a+b+c+d+e+f+g)
        let percentX=calculatePercentage(x, sum)
        setPercentSoc(percentX)
        let percentY=calculatePercentage(y, sum)
        setPercentPhy(percentY)
        let percentZ=calculatePercentage(z, sum)
        setPercentEmo(percentZ)
        let percentA=calculatePercentage(a, sum)
        setPercentSpi(percentA)
        let percentB=calculatePercentage(b, sum)
        setPercentEnv(percentB)
        let percentC=calculatePercentage(c, sum)
        setPercentFin(percentC)
        let percentD=calculatePercentage(d, sum)
        setPercentInt(percentD)
        let percentE=calculatePercentage(e, sum)
        setPercentCre(percentE)
        let percentF=calculatePercentage(f, sum)
        setPercentOcc(percentF)
        let percentG=calculatePercentage(g, sum)
        setPercentSen(percentG)
        setPartNumbers([
            {name: "Social" ,value: x},
            {name: "Physical" ,value: y},
            {name: "Emotional" ,value: z},
            {name: "Spiritual" ,value: a},
            {name: "Environmental" ,value:b},
            {name: "Financial" ,value: c},
            {name: "Intellectual" ,value: d},
            {name: "Creative" ,value: e},
            {name: "Occupational" ,value: f},
            {name: "Sensory" ,value: g},
        ])
        if(x ===.1 && y===.1 &&z===.1&&a===.1&&b===.1&&c===.1&&d===.1&&e===.1&&f===.1&&g===.1){
            setPartLoaded(false)
        }
        if(sum >0){
            setPartLoaded(true)
        }
    }

    const filterActivities=(dow)=>{
        let filtered =[];
        if(!props.activities){
            setPartLoaded(false)
            console.log("No activity to display.")
        }
        if (props.activities!=null&& props.activities != undefined&&props.activities.length>0 ){
            props.activities.map((activity)=>{
                if(activity.dow_one === dow || activity.dow_two === dow|| activity.dow_three === dow){
                    filtered.push(activity)
                }
            })
            let x = filtered.length
            return x
        }
    }

    useEffect(()=>{
        filterAllActivities()
    },[props.activities])

    useEffect(()=>{
        if(percentSen ===NaN){
        setPartLoaded(false)}
    }, [percentSen])

    useEffect(()=>{
        filterAllActivities()
    },[])


    const calculatePercentage=(x, sum)=>{
        let number = x/sum;
        if(number === 1){
            let rounded = 100
            return rounded
        }
        else{
            let percent = number *100
            let rounded = Math.round(percent)
            return rounded
        }
    }


    return ( 
        <>
            <div className="row">
                {partLoaded ?
                <>
                <div className ="col-5">
                    <Chart data={partNumbers} />
                </div> 
                <div className="col-4 res-perc">
                    <table>
                        <tbody>
                            <tr> 
                                <td>Social Participation: </td><td> {percentSoc}%</td>
                            </tr>
                            <tr>
                                <td>Physical Participation:  </td><td>{percentPhy}%</td>
                            </tr>
                            <tr>
                                <td>Emotional Participation:  </td><td>{percentEmo}%</td>
                            </tr>
                            <tr>
                                <td>Spiritual Participation:  </td><td>{percentSpi}%</td>
                            </tr>
                            <tr>
                                <td>Environmental Participation:  </td><td>{percentEnv}%</td>
                            </tr>
                            <tr>
                                <td>Financial Participation:  </td><td>{percentFin}%</td>
                            </tr>
                            <tr>
                                <td>Intellectual Participation:  </td><td>{percentInt}%</td>
                            </tr>
                            <tr>
                                <td>Creative Participation:  </td><td>{percentCre}%</td>
                            </tr>
                            <tr>
                                <td>Occupational Participation:  </td><td>{percentOcc}%</td>
                            </tr>
                            <tr>
                                <td>Sensory Participation:  </td><td>{percentSen}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
                </>
                : <p>No participation to display.</p>}
            </div>
        </>
     );
}

export default ActivitiesForChart;