import { all, takeLatest, call, put } from 'redux-saga/effects'

import api from '~/services/api'
import history from '~/services/history'
import { signInSuccess } from './actions'

export function * signIn({ payload }) {
  const { email, password } = payload

  const response = yield call(api.post, 'auth', { email, password })

  const { token, user } = response.data

  if (!user.provider) {
    console.tron.error('Not provider')
    return
  }

  yield put(signInSuccess(token, user))

  history.push('/dashboard')
}

export default all([
  takeLatest('auth/SIGN_IN_REQUEST', signIn)
])
