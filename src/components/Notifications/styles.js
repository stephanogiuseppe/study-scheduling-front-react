import styled, { css } from 'styled-components'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { darken } from 'polished'

export const Container = styled.div`
  position: relative;
`

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props => props.hasUnread && css`
    &::after {
      position: absolute;
      right: 0;
      top: 0;
      width: 8px;
      height: 8px;
      background: #A52A2A;
      content: '';
      border-radius: 50%;
    }
  `}
`

export const Notifications = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: #A52A2A70;
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => props.visible ? 'block' : 'none'};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #A52A2A70;
  }
`

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`

export const Notification = styled.div`
  color: #FFF;

  & + div {
    margin: 15px 0 0 0;
    padding: 15px 0 0 0;
    border-top: 1px solid #FFFFFF33
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    font-size: 12px;
    opacity: 0.6;
    margin: 0 0 5px 0;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${darken(0.2, '#FFF')};
  }

  ${props => props.unread && css`
    &::after {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      background: #FFF;
      border-radius: 50%;
      margin: 0 0 0 10px;
    }
  `}
`
