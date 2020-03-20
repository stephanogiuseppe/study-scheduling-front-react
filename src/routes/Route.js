import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import AuthLayout from '~/pages/_layouts/auth'
import DefaultLayout from '~/pages/_layouts/default'
import store from '~/store'

const renderComponent = (Component, signed, props) => {
  const Layout = signed ? DefaultLayout : AuthLayout

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  )
}

const RouteWrapper = ({
  component: Component,
  isPrivate,
  ...args
}) => {
  const { signed } = store.getState().auth

  if (isPrivate && !signed) {
    return <Redirect to="/" />
  }

  if (!isPrivate && signed) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Route {...args}
      render={props => renderComponent(Component, signed, props)}
    />
  )
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
  isPrivate: false
}

export default RouteWrapper
