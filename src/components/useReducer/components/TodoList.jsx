import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({handleDelete,handleCompleted,todos}) => {
    return (
        <ul className="list-group-flush">
            {
                todos.map((todo,index) =>{
                    return (
                        <TodoItem key={todo.id} handleDelete={handleDelete} handleCompleted={handleCompleted} todo={todo} index={index}/>
                    )
                })
            }
        </ul>
    )
}
