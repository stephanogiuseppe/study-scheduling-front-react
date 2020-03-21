import styled from 'styled-components'

export const Container = styled.div`
  align-self: center;
  margin: 0 0 30px 0;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.3);
      background: #EEE;
    }

    input {
      display: none;
    }
  }
`
