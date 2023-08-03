import axios from "axios"
import { server } from "../../store";


export const CreateTask = (title, description) => async (dispatch) => {
 try {
   dispatch({
     type: "taskRequest",
   });

   const { data } = await axios.post(
     `${server}/createTask`,
     { title,description },
     {
       headers: {
         "Content-Type": "application/json",
       }
      
     }
   );


   dispatch({
     type: "taskSuccess",
     payload: data?.message,
   });
  
 } catch (error) {
   
   dispatch({
     type: "taskFailure",
     payload: error.message,
   });
 }
};


export const getAllTasks=()=>async(dispatch)=>{
 try{
 dispatch({
  type: "getAllTaskRequest",
});

const { data } = await axios.get(
  `${server}/tasks`
);


dispatch({
  type: "getAllTaskSuccess",
  payload: data?.tasks,
});
}

 catch (error) {

dispatch({
  type: "getAllTaskFailure",
  payload: error.message,
});
}

}


export const updateStatus=(id,selectedOption)=>async(dispatch)=>{
 try {
 console.log(selectedOption)

 dispatch({
  type:"updateStatusRequest",

 })
 
 const { data } = await axios.put(
   `${server}/tasks/${id}`,{status:selectedOption},
   {
    headers: {
      "Content-Type": "application/json",
    }
   
  }

 );
 
 
 dispatch({
   type: "updateStatusSuccess",
   payload: data?.message,
 });
 
  
 } catch (error) {
  dispatch({
   type: "updateStatusFailure",
   payload: error.message,
 });
  
 }
}


export const updateTask=(id,title,description)=>async(dispatch)=>{
 try {
 

 dispatch({
  type:"updateTaskRequest",
  
 })
 
 const { data } = await axios.put(
   `${server}/update/task/${id}`,{title,description},
   {
    headers: {
      "Content-Type": "application/json",
    }
   
  }

 );
 
 
 dispatch({
   type: "updateTaskSuccess",
   payload: data?.message,
 });
 
  
 } catch (error) {
  dispatch({
   type: "updateTaskFailure",
   payload: error.message,
 });
  
 }
}



export const deleteTask=(id)=>async(dispatch)=>{
 try {
 

 dispatch({
  type:"deleteTaskRequest",
  
 })
 
 const { data } = await axios.delete(
   `${server}/tasks/${id}`);
 
 
 dispatch({
   type: "deleteTaskSuccess",
   payload: data?.message,
 });
 
  
 } catch (error) {
  dispatch({
   type: "deleteTaskFailure",
   payload: error.message,
 });
  
 }
}
