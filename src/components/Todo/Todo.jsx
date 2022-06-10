import s from './Todo.module.scss'
import { Checkbox, IconButton, Typography } from '@mui/material'
import {
  BsPatchCheck,
  BsPatchCheckFill,
  BsSuitHeart,
  BsSuitHeartFill,
  BsPencilSquare,
} from 'react-icons/bs'
import { IoTrashBinOutline } from 'react-icons/io5'
export const Todo = ({
  id,
  date,
  completed,
  favorite,
  todoName,
  todos,
  setTodos,
  setIsModalOpen,
  setCurent,
}) => {
  const onComplete = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        } else {
          return todo
        }
      })
    )
  }

  const onFavorite = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            favorite: !todo.favorite,
          }
        } else {
          return todo
        }
      })
    )
  }

  const onDelete = () => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const onEdit = () => {
    setIsModalOpen('edit')
    setCurent({todoName,id})
  }
  return (
    <li className={s.root}>
      <Checkbox
        icon={<BsPatchCheck fontSize={20} />}
        checkedIcon={<BsPatchCheckFill fontSize={20} />}
        onChange={onComplete}
        checked={completed}
        color='secondary'

      />
      <Checkbox
        icon={<BsSuitHeart fontSize={20} />}
        checkedIcon={<BsSuitHeartFill fontSize={20} />}
        color='secondary'
        onChange={onFavorite}
        checked={favorite}
        className={s.favorite}
      />
      <div className={s.title}>
        <Typography
          className={`${completed ? s.completed : ''} ${
            favorite ? s.favorite : ''
          }`}
          variant='h3'
          fontSize='1.5rem'
        >
          {todoName}
        </Typography>
        <p className={s.data} >{date}</p>
      </div>
      <IconButton color='secondary' onClick={onEdit}>
        <BsPencilSquare fontSize={20} />
      </IconButton>
      <IconButton color='secondary' onClick={onDelete}>
        <IoTrashBinOutline fontSize={20} />
      </IconButton>
    </li>
  )
}
