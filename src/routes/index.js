import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'
import SignIn from '~/pages/SignIn'
import SignUp from '~/pages/SignUp'

import Dashboard from '~/pages/Dashboard'
import Profile from '~/pages/Profile'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate={true} />
      <Route path="/profile" component={Profile} isPrivate={true} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  )
}

export default Routes
