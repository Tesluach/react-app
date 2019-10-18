import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1>TodoList</h1>
        <Link style={setIt} to="/">
          Home
        </Link>{' '}
        |{' '}
        <Link style={setIt} to="/about">
          About Us
        </Link>
      </header>
    );
  }
}
const headerStyle = {
  background: '#000',
  padding: '20px',
  color: '#ddd',
  textAlign: 'center'
};
const setIt = {
  color: '#ddd'
};

export default Header;
