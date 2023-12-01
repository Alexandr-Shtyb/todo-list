import { FC } from 'react'
import { ITodoProps } from './interface'

import {
  WrapperTodo,
  WrapperAboutTodoBlock,
  Title,
  Description,
  WrapperButtons,
  CustomButton,
  TitleCompletedTodo,
  DescriptionCompletedTodo,
} from './style'

const Todo: FC<ITodoProps> = ({
  id,
  title,
  description,
  completed,
  removeTodo,
  completeTodo,
}) => {
  return (
    <WrapperTodo>
      <WrapperAboutTodoBlock>
        {!completed ? (
          <Title>{title}</Title>
        ) : (
          <TitleCompletedTodo>{title}</TitleCompletedTodo>
        )}
        {!completed ? (
          <Description>{description}</Description>
        ) : (
          <DescriptionCompletedTodo>{description}</DescriptionCompletedTodo>
        )}
      </WrapperAboutTodoBlock>

      <WrapperButtons>
        {!completed && (
          <CustomButton
            variant="outlined"
            completed
            onClick={() => completeTodo(id)}
          >
            Complete
          </CustomButton>
        )}

        <CustomButton onClick={() => removeTodo(id)} variant="outlined">
          Delete
        </CustomButton>
      </WrapperButtons>
    </WrapperTodo>
  )
}

export default Todo
