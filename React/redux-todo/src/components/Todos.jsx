import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {removeTodo} from '../features/todoSlice'

function Todos() {
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()
  return (
    <div>
        {
        todos.map((todo) => (
          <>
            <h1 key={todo.id}>{todo.text}</h1> 
            <button
            onClick={() => dispatch(removeTodo(todo.id))}
            >X</button>
            </>
        ))
        }
        </div>
  )
}

export default Todos