import React, { ChangeEvent, useState } from "react";
import { Todo, UpdateTodoFunction } from "../types/types";

interface Props {
  todo: Todo;
  onUpdate: UpdateTodoFunction;
}

export default function TodoItem({ todo, onUpdate }: Props) {
  const [isEditing, setIsEditing] = useState(true);
  const [editValue, setEditValue] = useState(todo.text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdate(todo.id, editValue); // 상위 컴포넌트에 업데이트 사실을 알림
  };

  // isEditing 상태에 따라 input 또는 span을 렌더링
  return isEditing ? (
    <input
      type="text"
      value={editValue}
      onChange={handleChange}
      onBlur={handleBlur}
      autoFocus
    />
  ) : (
    <span onDoubleClick={handleDoubleClick}>{todo.text}</span>
  );
}
