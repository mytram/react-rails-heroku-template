import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

type Version = {
  version: string;
  name: string;
};

function App() {
  const [version, setVersion] = useState<Version>();

  useEffect(() => {
    fetch("/api/versions/0", {
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then((payload: { data: Version }) => setVersion(payload.data));
  }, []);

  if (!version) {
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Version: {version.version}</p>
        <p>Name: {version.name}</p>

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
