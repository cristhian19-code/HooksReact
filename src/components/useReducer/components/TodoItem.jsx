import React from 'react'

export const TodoItem = ({handleDelete,handleCompleted,todo,index}) => {
    return (
        <li  key={todo.id} className="list-group-item d-flex justify-content-between">
            <p 
                className={todo.done ? 'text-decoration-line-through' : ''}
            >
                {index+1}. {todo.desc}
            </p>
            <div>
                <button 
                    onClick={()=>{
                        handleCompleted(todo.id)
                    }}
                    className="btn btn-info mx-2"
                    >
                    Completed
                </button>
                <button 
                    onClick={()=>{
                        handleDelete(todo.id)
                    }} 
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </div>
        </li>
    )
}
