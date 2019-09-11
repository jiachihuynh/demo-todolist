import React, { Component } from 'react';
import './todolist.css';

export default class Todolist extends Component {
    render() {
        return (
            <div>
              <div>{this.props.title}</div>  
            </div>
        );
    }
}
