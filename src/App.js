import React, { Component } from 'react';
import './App.css';
import Todolist from './components/todolist';

export default class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'Watching TV', isComplete: true },
      { title: 'Go to cinema', isComplete: false },
      { title: 'Reading book', isComplete: true }
    ];
  }
  render() {
    return (
      <div className="App">
        {
          this.todoItems.map((item,index) => 
          <Todolist key={index} item={item} />)
        }
      </div>
    );
  }
}

