import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...args
}) {
  const signed = true

  if (isPrivate && !signed) {
    return <Redirect to="/" />
  }

  if (!isPrivate && signed) {
    return <Redirect to="/dashboard" />
  }

  return <Route {...args} component={Component} />
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
  isPrivate: false
}
