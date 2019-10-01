import React, { Component } from 'react';
import './todolist.css';
import classNames from 'classnames';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

export default class Todolist extends Component {
    render() {
      const { item, onClick } = this.props;
      let url = checkImg;
      if (item.isComplete){
          url = checkCompleteImg ;
      }
      return (
          <div onClick={onClick} 
               className={classNames('TodoList', {
                   "TodoList-complete" : item.isComplete
          })}>
              <img src={url} width={32} heght={32} />
              <p>{item.title}</p>  
          </div>
    );
    }
}
