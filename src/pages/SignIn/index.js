import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { signInRequest } from '~/store/modules/auth/actions'
import logo from '~/assets/logo.svg'

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
})

const SignIn = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  const handleSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password))
  }

  const getEnterButtonMessage = (loading) => loading ? 'Loading...' : 'Enter'

  return <>
    <img src={logo} alt="Study Scheduling"/>

    <h2>Login</h2>

    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="E-mail" />
      <Input name="password" type="password" placeholder="Password" />

      <button type="submit">{getEnterButtonMessage(loading)}</button>
      <Link to="/register">Create account</Link>
    </Form>
  </>
}

export default SignIn
