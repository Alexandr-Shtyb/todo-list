import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  completed: {
    type: Boolean,
    required: true,
  },
})

export default mongoose.model('Todo', todoSchema)
