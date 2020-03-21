import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '~/assets/logo-green.svg'
import { Container, Content, Profile } from './styles'
import Notifications from '~/components/Notifications'

const Header = () => {
  const profile = useSelector(state => state.user.profile)

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Study Scheduling"/>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src={profile.avatar.url || 'https://api.adorable.io/avatars/50/abott@adorable.png'}
              alt="Profile"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}

export default Header
