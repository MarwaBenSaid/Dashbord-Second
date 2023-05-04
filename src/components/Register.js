// ProjectList.js

import React, { Component } from 'react';
import './Register.css';
import Login from './components/Login';

class Register extends Component {
  render() {
    return (
      <div className="register">
       <Login/>
      </div>
    );
  }
}

export default Register;
