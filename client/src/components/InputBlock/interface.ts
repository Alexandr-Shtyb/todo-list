import { Dispatch, SetStateAction } from 'react'

export interface IInputBlock {
  label: string
  state: string
  changerState: Dispatch<SetStateAction<string>>
}
