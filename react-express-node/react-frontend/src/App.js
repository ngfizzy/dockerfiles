
import React, {useState, useEffect} from 'react';
import './App.css';

const url = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8080/api/';

function App() {
  const [greetings, setGreetings] = useState('');


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setGreetings(res.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>{greetings}</h1>
    </div>
  );
}

export default App;
