import React from 'react'
import { ACTIONS } from './App.js'

export default function Todo({ todo, dispatch2 }) {
  return (
    <div>
        <span style={{ color: todo.complete ? '#AAA' : '#000' }}>{todo.name}</span>
        <button onClick={() => dispatch2({ type: ACTIONS.COMPLETE_TODO, payload: {id: todo.id} })}>Complete</button>
        <button onClick={() => dispatch2({ type: ACTIONS.DELETE_TODO, payload: {id: todo.id} })}>Delete</button>
    </div>
  )
}
