import "./App.css";
import React, { useState, useReducer } from "react";
import Todo from "./Todo.js";
import { InputContainer, GlobalStyles } from "./styles.js";
import { motion } from "framer-motion";

export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
  COMPLETE_TODO: "complete-todo",
};

function reducer1(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function reducer2(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.COMPLETE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}
function newTodo(name) {
  return { id: Date.now(), name: name, completed: false };
}

function App() {
  const [state1, dispatch1] = useReducer(reducer1, { count: 0 });
  const [todos, dispatch2] = useReducer(reducer2, []);

  const [name, setName] = useState("");

  function increment() {
    dispatch1({ type: ACTIONS.INCREMENT });
  }
  function decrement() {
    dispatch1({ type: ACTIONS.DECREMENT });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch2({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  console.log(todos);
  return (
    <>
      <GlobalStyles />
      <svg
        id="visual"
        viewBox="0 0 960 540"
        width="1920"
        height="1080"
        version="1.1"
      >
        <rect x="0" y="0" width="960" height="540" fill="#161616"></rect>
        <g transform="translate(500 225)">
          <motion.path
          animate={{ 
            d: [
              "M155.4 -159.9C199.4 -111.4 231.7 -55.7 233.7 2C235.6 59.6 207.3 119.3 163.3 193.3C119.3 267.3 59.6 355.6 -17.8 373.4C-95.2 391.2 -190.4 338.4 -269.2 264.4C-347.9 190.4 -410.2 95.2 -412.6 -2.4C-414.9 -99.9 -357.4 -199.9 -278.6 -248.4C-199.9 -296.9 -99.9 -293.9 -22.1 -271.8C55.7 -249.7 111.4 -208.4 155.4 -159.9",
              "M194.8 -231C237.3 -152.3 246.1 -76.1 260.4 14.3C274.7 104.7 294.3 209.3 251.8 248.7C209.3 288.1 104.7 262.2 21 241.2C-62.7 220.2 -125.4 204.1 -184.2 164.8C-243.1 125.4 -298 62.7 -299.1 -1.1C-300.2 -64.8 -247.3 -129.6 -188.5 -208.4C-129.6 -287.1 -64.8 -379.8 5.7 -385.5C76.1 -391.1 152.3 -309.8 194.8 -231",
              "M247.3 -229.1C317.8 -176.8 370.4 -88.4 354 -16.4C337.7 55.7 252.4 111.4 181.9 179.9C111.4 248.4 55.7 329.7 -27.8 357.5C-111.4 385.4 -222.7 359.7 -295.6 291.2C-368.4 222.7 -402.7 111.4 -400.5 2.2C-398.3 -107 -359.7 -214 -286.9 -266.4C-214 -318.7 -107 -316.3 -9.3 -307C88.4 -297.7 176.8 -281.4 247.3 -229.1",
              "M162.4 -169.9C213.4 -111.4 259.7 -55.7 277.1 17.4C294.5 90.5 283 181 232 255.5C181 330 90.5 388.5 -10.4 398.9C-111.4 409.4 -222.7 371.7 -284.2 297.2C-345.7 222.7 -357.4 111.4 -346.7 10.7C-336 -90 -303.1 -180.1 -241.6 -238.6C-180.1 -297.1 -90 -324 -17.2 -306.9C55.7 -289.7 111.4 -228.4 162.4 -169.9"
          ]
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            duration: 30,
            times: [0, 1, 2, 3, 4]
        }}
            fill="#a60043"
          ></motion.path>
        </g>
      </svg>
      <div>
        <button
          onClick={() => {
            decrement();
          }}
        >
          -
        </button>
        <span>{state1.count}</span>
        <button
          onClick={() => {
            increment();
          }}
        >
          +
        </button>
      </div>

      <InputContainer>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      </InputContainer>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch2={dispatch2} />;
      })}
    </>
  );
}

export default App;
