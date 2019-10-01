import React, { Component } from 'react';
import './App.css';
import Todolist from './components/todolist';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todoItems:  [
        { title: 'Watching TV', isComplete: true },
        { title: 'Go to cinema', isComplete: false },
        { title: 'Reading book', isComplete: true }
      ]
    };
  }

  onItemClicked (item) {
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0,index),
          {
            ...item,
            isComplete: !item.isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }


  render() {
    const {todoItems} = this.state;
      return (
        <div className="App">
          {todoItems.length && todoItems.map((item,index) => 
            <Todolist 
              key={index} 
              item={item} 
              onClick={() => this.onItemClicked(item)} />)
          }
        </div>
      );
    }
}

