import React, { useEffect } from "react";
// import "App.css";

export default function Header() {
  return (
    <div className="header">
      <img
        src={`${process.env.PUBLIC_URL}/logo/todolist-logo-default.png`}
        alt="logo"
        style={{ width: "200px", height: "auto" }}
      />
      <div className="date">{new Date().toLocaleDateString()}</div>
    </div>
  );
}
