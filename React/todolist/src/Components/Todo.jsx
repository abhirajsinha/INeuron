import React from 'react'
import styled from 'styled-components';

const Todo = () => {
  return (
    <div className='todo--container'>
        <h1>TODO LIST</h1>
        <input type="text" placeholder='Add Your Tasks'/>
        <button className='btn'>Add</button>
    </div>
  )
}

export default Todo