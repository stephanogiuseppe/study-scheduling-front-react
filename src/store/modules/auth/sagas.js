import { all, takeLatest, call, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '~/services/api'
import history from '~/services/history'
import { signInSuccess, signFailure } from './actions'

function * userSignIn(email, password) {
  const response = yield call(api.post, 'auth', { email, password })
  const { token, user } = response.data

  if (!user.provider) {
    toast.error('User iisn\'t a provider')
    return
  }

  api.defaults.headers.Authorization = `Bearer ${token}`

  yield put(signInSuccess(token, user))

  history.push('/dashboard')
}

export function * signIn({ payload }) {
  try {
    yield userSignIn(payload.email, payload.password)
  } catch (error) {
    toast.error('Authentication failure. Check your credentials')
    yield put(signFailure())
  }
}

function * userSignUp({ name, email, password }) {
  yield call(api.post, 'users', {
    name,
    email,
    password,
    provider: true
  })

  history.push('/')
}

export function * signUp({ payload }) {
  try {
    yield userSignUp(payload)
    toast.success('Successfully registration')
  } catch (error) {
    toast.error('Register failure. Check your credentials')
    yield put(signFailure())
  }
}

export const setToken = ({ payload }) => {
  if (!payload) {
    return
  }

  const { token } = payload.auth

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export const signOut = () => {
  history.push('/')
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('auth/SIGN_IN_REQUEST', signIn),
  takeLatest('auth/SIGN_UP_REQUEST', signUp),
  takeLatest('auth/SIGN_OUT', signOut)
])
