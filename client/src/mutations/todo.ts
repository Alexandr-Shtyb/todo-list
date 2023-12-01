import { gql } from '@apollo/client'

export const ADD_TODO = gql`
  mutation AddTodo($input: TodoInput!) {
    addTodo(input: $input) {
      title
      description
      completed
    }
  }
`

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      title
      description
      completed
    }
  }
`
export const COMPLETE_TODO = gql`
  mutation CompleteTodo($id: ID!) {
    completeTodo(id: $id) {
      id
      title
      description
      completed
    }
  }
`
