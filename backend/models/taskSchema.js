import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Incomplete", "Completed"],
    default: "Incomplete",
  },

},{timestamps: true});

export const  TaskModel = mongoose.model('Task', taskSchema);

