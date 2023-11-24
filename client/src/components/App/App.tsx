import React from 'react'
import InputBlock from '../InputBlock/InputBlock'
import Todo from '../Todo/Todo'
import {
  AppContainer,
  MainHeader,
  TodoContainer,
  WrapperForm,
  ButtonAddTask,
  Separator,
} from './style'

import './App.css'

const App = () => {
  return (
    <AppContainer>
      <MainHeader variant="h1">My todos</MainHeader>

      <TodoContainer maxWidth={false}>
        <WrapperForm>
          <InputBlock label="Name" />
          <InputBlock label="Description" />
          <ButtonAddTask variant="contained">Add Task</ButtonAddTask>
        </WrapperForm>
      </TodoContainer>

      <Separator />

      <TodoContainer maxWidth={false}>
        <Todo title="Buy milk" description="I need milk" />
      </TodoContainer>
    </AppContainer>
  )
}

export default App
