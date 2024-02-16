import React, { useState } from "react";
import { Alert } from "reactstrap";

export default function Alerts(isOpen: any) {
  return (
    isOpen && (
      <Alert color="warning">
        <span className="alert-inner--icon">
          <i className="ni ni-like-2" />
        </span>{" "}
        <span className="alert-inner--text">
          <strong>경고!</strong> This is a warning alert—check it out that has
          an icon too!
        </span>
      </Alert>
    )
  );
}
