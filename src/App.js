import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';
import Header from './Components/Layout/Header';
import AddTodo from './Components/Layout/AddTodo';
import uuid from 'uuid';
// import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './Components/Pages/About';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Clean the rooms and the entire house!',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Take out the trash!',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Go out for a dinner with the wife!',
        completed: false
      }
    ]
  };

  delTodo = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
