import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'

import { signOut } from '~/store/modules/auth/actions'
import { updateProfileRequest } from '~/store/modules/user/actions'
import Avatar from './Avatar'
import { Container } from './styles'

const Profile = () => {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.user.profile)

  const handleSubmit = (data) => {
    dispatch(updateProfileRequest(data))
  }

  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Avatar name="avatar_id" />

        <Input type="text" name="name" placeholder="Name" />
        <Input type="email" name="email" placeholder="Email" />

        <hr/>

        <Input type="password" name="oldPassword" placeholder="Current password" />
        <Input type="password" name="password" placeholder="New password" />
        <Input type="password" name="confirmPassword" placeholder="Confirm new password" />

        <button type="submit">Update profile</button>
      </Form>

      <button type="button" onClick={handleSignOut}>Logout</button>
    </Container>
  )
}

export default Profile
