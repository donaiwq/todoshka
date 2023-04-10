import { Button, TextField, Select, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import s from './App.module.scss'
import { Modalka } from './components/Modalka/Modalka'
import { Todolist } from './components/Todolist/Todolist'
import { Background } from './components/Background/Background'

const App = () => {


  const [searchName, setSearchName] = useState('')
  const [todos, setTodos] = useState([])
  const [isModalOpen, setIsModalOpen] = useState('')
  const [filter, setFilter] = useState('all')
  const [curent, setCurent] = useState({})
  const filterHandle = (e) => {

    setFilter(e.target.value)
  }
  useEffect(() => {
    const todosFromLC = JSON.parse(localStorage.getItem('todos')) || []
    // console.log(todosFromLC)
    setTodos(todosFromLC)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  

  return (
    <div className={s.app}>
      <Background />
      <div className={s.appContainer}>

        <h1 className={s.title}>Start Now</h1>
        
        <div className={s.searchnav}>


          <Button
            
            color='secondary'

            variant='outlined'

            onClick={() => setIsModalOpen('new')}

            className={s.btnka}

          >
            Add new todo
          </Button>
          <TextField
            onChange={(e) => setSearchName(e.target.value)}
            className={s.inputsearch}
            fullWidth
            placeholder='Search...' // variant='standard'
            color='secondary'
          />

          <Select
            color='secondary'
            value={filter}
            onChange={filterHandle}
            className={s.select}
          >
            <MenuItem color='secondary' value='all'>
              all
            </MenuItem>
            <MenuItem value='completed'>completed</MenuItem>
            <MenuItem value='favorited'>favorited</MenuItem>
          </Select>
        </div>

        {todos.length > 0 ? (
          <Todolist
            todos={todos}
            setTodos={setTodos}
            searchName={searchName}
            filter={filter}
            setIsModalOpen={setIsModalOpen}
            setCurent={setCurent}
          />
        ) : null}

        {isModalOpen.length > 0 ? (
          <Modalka
            todos={todos}
            setTodos={setTodos}
            type={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            curent={curent}
          />
        ) : null}
      </div>
    </div>
  )
}

export default App
