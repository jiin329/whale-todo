export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type UpdateTodoFunction = (id: number, newText: string) => void;
