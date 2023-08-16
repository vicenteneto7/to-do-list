/* eslint-disable react/no-unknown-property */
import React, { useState, useRef } from 'react'

import { v4 as uuid } from 'uuid'

import Rocket from '../../assets/rocket.png'
import Trash from '../../assets/trash-red.png'
import { Container, Input, Button, Task, List } from './style'

const App = () => {
  const [list, setList] = useState([])
  const inputTask = useRef()

  const addNewTask = () => {
    const newTask = {
      id: uuid(),
      task: inputTask.current.value,
      finished: 'false'
    }
    setList([...list, newTask])
  }

  const deleteTask = (taskId) => {
    const newTask = list.filter((task) => task.id !== taskId)
    setList(newTask)
  }

  const tarefaConcluida = (id) => {
    const newList = list.map((item) =>
      item.id === item ? { ...list, finished: true } : item
    )
    setList(newList)
  }

  return (
    <>
      <Container>
        <Input ref={inputTask} placeholder="O que tenho que fazer..." />
        <Button onClick={addNewTask}>
          <p>Adicionar</p>
        </Button>
        <List>
          {list.map((item) => (
            <Task key={item.id} isfinished={item.finished}>
              <img
                onClick={() => tarefaConcluida(item.id)}
                src={Rocket}
                alt="Foguete"
              />
              <p>{item.task}</p>
              <img
                onClick={() => deleteTask(item.id)}
                src={Trash}
                alt="Lixeira"
              />
            </Task>
          ))}
        </List>
      </Container>
    </>
  )
}
export default App
