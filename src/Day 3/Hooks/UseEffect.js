import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function UseEffect() {
    const [mouseCod, setMouseCod] = useState({x : 0, y : 0});
    const [data, setData] = useState(0)
    const mouseMoving = (event) => {
        setMouseCod({
            x : event.clientX,
            y: event.clientY
        })
    }
    useEffect(() => {
        window.addEventListener('mousemove', mouseMoving);
        console.log('Hi.......');
        console.log(mouseCod.x, mouseCod.y);

        // return(()=> {
        //     window.removeEventListener('mousemove', mouseMoving)
        // })
    },[mouseCod])

    // useEffect(() => {
    //     console.log(data);
    // }, [data])
  return (
    <>
        <h4>X : {mouseCod.x},  Y : {mouseCod.y}</h4>
        <h2>{data}</h2>
        <button onClick={() => setData(data + 1)} >Inc</button>
    </>
  )
}

export default UseEffect
