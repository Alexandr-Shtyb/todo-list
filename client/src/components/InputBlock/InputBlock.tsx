import { FC } from 'react'
import { IInputBlock } from './interface'
import { InputTodo, WrapperInputBlock, InputLabel } from './style'

const InputBlock: FC<IInputBlock> = ({ label, state, changerState }) => {
  return (
    <WrapperInputBlock>
      <InputLabel>{label}</InputLabel>
      <InputTodo
        value={state}
        onChange={(e) => changerState(e.target.value)}
        disableUnderline
      />
    </WrapperInputBlock>
  )
}

export default InputBlock
