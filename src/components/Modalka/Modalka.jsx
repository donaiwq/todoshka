import s from './Modalka.module.scss'
import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'

export const Modalka = ({
  setIsModalOpen,
  setTodos,
  todos,

  type,
  curent,
}) => {
  const [todoName, setTodoName] = useState(curent.todoName || '')
  const title = type === 'new' ? 'Create  task' : 'Edite  task'
  const submitTodo = (e) => {
    e.preventDefault()
    switch (type) {
      case 'new':
        setTodos([
          ...todos,
          {
            todoName,
            id: new Date().getTime(),
            date: new Date().toLocaleString('ru-ru'),
            completed: false,
            favorite: false,
          },
        ])
        break
      case 'edit':
        setTodos(
          todos.map((todo) =>
            todo.id === curent.id ? { ...todo, todoName } : todo
          )
        )
        break
      default:
        break
    }

    setIsModalOpen('')
  }

  const todoNameHandler = (e) => {
    setTodoName(e.target.value)
  }

  return (
    <div className={s.root} onClick={() => setIsModalOpen('')}>
      <div className={s.modalshine}>
        <div className={s.modal} onClick={(e) => e.stopPropagation()}>
          <Typography variant='h3' fontSize='1.5rem'>
            {title}
          </Typography>
          <form className={s.form} onSubmit={submitTodo}>
            <div className={s.typer}>
              <TextField
                placeholder='type something...'
                fullWidth
                onChange={todoNameHandler}
                required
                color='secondary'
                value={todoName}
              />
            </div>

            <div className={s.btns}>
              <Button
                color='secondary'
                variant='outlined'
                onClick={() => setIsModalOpen('')}
              >
                cancel
              </Button>
              <Button color='secondary' variant='contained' type='submit'>
                {type === 'new' ? 'add' : 'save'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
