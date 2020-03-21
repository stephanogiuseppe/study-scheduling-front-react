import styled from 'styled-components'

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #FFF;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`
export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #FFF;
  opacity: ${props => props.past ? 0.2 : 1};

  strong {
    display: block;
    font-size: 20px;
    font-weight: normal;
    color: ${props => props.available ? '#999' : '#000'};
  }

  span {
    display: block;
    margin: 3px 0 0 0;
    color: ${props => props.available ? '#AAA' : '#333'};
  }
`
