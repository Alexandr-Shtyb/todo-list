import { buildSchema } from 'graphql'

const schema = buildSchema(`
    type Todo {
        id: ID
        title: String
        description: String
        completed: Boolean
    }

    input TodoInput {
        id: ID! 
        title: String!
        description: String
        completed: Boolean!
    }

    type Query {
        todos: [Todo]
    }

    type Mutation {
       addTodo(input: TodoInput!): Todo
       deleteTodo(id: ID!): Todo
       completeTodo(id: ID!): Todo
    }
`)

export { schema }
