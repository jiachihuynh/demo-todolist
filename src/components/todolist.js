import React, { Component } from 'react';

export default class Todolist extends Component {
    render() {
        return (
            <div>{this.props.title}</div>
            <h2>{this.props.name}</h2>
        );
    }
}
