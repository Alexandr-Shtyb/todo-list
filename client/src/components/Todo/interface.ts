export interface ITodo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  removeTodo: (id: string) => void
  completeTodo: (id: string) => void
}

export interface ICustomButton {
  completed?: boolean
}
