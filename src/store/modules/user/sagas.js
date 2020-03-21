import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '~/services/api'
import { updateProfileSuccess, updateProfileFailure } from './actions'

function * userUpdateProfile({ name, email, avatar_id, ...args }) {
  const profile = Object.assign(
    { name, email, avatar_id },
    args.oldPassword ? args : {}
  )

  const response = yield call(api.put, 'users', profile)

  toast.success('Profile updated')

  yield put(updateProfileSuccess(response.data))
}

export function * updateProfile({ payload }) {
  try {
    yield userUpdateProfile(payload.data)
  } catch (error) {
    toast.error('Update error')
    yield put(updateProfileFailure())
  }
}

export default all([
  takeLatest('user/UPDATE_PROFILE_REQUEST', updateProfile)
])
