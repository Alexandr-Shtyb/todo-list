import { gql } from '@apollo/client'

export const GET_ALL_TODOS = gql`
  query AllTodos {
    todos {
      id
      title
      description
      completed
    }
  }
`
