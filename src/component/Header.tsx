import React, { useEffect } from "react";
// import "App.css";

export default function header() {
  return (
    <div className="header">
      <div className="date">{new Date().toLocaleDateString()}</div>
    </div>
  );
}
