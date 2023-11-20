import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete,index,DragHandler}) => {
  return (
    <div className={`${task.completed ? "completed Todo" : "incompleted Todo"}`} draggable onDragStart={(e)=>{e.dataTransfer.setData("index",index)}} onDrop={(e)=>DragHandler(e.dataTransfer.getData("index"),index)} onDragOver={(e)=>e.preventDefault()}>
        <input type='checkbox'  value={task.completed} onClick={() => toggleComplete(task.id)}></input>
        <p >{task.task}</p>
        <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
