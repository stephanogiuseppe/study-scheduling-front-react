import React from 'react'
import { Link } from 'react-router-dom'

import logo from '~/assets/logo.svg'

const SignIn = () => {
  return <>
    <img src={logo} alt="Study Scheduling"/>

    <h2>Login</h2>

    <form>
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Password" />

      <button type="submit">Enter</button>
      <Link to="/register">Create account</Link>
    </form>
  </>
}

export default SignIn
