import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { Todo, UpdateTodoFunction } from "../types/types";

interface Props {
  todo: Todo;
  onUpdate: UpdateTodoFunction;
}

export default function TodoItem({ todo, onUpdate }: Props) {
  const [isEditing, setIsEditing] = useState(true);
  const [editValue, setEditValue] = useState(todo.text);
  const [isNewTodo, setIsNewTodo] = useState(false);

  useEffect(() => {
    if (todo.text === "") setIsNewTodo(true);
  }, [todo]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleUpdate();
    }
  };

  const handleBlur = () => {
    handleUpdate();
  };

  const handleUpdate = () => {
    if (!isNewTodo && editValue === "") {
      setEditValue(todo.text);
      onUpdate(todo.id, todo.text);
    } else {
      onUpdate(todo.id, editValue);
    }
    setIsNewTodo(false);
    setIsEditing(false);
  };

  return (
    <div style={{ cursor: "pointer" }} onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <div>
          <input
            type="text"
            className="form-control-alternative"
            value={editValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            style={{ width: "85%" }}
            placeholder="내용을 입력하세요."
            autoFocus
          />
          <button
            type="button"
            rel="tooltip"
            className="btn btn-success btn-sm m-1"
            data-original-title="확인"
            title=""
            onClick={handleUpdate}
          >
            확인
          </button>
        </div>
      ) : (
        <span>{todo.text}</span>
      )}
    </div>
  );
}
