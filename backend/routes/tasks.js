import express from "express";
import { createTask, deleteTask, getTaskById, getTasks, updateStatus, updateTask } from "../controllers/taskControllers.js";

const router=express.Router();



router.route("/createTask").post(createTask);

//get all task
router.route("/tasks").get(getTasks);

//get task by id
router.route("/tasks/:id").get(getTaskById);

//update status
router.route("/tasks/:id").put(updateStatus)

//update tasks
router.route("/update/task/:id").put(updateTask)

router.route("/tasks/:id").delete(deleteTask);



export default router;