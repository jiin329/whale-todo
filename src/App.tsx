import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "reactstrap";

function App() {
  return (
    <div className="App">

      <Button color="primary" type="button">
          Button
      </Button>
      <Button className="btn-icon btn-3" color="primary" type="button">
          <span className="btn-inner--icon">
            <i className="ni ni-bag-17" />
          </span>
          <span className="btn-inner--text">With icon</span>
        </Button>
        <Button className="btn-icon btn-2" color="primary" type="button">
          <span className="btn-inner--icon">
            <i className="ni ni-atom" />
          </span>
        </Button>

    </div>
  );
}

export default App;
