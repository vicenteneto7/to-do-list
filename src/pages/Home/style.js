import styled from 'styled-components'

export const Container = styled.div`
  background: #ffff;
  width: 54rem;
  height: 49.8rem;
  border: none;
  border-radius: 5px;
  overflow: hidden;
`
export const Input = styled.input`
  width: 34.2rem;
  height: 4rem;
  margin: 3rem 0 2rem 2rem;
  padding-left: 1.9rem;
  border: 2px solid rgba(209, 211, 212, 0.4);
  &:focus {
    outline: 1px solid rgba(209, 211, 212, 0.7);
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
  }
`
export const Button = styled.button`
  width: 13rem;
  height: 4rem;
  border-radius: 0.5rem;
  background: #8052ec;
  color: #ffff;
  border: none;
  cursor: pointer;
  margin-top: 3rem;
  margin-left: 2.75rem;
  outline: none;
  p {
    height: 2rem;
    color: #ffffff;
    font-size: 1.7rem;
    font-weight: 900;
  }
`
export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`

export const Task = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 5rem;
  padding: 0 2rem 0 2rem;
  justify-content: space-between;
  border-radius: 5px;

  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
  width: 50rem;
  height: 6rem;
  border: none;
  outline: none;
  background: ${(props) => (props.isfinshed ? '#E8FF8B' : '#e4e4e4')};

  p {
    font-size: 1.5rem;
    font-weight: 400;
    font-size: 1.8rem;
    color: #000000;
  }

  img {
    background: none;
    border: none;
    cursor: pointer;
  }
`
