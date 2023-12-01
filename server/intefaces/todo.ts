import { ObjectId } from 'mongoose'

export interface ITodo {
  id: ObjectId
  title: string
  description?: string
  completed: boolean
}

export type INewTodo = Omit<ITodo, 'id'>
