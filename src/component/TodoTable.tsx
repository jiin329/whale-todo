import React, { useState } from "react";
import { Todo, UpdateTodoFunction } from "../types/types";
import { Col, Container, Row } from "reactstrap";
import TodoItem from "./TodoItem";

interface Props {
  todoList: Todo[];
  editYn: boolean;
  onUpdate: UpdateTodoFunction;
}

export default function TodoTable({ todoList, editYn, onUpdate }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (todoList.length === 0) {
    return <div>할 일을 추가해주세요.</div>;
  }

  const onRemoveTodo = (id: number) => {
    onUpdate(id, "");
  };

  return (
    <Container>
      {todoList.map((todo: Todo, index) => (
        <Row key={index}>
          <Col className="col-1">
            <div className="custom-control custom-checkbox mb-3">
              <input
                className="custom-control-input"
                type="checkbox"
                id="checkYn"
              />
              <label className="custom-control-label" htmlFor="checkYn" />
            </div>
          </Col>
          <Col className="col text-left">
            <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} />
          </Col>
          <Col className="col-1 text-right" hidden={!editYn}>
            <button
              type="button"
              rel="tooltip"
              className="btn btn-danger btn-icon btn-sm "
              onClick={() => onRemoveTodo(todo.id)}
              data-original-title=""
              title=""
            >
              <i className="ni ni-fat-remove pt-1" />
            </button>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
