import React, { Component } from 'react';

class TodoItem extends Component {
  getStyles = () => {
    return {
      background: '#ccc',
      padding: '10px',
      borderBottom: '1px dotted #000',
      textDecoration: this.props.todos.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title } = this.props.todos;
    return (
      <div style={this.getStyles()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
          <button
            style={{ float: 'right' }}
            className={'btn btn-success m-2'}
            onClick={this.props.delTodo.bind(this, id)}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

export default TodoItem;
