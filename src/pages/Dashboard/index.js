import React, { useState, useMemo, useEffect } from 'react'
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  parseISO
} from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import pt from 'date-fns/locale/pt'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import api from '~/services/api'
import { Container, Time } from './styles'

const RANGE_HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

const Dashboard = () => {
  const [schedule, setSchedule] = useState([])
  const [date, setDate] = useState(new Date())

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  )

  useEffect(() => {
    const loadSchedule = async () => {
      const response = await api.get('/schedule', { params: { date } })
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

      const data = RANGE_HOURS.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0)
        const compareDate = utcToZonedTime(checkDate, timeZone)

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(appointment =>
            parseISO(appointment.date).toLocaleString() === compareDate.toLocaleString()
          )
        }
      })

      setSchedule(data)
    }

    loadSchedule()
  }, [date])

  const handlePrevDay = () => setDate(subDays(date, 1))

  const handleNextDay = () => setDate(addDays(date, 1))

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>

        <strong>{dateFormatted}</strong>

        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        {schedule.map(scheduleTime => (
          <Time
            key={scheduleTime.time}
            past={scheduleTime.past}
            available={!scheduleTime.appointment}
          >
            <strong>{scheduleTime.time}</strong>
            <strong>{scheduleTime.past}</strong>
            <span>
              {scheduleTime.appointment ? scheduleTime.appointment.user.name : 'Open'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  )
}

export default Dashboard
