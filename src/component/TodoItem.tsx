import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { Todo, UpdateTodoFunction } from "../types/types";
import Alerts from "./Alerts";

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

  const [isOpen, setIsOpen] = useState(true);

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
      setIsEditing(false);
      setEditValue(todo.text);
      onUpdate(todo.id, todo.text);
    } else {
      setIsEditing(false);
      onUpdate(todo.id, editValue); // 상위 컴포넌트에 업데이트 사실을 알림
    }
    setIsNewTodo(false);
    setIsEditing(false);
  };

  // isEditing 상태에 따라 input 또는 span을 렌더링
  return (
    <div style={{ cursor: "pointer" }} onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          style={{ width: "100%" }}
          autoFocus
        />
      ) : (
        <span>{todo.text}</span>
      )}
    </div>
  );
}
