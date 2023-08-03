import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTasks } from "./components/Actions/task";

const App=()=> {

  const dispatch=useDispatch();
  const {loading,message,error,tasks}=useSelector((state)=>state.task)

  useEffect(() => {
   dispatch(getAllTasks());
  }, [message,dispatch,error])
 
  useEffect(() => {
   
    
 dispatch({ type: "clearMessage" });
   

    
 dispatch({ type: "clearErrors" });
  }, [dispatch,message,error]);
 
 
  
  return (
    
   <Router>
  


   <Routes >
      <Route  path="/" element={<Task tasks={tasks} />}/>
    </Routes>
 

   </Router>
 
  );
}

export default App;
