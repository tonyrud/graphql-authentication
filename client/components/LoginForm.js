import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import AuthForm from './AuthForm'

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm />
      </div>
    )
  }
}

export default LoginForm
