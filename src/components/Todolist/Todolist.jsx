import s from './Todolist.module.scss'
import React from 'react'
import { Todo } from '../Todo/Todo'
export const Todolist = ({
  todos,
  setTodos,
  searchName,
  filter,
  setIsModalOpen,
  setCurent,

}) => {
  return (
    <div className={s.todolist}>
      <ul>
        {todos
          .filter((todo) => {
            switch (filter) {
              case 'all':
                return todo
              case 'completed':
                return todo.completed
              case 'favorite':
                return todo.favorite
            }
          })
          .filter((todo) =>
            todo.todoName.toLowerCase().includes(searchName.toUpperCase())
          )
          .map((todo) => {
            return (
              <Todo
                key={todo.id}
                todos={todos}
                setCurent={setCurent}
                setTodos={setTodos}
                setIsModalOpen={setIsModalOpen}
                {...todo}
              />
            )
          })}
      </ul>
    </div>
  )
}

// <Grid component="li">
//   <Checkbox
//     value={todo.id}
//     checked={todo.completed}
//     onChange={onCheckedCompleted}
//   />{" "}
//   <p>favorite</p>
//   <Checkbox
//     value={todo.id}
//     checked={todo.favorite}
//     onChange={onCheckedFavorited}
//   />{" "}
//   <p>complete</p>-{todo.todoName}
// </Grid>
