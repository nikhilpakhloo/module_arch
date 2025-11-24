import { combineReducers } from "@reduxjs/toolkit";
import { AuthSlice } from "../modules/auth";

const rootReducer = combineReducers({
    auth: AuthSlice
})

export default rootReducer