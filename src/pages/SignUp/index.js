import React from 'react'
import { Link } from 'react-router-dom'

import logo from '~/assets/logo.svg'

const SignUp = () => {
  return <>
    <img src={logo} alt="Study Scheduling"/>

    <h2>Create Account</h2>

    <form>
      <input type="text " placeholder="Name" />
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm password" />

      <button type="submit">Create account</button>
      <Link to="/">Back to Login</Link>
    </form>
  </>
}

export default SignUp
