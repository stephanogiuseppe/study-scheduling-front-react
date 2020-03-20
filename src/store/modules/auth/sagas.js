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

export default all([
  takeLatest('auth/SIGN_IN_REQUEST', signIn)
])
