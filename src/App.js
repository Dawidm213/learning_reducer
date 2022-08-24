import './App.css';
import React, { useState, useReducer } from 'react';
import Todo from './Todo.js';

export const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  ADD_TODO: 'add-todo',
  DELETE_TODO: 'delete-todo',
  COMPLETE_TODO: 'complete-todo'
};


function reducer1(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
  
}

function reducer2(todos, action){
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.COMPLETE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete}
        }
        return todo
      })
      case ACTIONS.DELETE_TODO:
        return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}
function newTodo(name) {
  return { id: Date.now(), name:name, completed: false }
}

function App() {

  const [ state1, dispatch1 ] = useReducer(reducer1, { count: 0 })
  const [ todos, dispatch2 ] = useReducer(reducer2, [])
  
  const [ name, setName ] = useState('')

  function increment() {
    dispatch1({type: ACTIONS.INCREMENT})
  }
  function decrement() {
    dispatch1({type: ACTIONS.DECREMENT})
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch2({ type: ACTIONS.ADD_TODO, payload: {name: name} })
    setName('');
  }
  
console.log(todos)
  return (
    <>
      <div>
        <button onClick={() => {
          decrement()
        }} >-</button>
        <span>{state1.count}</span>
        <button onClick={() => {
          increment()
        }}>+</button>
      </div>



      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </form>
      </div>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch2={dispatch2} />
      })}

      
    </>
  );
}

export default App;
