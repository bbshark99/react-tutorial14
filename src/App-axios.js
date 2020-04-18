import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        setData(response.data);
      });
  };
  function replacer(key, value) {
    console.log(typeof value);
    if (key === 'completed') {
      return undefined;
      //   return 'A';
    }
    return value;
  }
  return (
    <div>
      <div>
        <button onClick={onClick}>Download</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, replacer, 10)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
