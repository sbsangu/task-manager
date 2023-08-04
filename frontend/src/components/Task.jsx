import React, { useCallback, useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import { useDispatch, useSelector } from "react-redux";
import TaskInfo from "./TaskInfo";
import { getAllTasks } from "./Actions/task";

const Task = ({ tasks }) => {
 
 console.log({tasks})


 


 const completedTasks = tasks?.filter((task) => task.status === 'Completed');
 const incompletedTasks = tasks?.filter((task) => task.status != 'Completed');
 

 





  return (
    <div className="flex flex-col pb-10 justify-center items-center mx-auto ">
      <div className="flex flex-col  bg-white mt-6 px-4 pb-6">
        <div className="text-4xl text-black bg-gray-400   mx-auto  px-6 py-4 items-center flex justify-center mt-10 font-bold">
          <p className="mx-auto text-center "> Task Manager</p>
        </div>

        <div className=" border border-black bg-slate-700 p-4 mt-6 sm:w-[500px] w-[300px] mx-auto ">
          <TaskForm />
        </div>
      </div>
      <div>

        <div className="mt-6 py-4 mb-10 w-[80vw] mx-auto ">
        <div className="flex font-semibold text-xl text-black flex-row justify-center items-center gap-4  ">
        <div  >
         Total Task: {tasks?.length}
        </div>
        <div  >
         Completed Task:{completedTasks?.length}
        </div>

        <div >
         Incompleted Task:{incompletedTasks?.length}
        </div>

        </div>
          <div className="w-full ">
            {tasks &&
              tasks?.map((item, index) => (
                <div key={item._id} className="p-4 mb-2 w-full mx-auto ">
                  <TaskInfo tasks={item} />
                </div>
              ))}
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default Task;
