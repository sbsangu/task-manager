// components/TaskForm.js
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { CreateTask } from "./Actions/task";

const TaskForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const dispatch=useDispatch();

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.title,formData.description);
    
     await dispatch(CreateTask(formData.title,formData.description));
    

    setFormData({ ...formData, title:" ",description:" "});



  
    

   
  };

  return (
   <div className="  mx-auto mt-4">
     <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-white font-bold mb-2">
          Title
        </label>
        <input
        // required
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={`w-full px-3 py-2 rounded border border-gray-300
           focus:outline-none focus:border-blue-500`}
        />
      
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-white font-bold mb-2">
          Description
        </label>
        <textarea 
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={`w-full px-3 py-2 rounded border border-gray-300
          focus:outline-none focus:border-blue-500`}
        ></textarea>
       
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Task
      </button>
    </form>
   </div>
  );
};

export default TaskForm;
