import { TaskModel } from "../models/taskSchema.js";

//Create Task

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(409).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    let task = await TaskModel.create({ title, description });

    res.status(201).json({
      success: true,
      task,
      message: "Task created successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

//Get all the tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find({});
    res.status(200).json({
      success: true,
      tasks:tasks.reverse(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Get task by Id

export const getTaskById = async (req, res) => {
  try {
    const task = await TaskModel.findById(req.params.id);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
  
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

//update Task

export const updateTask = async (req, res) => {

 try {
  const {id}=req.params;
  const {title,description}=req.body;
  const task=await TaskModel.findByIdAndUpdate(id,{
   title: title,description: description
  },{new:true});
  // if(title){
  //  task.title=title;


  // }

  // if(description){
  //  task.description=description;
  // }

  await task.save();

  res.status(200).json({success:true,
   message: 'Task updated successfully'
  })
 } catch (error) {
  console.log(error)
   res.status(500).json({success: false,
   message:error.message
   }
    )
  
 }
}

//updating task
export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const task = await TaskModel.findByIdAndUpdate(
      id,
      {
        status,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
     
      message: "Status updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Deleting task

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await TaskModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
