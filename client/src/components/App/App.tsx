import { useEffect, useState, useMemo, Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'
import InputBlock from '../InputBlock/InputBlock'
import Todo from '../Todo/Todo'
import { INewTodo } from '../../../../server/intefaces/todo'
import { ICacheItemTodos } from './interface'
import { GET_ALL_TODOS } from '../../queries/todo'
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../../mutations/todo'
import { useQuery, useMutation } from '@apollo/client'
import Spin from '../Spin/Spin'
import {
  AppContainer,
  MainHeader,
  TodoContainer,
  WrapperForm,
  ButtonAddTask,
  Separator,
  SeparatorTodos,
  NoData,
} from './style'

import './App.css'

const App = () => {
  const { data, loading, error } = useQuery(GET_ALL_TODOS)
  const [newTodo, { error: addError }] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {
      const { todos } = cache.readQuery<any>({ query: GET_ALL_TODOS })

      cache.writeQuery({
        query: GET_ALL_TODOS,
        data: {
          todos: [...todos, addTodo],
        },
      })
    },
  })
  const [deleteTodo, { error: deleteError }] = useMutation(DELETE_TODO, {
    update(cache, { data: { deleteTodo } }) {
      cache.modify({
        fields: {
          todos(currentTodos = []) {
            return currentTodos.filter(
              (todo: ICacheItemTodos) => todo.__ref !== `Todo:${deleteTodo.id}`,
            )
          },
        },
      })
    },
  })
  const [completeTodo, { error: completeError }] = useMutation(COMPLETE_TODO)

  const [arrayTodos, setArrayTodos] = useState<INewTodo[]>([])
  const [titleTodo, setTitleTodo] = useState<string>('')
  const [descriptionTodo, setDescriptionTodo] = useState<string>('')

  const inputNewTodo = useMemo(() => {
    const input: INewTodo = {
      id: uuidv4(),
      title: titleTodo,
      completed: false,
    }

    if (descriptionTodo) {
      input.description = descriptionTodo
    }

    return input
  }, [titleTodo, descriptionTodo])

  const addTodo = () => {
    newTodo({
      variables: {
        input: inputNewTodo,
      },
    })
      .then(({ data }) => {
        setArrayTodos([...arrayTodos, data.addTodo])
        setTitleTodo('')
        setDescriptionTodo('')
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
  }

  const removeTodo = (id: string) => {
    deleteTodo({
      variables: {
        id,
      },
    })
      .then(({ data }) => {
        setArrayTodos(
          arrayTodos.filter((todo) => todo.id !== data.deleteTodo.id),
        )
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
  }

  const completedTodo = (id: string) => {
    try {
      completeTodo({
        variables: {
          id,
        },
      })
    } catch(err) {
      console.log('Error: ', err)
    }
  }

  useEffect(() => {
    if (!loading) {
      setArrayTodos(data.todos)
    }
  }, [data])

  if (loading) {
    return <Spin />
  }

  if (error || addError || deleteError || completeError) {
    return <h1>Что-то пошло не так...</h1>
  }

  return (
    <AppContainer>
      <MainHeader variant="h1">My todos</MainHeader>

      <TodoContainer maxWidth={false}>
        <WrapperForm>
          <InputBlock
            state={titleTodo}
            changerState={setTitleTodo}
            label="Name"
          />
          <InputBlock
            state={descriptionTodo}
            changerState={setDescriptionTodo}
            label="Description"
          />
          <ButtonAddTask
            disabled={!Boolean(titleTodo)}
            onClick={addTodo}
            variant="contained"
          >
            Add Task
          </ButtonAddTask>
        </WrapperForm>
      </TodoContainer>

      <Separator />

      <TodoContainer maxWidth={false}>
        {arrayTodos.length > 0 ? (
          arrayTodos.map((todo, index) => {
            return (
              <Fragment key={todo.id}>
                <Todo
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  completed={todo.completed}
                  removeTodo={removeTodo}
                  completeTodo={completedTodo}
                />
                {index !== arrayTodos.length - 1 && <SeparatorTodos />}
              </Fragment>
            )
          })
        ) : (
          <NoData>Нет дел</NoData>
        )}
      </TodoContainer>
    </AppContainer>
  )
}

export default App
