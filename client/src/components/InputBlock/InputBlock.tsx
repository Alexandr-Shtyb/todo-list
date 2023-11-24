import { FC } from 'react'
import { IInputBlock } from './interface'
import { InputTodo, WrapperInputBlock, InputLabel } from './style'

const InputBlock: FC<IInputBlock> = ({ label }) => {
  return (
    <WrapperInputBlock>
      <InputLabel>{label}</InputLabel>
      <InputTodo disableUnderline />
    </WrapperInputBlock>
  )
}

export default InputBlock
