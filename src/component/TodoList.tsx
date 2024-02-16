import React, { useEffect, useState } from "react";
import TodoTable from "./TodoTable";
import { Todo } from "../types/types";

export default function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [editYn, setEditYn] = useState<boolean>(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todoList");
    if (storedTodos !== null) {
      setTodoList(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    //todo::      todoList.filter((todo: Todo) => todo.text !== "")
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = () => {
    const newTodos = [
      ...todoList,
      { id: todoList.length, text: input, completed: false },
    ];
    setTodoList(newTodos);
  };

  const onUpdateTodo = (id: number, newText: string) => {
    if (newText === "") {
      const updatedTodos = todoList
        .filter((todo) => todo.id !== id)
        .map((todo, index) => ({
          ...todo,
          id: index,
        }));
      return setTodoList(updatedTodos);
    }
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodoList(updatedTodos);
  };

  return (
    <div>
      <div>
        <button
          className="btn btn-outline-default btn-round"
          type="button"
          onClick={addTodo}
        >
          <span className="btn-inner--icon">
            <i className="ni ni-fat-add" />
          </span>
          <span className="btn-inner--text">추가하기</span>
        </button>
        {editYn ? (
          <button
            className="btn btn-success"
            type="button"
            onClick={() => setEditYn(false)}
          >
            <span className="btn-inner--icon">
              <i className="ni ni-check-bold" />
            </span>
            <span className="btn-inner--text">완료하기</span>
          </button>
        ) : (
          <button
            className="btn btn-outline-danger"
            type="button"
            onClick={() => setEditYn(true)}
          >
            <span className="btn-inner--icon">
              <i className="ni ni-fat-remove" />
            </span>
            <span className="btn-inner--text">삭제하기</span>
          </button>
        )}
      </div>
      <div className="mt-3">
        <TodoTable
          todoList={todoList}
          editYn={editYn}
          onUpdate={onUpdateTodo}
        />
      </div>
    </div>
  );
}
