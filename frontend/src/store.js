import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./components/Reducers/task";

export const server=`http://localhost:8000/api/v1`
const store=configureStore({
 reducer:{
     task:taskReducer
 }
})

export default store;