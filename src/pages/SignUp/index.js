import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import logo from '~/assets/logo.svg'

const SignUp = () => {
  const handleSubmit = (data) => {
    console.tron.log(data)
  }

  return <>
    <img src={logo} alt="Study Scheduling"/>

    <h2>Create Account</h2>

    <Form onSubmit={handleSubmit}>
      <Input name="name" type="text " placeholder="Name" />
      <Input name="email" type="email" placeholder="E-mail" />
      <Input name="password" type="password" placeholder="Password" />
      <Input name="confirm" type="password" placeholder="Confirm password" />

      <button type="submit">Create account</button>
      <Link to="/">Back to Login</Link>
    </Form>
  </>
}

export default SignUp
