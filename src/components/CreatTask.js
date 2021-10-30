import React, { Component } from 'react';

export default class CreatTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: '',
    };
  }
  handleChnage = (event) => {
    this.setState({ task: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={this.state.task}
          onChange={this.handleChnage}
          autoFocus
        />
        <button className="add" type="Submit">
          Add
        </button>
      </form>
    );
  }
}
