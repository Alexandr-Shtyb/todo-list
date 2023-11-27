import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { schema } from './schema.js'
import { INewTodo } from './intefaces/todo.js'

let todos: INewTodo[] = [
  { id: '1', title: 'Buy milk', description: 'I need milk', completed: false },
  { id: '2', title: 'Buy car', description: 'Red car', completed: true },
]

const app = express()
app.use(cors())

const root = {
  todos: () => {
    return todos
  },
  addTodo: ({ input }: { input: INewTodo }) => {
    const todo = input
    todos.push(todo)
    return todo
  },
  deleteTodo: ({ id }: { id: string }) => {
    const deletedTodo = todos.find((todo) => todo.id === id)
    todos = todos.filter((todo) => todo.id !== id)
    return deletedTodo
  },
  completeTodo: ({ id }: { id: string }) => {
    const completedTodo = todos.find((todo) => todo.id === id)
    const completedIndexTodo = todos.findIndex((todo) => todo.id === id)
    todos[completedIndexTodo].completed = true
    return completedTodo
  }
}

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  }),
)

app.listen(5000, () => console.log('server started on port 5000'))
