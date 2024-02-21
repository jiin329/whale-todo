export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface Alearts {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  msg: string;
}

export type UpdateTodoFunction = (id: number, newText: string) => void;
export type CheckboxHandlerFunction = (
  e: React.ChangeEvent<HTMLInputElement>
) => void;
