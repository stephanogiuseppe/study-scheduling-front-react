import React from 'react'
import { useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'

import { Container } from './styles'

const Profile = () => {
  const profile = useSelector(state => state.user.profile)

  const handleSubmit = () => {}

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
