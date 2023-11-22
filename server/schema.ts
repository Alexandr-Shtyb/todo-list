import { buildSchema } from 'graphql'

const schema = buildSchema(`
    type Todo {
        id: ID!
        name: String!
        description: String
        completed: Boolean!
    }

    type Query {
        getAllTodos: [Todo]
    }

`)

export {schema};