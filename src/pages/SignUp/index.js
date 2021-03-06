import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import logo from '~/assets/logo.svg'
import { signUpRequest } from '~/store/modules/auth/actions'

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Minimum 9 characters').required('Password is required'),
  confirm: Yup.string().min(6, 'Minimum 9 characters').required('Confirm password is required')
})

const SignUp = () => {
  const dispatch = useDispatch()

  const handleSubmit = ({ name, email, password }) => {
    dispatch(signUpRequest(name, email, password))
  }

  return <>
    <img src={logo} alt="Study Scheduling"/>

    <h2>Create Account</h2>

    <Form schema={schema} onSubmit={handleSubmit}>
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
