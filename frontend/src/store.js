import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./components/Reducers/task";

export const server=`https://task-manager-five-vert.vercel.app/api/v1`

const store=configureStore({
 reducer:{
     task:taskReducer
 }
})


export default store;