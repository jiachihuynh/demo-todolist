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
          <div  
               className={classNames('TodoList', {
                   "TodoList-complete" : item.isComplete
          })}>
              <img 
                src={url} 
                width={32} 
                height={32}
                onClick={onClick}
                alt="nothing" 
              />
              <p>{item.title}</p>  
          </div>
    );
    }
}
