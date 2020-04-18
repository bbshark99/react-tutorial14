import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  function increase(number, func) {
    setTimeout(() => {
      const result = number + 10;
      if (func) {
        func(result);
      }
    }, 1000);
  }

  increase(0, (result) => {
    console.log("increase: ", result);
  });

  function job_thread(number, callback) {
    setTimeout(() => {
      const result = number + 10;
      if (callback) {
        callback(result);
      }
    }, 1000);
  }

  console.log("Job Start");
  job_thread(0, (result) => {
    console.log("Job1:", result);
    job_thread(result, (result) => {
      console.log("Job2:", result);
      job_thread(result, (result) => {
        console.log("Job3:", result);
        job_thread(result, (result) => {
          console.log("Job4:", result);
          console.log("Job completed");
        });
      });
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
