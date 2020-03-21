import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'

import { updateProfileRequest } from '~/store/modules/user/actions'
import { Container } from './styles'

const Profile = () => {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.user.profile)

  const handleSubmit = (data) => {
    dispatch(updateProfileRequest(data))
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Name" />
        <Input type="email" name="email" placeholder="Email" />

        <hr/>

        <Input type="password" name="oldPassword" placeholder="Current password" />
        <Input type="password" name="password" placeholder="New password" />
        <Input type="password" name="confirmPassword" placeholder="Confirm new password" />

        <button type="submit">Update profile</button>
      </Form>

      <button type="button">Logout</button>
    </Container>

  )
}

export default Profile
