import React from 'react'
import { ACTIONS } from './App.js'
import { Container, Button1, Button2, Text } from './Todo.style.js'

export default function Todo({ todo, dispatch2 }) {
  return (
    <Container>
        <Text style={{ color: todo.complete ? '#AAA' : '#ffffff' }}>{todo.name}</Text>
        <Button1 onClick={() => dispatch2({ type: ACTIONS.COMPLETE_TODO, payload: {id: todo.id} })}>Complete</Button1>
        <Button2 onClick={() => dispatch2({ type: ACTIONS.DELETE_TODO, payload: {id: todo.id} })}>Delete</Button2>
    </Container>
  )
}
