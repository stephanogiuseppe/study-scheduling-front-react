import React, { useState, useEffect, useMemo } from 'react'
import { MdNotifications } from 'react-icons/md'
import { parseISO, formatDistance } from 'date-fns'
import pt from 'date-fns/locale/pt'

import api from '~/services/api'

import { Container, Badge, Notifications, Scroll, Notification } from './styles'

const HeaderNotifications = () => {
  const [visible, setVisible] = useState(false)
  const [notifications, setNotifications] = useState([])

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  )

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('/notifications')

      const notifications = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        )
      }))

      setNotifications(notifications)
    }

    loadNotifications()
  }, [])

  const handleToggleVisible = () => setVisible(!visible)

  async function handleMarkRead(id) {
    await api.put(`notifications/${id}`)

    const updatedNotifications = notifications.map(notification =>
      notification._id === id
        ? { ...notification, read: true }
        : notification
    )

    setNotifications(updatedNotifications)
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#333" size={20} />
      </Badge>

      <Notifications visible={visible}>
        <Scroll>
          {
            notifications.map(notification => (
              <Notification key={notification._id} unread={!notification.read}>
                <p>{notification.content}</p>
                <time>{notifications.timeDistance}</time>

                {!notification.read && (
                  <button
                    type="button"
                    onClick={() => handleMarkRead(notification._id)}
                  >
                    Mark read
                  </button>
                )}
              </Notification>
            ))
          }
        </Scroll>
      </Notifications>
    </Container>
  )
}

export default HeaderNotifications
