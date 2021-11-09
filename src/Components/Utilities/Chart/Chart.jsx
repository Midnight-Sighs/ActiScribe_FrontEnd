import React, {useEffect, useRef} from 'react';
import drawChart from './drawChart'

const Chart =(props)=>{

    const ref=useRef(null)

    useEffect(()=>{
        if(ref.current){
            drawChart(ref.current, props.data);
        }
    }, [ref])

    return(
        <div className="container">
            <div className="graph" ref={ref} />
        </div>
    );
};

export default React.memo(Chart)