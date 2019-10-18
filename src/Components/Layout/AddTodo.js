import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: ''
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          placeholder="Add todo item..."
          style={{ flex: '10', padding: '5px', borderRadius: '10px' }}
          value={this.state.title}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <input
          type="submit"
          value="Submit"
          className={'btn btn-secondary m-2'}
          style={{ flex: 1 }}
        />
      </form>
    );
  }
}

export default AddTodo;
