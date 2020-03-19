import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import logo from '~/assets/logo.svg'

const SignIn = () => {
  const handleSubmit = (data) => {
    console.tron.log(data)
  }

  return <>
    <img src={logo} alt="Study Scheduling"/>

    <h2>Login</h2>

    <Form onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="E-mail" />
      <Input name="password" type="password" placeholder="Password" />

      <button type="submit">Enter</button>
      <Link to="/register">Create account</Link>
    </Form>
  </>
}

export default SignIn
