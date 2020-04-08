import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Icon } from 'semantic-ui-react'
import { Link, Menu, Item } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Menu>
       <Menu.Item as={Link} to="/home">
        Home
       </Menu.Item>
        </Menu>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Hello Wold!!!</p>
        <h1> I'm Cailenys</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button size="small" color="green">
        <Icon name="download" />
           Download
        </Button>
      </header>
    </div>
  );
}

export default App;
