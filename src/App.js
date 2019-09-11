import React, { Component } from 'react';
import './App.css';
import Todolist from './components/todolist';

export default class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      'Watching TV',
      'Go to cinema',
      'Reading book'
    ];
  }
  render() {
    return (
      <div className="App">
        {
          this.todoItems.map((item,index) => 
          <Todolist key={index} title={item} />)
        }
      </div>
    );
  }
}

