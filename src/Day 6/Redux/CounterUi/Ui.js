import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, div, multi, sub } from '../Slice/CounterSlice';

function Ui() {
    const counterData = useSelector((state) => state.Data.val)
    // const counterData = useSelector((state) => console.log(state))
    const dispatch = useDispatch();
    const handleSum = () => {
        dispatch(add(10))
    }

    const handleSub = () => {
        dispatch(sub())
    }

    const handleMulti = () => {
        dispatch(multi())
    }

    const handleDiv = () => {
        dispatch(div())
    }
  return (
    <>
      <h2>This is Redux Toolkit Example....</h2>
      <h3>Value is : {counterData}</h3>
      <button onClick={handleSum} >Increment </button>
      <button onClick={handleSub}>Decrement</button> <br/>
      <button onClick={handleMulti}>Multiply</button>
      <button onClick={handleDiv}>Divide</button>
    </>
  )
}

export default Ui
