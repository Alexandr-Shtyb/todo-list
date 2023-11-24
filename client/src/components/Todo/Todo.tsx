import { FC } from 'react'
import { ITodo } from './interface'

import {
  WrapperTodo,
  WrapperAboutTodoBlock,
  Title,
  Description,
  WrapperButtons,
  CustomButton,
} from './style'

const Todo: FC<ITodo> = ({ title, description }) => {
  return (
    <WrapperTodo>
      <WrapperAboutTodoBlock>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </WrapperAboutTodoBlock>

      <WrapperButtons>
        <CustomButton variant="outlined" completed>
          Complete
        </CustomButton>
        <CustomButton variant="outlined">Delete</CustomButton>
      </WrapperButtons>
    </WrapperTodo>
  )
}

export default Todo
