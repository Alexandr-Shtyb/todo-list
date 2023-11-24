import styled from '@emotion/styled'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

export const AppContainer = styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #4e4e4e;
  border-radius: 30px;
`

export const TodoContainer = styled(Container)`
  max-width: 800px;
  margin: 0 auto;
  background-color: #b1b1b1;
  padding: 15px 0;
`

export const MainHeader = styled(Typography)`
  display: flex;
  justify-content: center;
  font-weight: 900;
  font-size: 36px;
  color: #fff;
  padding-top: 20px;
  margin-bottom: 20px;
`

export const WrapperForm = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`

export const ButtonAddTask = styled(Button)`
  background-color: #ffa500;
  border-radius: 15px;

  &:hover {
    background-color: #ecb653;
  }
`

export const Separator = styled(Divider)`
  margin-bottom: 20px;
  border-style: none;
`
