import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { Todo, UpdateTodoFunction } from "../types/types";

interface Props {
  todo: Todo;
  onUpdate: UpdateTodoFunction;
}

export default function TodoItem({ todo, onUpdate }: Props) {
  const [isEditing, setIsEditing] = useState(true);
  const [editValue, setEditValue] = useState(todo.text);

  useEffect(() => {
    setEditValue(todo.text);
  }, [todo]);

  const handleOnClick = (checkYn: boolean) => {
    if (checkYn) return;
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
    onUpdate(todo.id, editValue);
    setIsEditing(false);
  };

  return (
    <div
      style={{ cursor: todo.completed ? "default" : "pointer" }}
      onClick={() => handleOnClick(todo.completed)}
    >
      {isEditing ? (
        <div>
          <input
            type="text"
            className="form-control-alternative"
            value={editValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            style={{ width: "80%" }}
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
        <span>{todo.completed ? <del>{todo.text}</del> : todo.text}</span>
      )}
    </div>
  );
}
