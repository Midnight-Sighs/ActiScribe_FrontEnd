import React, { useState, useEffect } from 'react'

const UseHideShow = (id) =>{
    const [hideShow, setHideShow] = useState(false);

    useEffect(()=>{
        setHideShow(hideShow);
    })
}

export default UseHideShow