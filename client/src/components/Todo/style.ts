import styled from '@emotion/styled'
import Button from '@mui/material/Button'
import { ICustomButton } from './interface'

export const WrapperTodo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WrapperAboutTodoBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  margin-top: 0;
  font-weight: 700;
  font-size: 24px;
  color: #deceb1;
`

export const Description = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
`

export const WrapperButtons = styled.div`
  display: flex;
  gap: 15px;
`

export const CustomButton = styled(Button)<ICustomButton>`
  border: 1px solid #ffa500;
  color: ${(props) => (props.completed ? 'green' : 'red')};
  background-color: #fff;

  &:hover {
    background-color: #fff;
    border: 1px solid #ffa500;
  }
`

export const TitleCompletedTodo = styled(Title)`
  text-decoration: line-through;
  color: #4e4e4e;
`

export const DescriptionCompletedTodo = styled(Description)`
  text-decoration: line-through;
  color: #4e4e4e;
`
