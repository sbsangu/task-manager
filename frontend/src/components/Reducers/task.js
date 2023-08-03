import { createReducer } from "@reduxjs/toolkit";

export const taskReducer=createReducer({},{

 taskRequest: (state) => {
  state.loading = true;

},
taskSuccess: (state, action) => {
  state.loading = false;
  state.message = action.payload;
  
},
taskFailure: (state, action) => {
  state.loading = false; 
  state.error = action.payload;
 
},
getAllTaskRequest: (state) => {
  state.loading = true;

},
getAllTaskSuccess: (state, action) => {
  state.loading = false;
  state.tasks = action.payload;
  
},
getAllTaskFailure: (state, action) => {
  state.loading = false; 
  state.error = action.payload;
 
},
updateStatusRequest: (state, action) => {
  state.loading = true;
},
updateStatusSuccess: (state, action) => {
  state.loading = false;
  state.message=action.payload;

},
updateStatusFailure: (state, action) => {
  state.loading = false;
  state.error = action.payload;
},

updateTaskRequest:(state)=>{
  state.loading = true;
},
updateTaskSuccess:(state, action)=>{
  state.loading = false;
  state.message=action.payload;
}
,
updateTaskFailure:(state, action)=>{
  state.loading = false;
  state.error=action.payload;
},

deleteTaskRequest:(state)=>{
  state.loading = false;
},
deleteTaskSuccess:(state, action)=>{
  state.loading = false;
  state.message=action.payload;
},
deleteTaskFailure:(state, action)=>{
  state.loading = false;
  state.error=action.payload;
},

clearMessage:(state)=>{
  state.message=null;
},
clearError:(state)=>{
  state.error=null;
}
})