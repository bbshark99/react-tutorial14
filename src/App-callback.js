import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Run Single Job
  function increase(number, func) {
    setTimeout(() => {
      const result = number + 10;
      if (func) {
        func(result);
      }
    }, 1000);
  }

  increase(0, (result) => {
    console.log('increase: ', result);
  });

  // run 4 jobs
  function job_thread(number, callback) {
    setTimeout(() => {
      const result = number + 10;
      if (callback) {
        callback(result);
      }
    }, 1000);
  }

  console.log('Job Start');
  job_thread(0, (result) => {
    console.log('Job1:', result);
    job_thread(result, (result) => {
      console.log('Job2:', result);
      job_thread(result, (result) => {
        console.log('Job3:', result);
        job_thread(result, (result) => {
          console.log('Job4:', result);
          console.log('Job completed');
        });
      });
    });
  });

  // Promise
  function job_runner(number) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = number + 10;
        if (result > 50) {
          const e = new Error('NumberTooBig');
          return reject(e);
        }
        resolve(result);
      }, 1000);
    });
    return promise;
  }

  job_runner(0)
    .then((number) => {
      console.log('Job Runner1:', number);
      return job_runner(number);
    })
    .then((number) => {
      console.log('Job Runner2:', number);
      return job_runner(number);
    })
    .then((number) => {
      console.log('Job Runner3:', number);
      return job_runner(number);
    })
    .then((number) => {
      console.log('Job Runner4:', number);
      return job_runner(number);
    })
    .then((number) => {
      console.log('Job Runner5:', number);
      return job_runner(number);
    })
    .catch((e) => {
      console.log('Job Runner:Error:', e);
    });

  // Async/Await
  function increment(number) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = number + 10;
        if (result > 50) {
          const e = new Error('NumberTooBig');
          return reject(e);
        }
        resolve(result);
      }, 1000);
    });
    return promise;
  }

  async function runTasks() {
    try {
      let result = await increment(0);
      console.log('Asyncd Job1:', result);
      result = await increment(result);
      console.log('Asyncd Job2:', result);
      result = await increment(result);
      console.log('Asyncd Job3:', result);
      result = await increment(result);
      console.log('Asyncd Job4:', result);
      result = await increment(result);
      console.log('Asyncd Job5:', result);
      result = await increment(result);
      console.log('Asyncd Job6:', result);
    } catch (e) {
      console.log('Asynced Job Error:', e);
    }
  }
  runTasks();
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
