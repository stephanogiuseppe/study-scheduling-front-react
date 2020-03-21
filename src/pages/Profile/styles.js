import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

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

    span {
      color: #fe9e9e;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      background: #9ed2fe;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#9ed2fe')};
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    background: #fe9e9e;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#fe9e9e')};
    }
  }
`
