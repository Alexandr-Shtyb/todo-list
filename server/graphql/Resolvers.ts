import Todo from '../models/Todo.js'
import { INewTodo } from '../intefaces/todo.js'
import { ObjectId } from 'mongoose'

const resolvers = {
  todos: async () => {
    try {
      const todos = await Todo.find()
      return todos
    } catch (err) {
      throw new Error('Ошибка получения дел')
    }
  },
  addTodo: async ({ input }: { input: INewTodo }) => {
    try {
      const todo = new Todo(input)
      await todo.save()
      return todo
    } catch (err) {
      throw new Error('Не удалось создать дело')
    }
  },
  deleteTodo: async ({ id }: { id: ObjectId }) => {
    try {
      const todo = await Todo.findById(id)
      await Todo.deleteOne({ _id: id })
      return todo
    } catch (err) {
      throw new Error('Не удалось удалить дело')
    }
  },
  completeTodo: async ({ id }: { id: ObjectId }) => {
    try {
      const todo = await Todo.findById(id)
      await Todo.updateOne({ _id: id }, { $set: { completed: true } })
      return todo
    } catch (err) {
      throw new Error('Не удалось изменить состояние дела')
    }
  },
}

export default resolvers
