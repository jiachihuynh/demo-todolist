import React, { Component } from 'react';
import './App.css';
import Todolist from './components/todolist';
import tick from './img/tick.svg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "", 
      todoItems:  [
        { title: 'Watching TV', isComplete: true },
        { title: 'Go to cinema', isComplete: false },
        { title: 'Reading book', isComplete: true }
      ]
    };

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
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

  onKeyUp(e){
    if(e.keyCode === 13){
      let text = e.target.value;
      if(!text){return;}
      text = text.trim();
      if(!text){return;}
      this.setState({
        newItem:'',
        todoItems: [
          { title: text, isComplete: false},
          ...this.state.todoItems,
        ]
      })  
    }
  }
  
  onChange(e){
    this.setState({
      newItem: e.target.value
    })
  }

  render() {
    const {todoItems, newItem} = this.state;
      return (
        <div className="App">
          <div className="Header">
            <img src= {tick} width={32} height={32} alt="nothing"/>
            <input 
              type="text" 
              placeholder="Add new item here"
              value={newItem} 
              onChange={this.onChange}
              onKeyUp={this.onKeyUp} />
          </div>

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

