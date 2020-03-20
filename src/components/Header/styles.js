import styled from 'styled-components'

export const Container = styled.div`
  background: #FFF;
  padding: 0 30px;
`

export const Content = styled.div`
  height: 65px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 4rem;
      margin: 0 20px 0 0;
      padding: 0 20px 0 0;
      border-right: 1px solid #EEE
    }

    a {
      font-weight: bold;
      color: #A52A2A;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`

export const Profile = styled.div`
  display: flex;
  margin: 0 0 0 20px;
  padding: 0 0 0 20px;
  border-left: 1px solid #EEE;

  div {
    text-align: right;
    margin: 0 10px 0 0;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin: 2px 0 0 0;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`
