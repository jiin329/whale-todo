import React from "react";
import TodoTable from "./TodoTable";

export default function todoList() {
  return (
    <div>
      <div>
        <button className="btn btn-outline-default btn-round" type="button">
          <span className="btn-inner--icon">
            <i className="ni ni-fat-add" />
          </span>
          <span className="btn-inner--text">추가하기</span>
        </button>
        <button className="btn btn-outline-danger" type="button">
          <span className="btn-inner--icon">
            <i className="ni ni-fat-remove" />
          </span>
          <span className="btn-inner--text">삭제하기</span>
        </button>
      </div>

      <div className="mt-3">
        <TodoTable />
      </div>
    </div>
  );
}
