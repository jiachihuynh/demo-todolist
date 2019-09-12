import React, { Component } from 'react';
import './todolist.css';

export default class Todolist extends Component {
    render() {
      const { item } = this.props;
      let className = "TodoList";
      if (item.isComplete) {
          className += " TodoList-complete";
      }
      return (
          <div className={className}>
              <div>{this.props.item.title}</div>  
          </div>
    );
    }
}
