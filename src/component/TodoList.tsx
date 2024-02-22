import React, { useEffect, useState } from "react";
import TodoTable from "./TodoTable";
import { Todo } from "../types/types";
import Alerts from "./Alerts";
// import "App.css";

export default function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [deleteYn, setDeleteYn] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [alertMsg, setAlertMsg] = useState<string>("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todoList");
    if (storedTodos !== null) {
      setTodoList(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = () => {
    if (deleteYn) setDeleteYn(false);
    if (todoList.length === 30) {
      setAlertMsg("할일은 30개 이상 만들 수 없습니다.");
      return setIsOpen(true);
    }
    onUpdateTodo(todoList.length, "");
  };

  const removeTodo = () => {
    if (todoList.length === 0) {
      setAlertMsg("삭제 할 항목이 없습니다.");
      return setIsOpen(true);
    }
    setDeleteYn(true);
  };

  const onUpdateTodo = (id: number, newText: string) => {
    //신규
    if (id === todoList.length) {
      const newTodos = [
        ...todoList,
        { id: todoList.length, text: newText, completed: false },
      ];
      return setTodoList(newTodos);
    }
    //삭제
    if (newText === "") {
      const deleteTodos = todoList
        .filter((todo) => todo.id !== id)
        .map((todo, index) => ({
          ...todo,
          id: index,
        }));
      if (deleteTodos.length === 0) setDeleteYn(false);
      return setTodoList(deleteTodos);
    }
    //수정
    const updateTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodoList(updateTodos);
  };

  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updateTodos = todoList.map((todo) => {
      if (todo.id === parseInt(e.target.id)) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(updateTodos);
  };

  return (
    <div className="body-contents">
      <div>
        <button
          className="btn btn-outline-default btn-round"
          type="button"
          onClick={() => addTodo()}
        >
          <span className="btn-inner--icon">
            <i className="fa fa-plus m-1" />
          </span>
          <span className="btn-inner--text">추가하기</span>
        </button>
        {deleteYn ? (
          <button
            className="btn btn-success"
            type="button"
            onClick={() => setDeleteYn(false)}
          >
            <span className="btn-inner--icon">
              <i className="ni ni-check-bold m-1" />
            </span>
            <span className="btn-inner--text">완료하기</span>
          </button>
        ) : (
          <button
            className="btn btn-outline-danger"
            type="button"
            onClick={removeTodo}
          >
            <span className="btn-inner--icon">
              <i className="fa fa-trash m-1" />
            </span>
            <span className="btn-inner--text">삭제하기</span>
          </button>
        )}
      </div>
      <div className="m-3">
        <TodoTable
          todoList={todoList}
          deleteYn={deleteYn}
          onUpdate={onUpdateTodo}
          checkboxHandler={checkboxHandler}
        />
      </div>
      <Alerts isOpen={isOpen} setIsOpen={setIsOpen} msg={alertMsg} />
    </div>
  );
}
