import React from 'react'
import { ImHeart } from 'react-icons/im'
import s from './Background.module.scss'

export const Background = React.memo(function MemoBackground() {
  const arr = Array(500).fill(null)
  return (
    <div className={s.root}>
      {arr.map((_, index) => {
        const random = Math.random() + 1
        return (
          <span className={s.heartwow} key={index}>
            <ImHeart fontSize={50 * random} />{' '}
          </span>
        )
      })}
    </div>
  )
})
