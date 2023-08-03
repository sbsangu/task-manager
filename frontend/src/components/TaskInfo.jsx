import React, { useCallback, useEffect, useState } from 'react';
import Select from "react-select";
import { deleteTask, updateStatus, updateTask } from './Actions/task';
import { useDispatch } from 'react-redux';
import { FaEdit } from "react-icons/fa";
import { IoMdTrash } from 'react-icons/io';

const TaskInfo = ({ tasks }) => {
 console.log({tasks});
 
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(tasks.title);
  const [description, setDescription] = useState(tasks.description);

  const handleChange = (selectedOption) => {
    dispatch(updateStatus(tasks._id, selectedOption.value));
    
    

  };

  const handleEditClick = useCallback(() => {
    setEditMode(!editMode);
  },[editMode]);

  const handleDelete=useCallback(async()=>{
   await dispatch(deleteTask(tasks._id));

  },[dispatch])

  const handleUpdate=useCallback(async()=>{
  
   await dispatch(updateTask(tasks._id,title,description));
   setEditMode(!editMode);

  },[dispatch,editMode])



 
  


  const options = [
    { value: 'Incomplete', label: 'Incomplete' },
    { value: 'Completed', label: 'Completed' },
  ];

  return (
    <div>
      <div className={`flex lg:flex-row items-center flex-col w-full gap-4 p-6 md:justify-between  justify-center ${tasks.status === "Completed" ? "bg-blue-300" : "bg-indigo-200"} w-full rounded-md text-white sm: `}>
        <div className='flex  flex-row justify-center items-center gap-2'>
          {editMode ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='font-semibold text-center text-black  text-xl bg-transparent border-b border-black focus:outline-none'
            />
          ) : (
            <div className='font-semibold text-xl text-black'>
              {title}
            </div>
          )}

          {editMode ? (
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='font-medium text-gray-700 bg-transparent border-b border-black focus:outline-none'
            />
          ) : (
            <div className='font-medium text-gray-700'>
              -  { '   '}{description}
            </div>
          )}

        
        </div>

      
        <div className='text-black   mt-2 lg:flex-row flex flex-col justify-center gap-6 items-center'>

        <div>
         {editMode ? (
         <div onClick={handleUpdate} className= 'items-center justify-center text-black font-medium hover:font-bold cursor-pointer '>
        <button className='bg-black text-white p-2 rounded-lg'>
         Update
        </button>
         </div>

        ):(
         <div></div>
        )}
         </div>

       <div className=' flex flex-row justify-center items-center gap-4'>
       <div onClick={handleDelete}  className='font-light cursor-pointer flex flex-row gap-6 '>
         <IoMdTrash size={20} />
        </div>

          <div className='items-center'>
            <FaEdit size={20}  onClick={handleEditClick} className='cursor-pointer' />
          </div>

          <Select className='text-black font-semibold text-md' options={options} isSearchable={false} placeholder={tasks.status} onChange={handleChange} />
       </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
