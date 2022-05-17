import React, { useState, useEffect } from "react";
import './App.css';

function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setData)
  }, []);

  if(data){
  return (
    <div className="App">
      <h1>Username: {data.name}</h1>
      <p>{data.location}</p>
      <img src={data.avatar_url} alt={data.login} />
    </div>
  );
  }

  return <div>No user available</div>;
}

export default App;
