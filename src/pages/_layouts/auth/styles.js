import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #2e2e2e, #4e4e4e);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  h2 {
    margin: 16px 0;
    color: #FFF;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #FFF;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.8)
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      background: #feadad;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#feadad')};
      }
    }

    a {
      color: #FFF;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`
