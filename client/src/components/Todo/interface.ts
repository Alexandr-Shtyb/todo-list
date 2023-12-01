import { ObjectId } from 'mongoose'

export interface ITodoProps {
  id: ObjectId
  title: string
  description?: string
  completed: boolean
  removeTodo: (id: ObjectId) => void
  completeTodo: (id: ObjectId) => void
}

export interface ICustomButton {
  completed?: boolean
}
