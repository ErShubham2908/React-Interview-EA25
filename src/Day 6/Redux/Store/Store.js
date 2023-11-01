import { configureStore } from "@reduxjs/toolkit";
import CounerSlice from '../Slice/CounterSlice'

const Store = configureStore({
    reducer : {
        Data : CounerSlice
    }
})

export default Store;