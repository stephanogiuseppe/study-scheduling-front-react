import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import logo from '~/assets/logo.svg'

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
})

const SignIn = () => {
  const handleSubmit = (data) => {
    console.tron.log(data)
  }

  return <>
    <img src={logo} alt="Study Scheduling"/>

    <h2>Login</h2>

    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="E-mail" />
      <Input name="password" type="password" placeholder="Password" />

      <button type="submit">Enter</button>
      <Link to="/register">Create account</Link>
    </Form>
  </>
}

export default SignIn
