import {
  CheckboxHandlerFunction,
  Todo,
  UpdateTodoFunction,
} from "../types/types";
import { Col, Container, Row } from "reactstrap";
import TodoItem from "./TodoItem";

interface Props {
  todoList: Todo[];
  deleteYn: boolean;
  onUpdate: UpdateTodoFunction;
  checkboxHandler: CheckboxHandlerFunction;
}

export default function TodoTable({
  todoList,
  deleteYn,
  onUpdate,
  checkboxHandler,
}: Props) {
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
                id={todo.id.toString()}
                checked={todo.completed}
                onChange={(e) => checkboxHandler(e)}
              />
              <label
                className="custom-control-label"
                htmlFor={todo.id.toString()}
              />
            </div>
          </Col>
          <Col
            className="col text-left"
            style={{ pointerEvents: deleteYn ? "none" : "auto" }}
          >
            <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} />
          </Col>
          <Col className="col-1 text-right" hidden={!deleteYn}>
            <button
              type="button"
              rel="tooltip"
              className="btn btn-danger btn-icon btn-sm "
              onClick={() => onRemoveTodo(todo.id)}
              data-original-title=""
              title=""
            >
              <i className="fa fa-times pt-1" />
            </button>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
