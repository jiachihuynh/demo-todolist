import React, { Component } from 'react';
import './App.css';
import Todolist from './components/todolist';

export default class App extends Component {
  render() {
    return (
      <div className="App">
       <Todolist title="Hello" name="Jiachi!"/>
      </div>
    );
  }
}

