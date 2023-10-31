import { useReducer } from "react";

const initialState = 0

function reducer(state, action){
    switch(action){
        case "Increment" :
            return state + 1
        case "Decrement" :
            return state - 1
        default : 
            return state;
    }
}

function UseReducers(){
    const [count, dispatch] = useReducer(reducer, initialState);
    return(
        <>
            <h1>Count Value : {count}</h1>
            <button onClick={() => dispatch("Increment")}>Increment</button>
            <button onClick={() => dispatch("Decrement")}>Decrement</button>
        </>
    )
}

export default UseReducers;