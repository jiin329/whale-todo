import React, { useEffect } from "react";
// import "App.css";

export default function Header() {
  return (
    <div className="header">
      <div className="date">{new Date().toLocaleDateString()}</div>
    </div>
  );
}
