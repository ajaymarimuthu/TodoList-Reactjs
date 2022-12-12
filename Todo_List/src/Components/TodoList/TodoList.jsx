import React from 'react'
import { useState } from 'react'
import './TodoList.css'

function TodoList({item,deleteTask,isComplete,completedTask}) {

 


    TodoList.defaultProps={
        item:"ammam"
    }
    
  return (
    <ul className= "task" style={{backgroundColor: isComplete ? "green":"grey" }} >
        <li>{item.taskName} </li>
        <button onClick={()=>deleteTask(item.id)}>Delete</button>         
        <button onClick={()=>completedTask(item.id)}>Complete</button>
    </ul>
  )
}

export default TodoList