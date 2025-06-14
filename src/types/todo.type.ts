export interface TodoType {
  details: string;
  checked: boolean;
}

export interface TodoContext {
  todo: TodoType[] | undefined;
  setTodo: React.Dispatch<React.SetStateAction<TodoType[] | undefined>>;
}
