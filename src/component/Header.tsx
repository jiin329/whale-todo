import React, { useEffect } from "react";
// import "App.css";

export default function Header() {
  return (
    <div className="header-contents">
      <img
        src={`${process.env.PUBLIC_URL}/logo/todolist-logo.png`}
        alt="logo"
        style={{ width: "200px", height: "auto" }}
      />
      <div className="date">
        <h6 className="text-dark">{new Date().toLocaleDateString()}</h6>
      </div>
    </div>
  );
}
