import React, { useState, useEffect } from "react";
import './App.css';

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError)
  }, [login]);
  //above, the 'login' in box bracks is to enable us to call it whenever the value of 'login' changes

  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if(!data) return null;

  return (
    <div className="App">
      <h1>Username: {data.name}</h1>
      <p>{data.location}</p>
      <img src={data.avatar_url} alt={data.login} />
    </div>
  );

}

export default App;