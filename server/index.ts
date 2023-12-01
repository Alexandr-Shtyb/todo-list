import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { schema } from './graphql/schema.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import resolvers from './graphql/Resolvers.js'

const app = express()
app.use(cors())

dotenv.config()

const db = `${process.env.MONGODB_URI}`

mongoose
  .connect(db)
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err))

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: resolvers,
  }),
)

app.listen(`${process.env.PORT}`, () => console.log(`server started on port ${process.env.PORT}`))
