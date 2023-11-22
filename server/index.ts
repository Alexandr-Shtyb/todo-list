import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { schema } from './schema.js'

const todos = [{id: 1, name: 'Buy milk', description: 'I need milk', completed: false}]

const app = express()
app.use(cors())

const root = {
    getAllTodos: () => {
        return todos
    }
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000, () => console.log('server started on port 5000'))