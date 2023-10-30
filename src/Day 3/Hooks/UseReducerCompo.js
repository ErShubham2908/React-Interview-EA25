import React from 'react'
import { useState } from 'react';
import { useReducer } from 'react'

// Initialstate 
const initialState = {
    balance : 0
}

// Reducer 
const reducer = (state, action) => {
    switch(action.type){
        case 'deposit' : 
            return {balance : state.balance + action.amount}
        case 'withdraw' : 
            return {balance : state.balance - action.amount}
        default : 
            return state.balance
    }
}

function UseReducerCompo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [amount, setAmount] = useState(0);

    const handleDepo = () => {
        dispatch({ type : "deposit", amount : parseInt(amount)})
    }

    const handleWith = () => {
        dispatch({ type : "withdraw",amount : parseInt(amount) })
    }

  return (
    <>
        <h1>Account Balance : {state.balance}</h1>
      <input type='number' placeholder='Enter Your Amount...' name='amount' onChange={(e) =>setAmount(e.target.value) }/>
      <button onClick={handleDepo}>Deposit</button>
      <button onClick={handleWith} >Withdraw</button>
    </>
  )
}

export default UseReducerCompo;