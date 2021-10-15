import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import {useForm} from '../../hooks/useForm' 
import { TodoList } from './components/TodoList'

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
    //hoock personalizado para inputs
    const {form:{description} ,handleChangeInput,reset} = useForm({
        description: ''
    })

    const [todos,dispatch] = useReducer(todoReducer, [], init)

    //se ejecuta cunado hay un cambio en el estado del todos
    useEffect(() => {
        //se almacena en el localstorage
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])

    
    const handleSubmit = (e)=>{

        e.preventDefault();

        if(description.trim().length <=5){
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        
        dispatch({
            type: 'add',
            payload: newTodo
        })

        reset();
    }

    const handleDelete = (id) => {
        dispatch({
            type: 'delete',
            payload: {
                id
            }
        })
    }

    const handleCompleted = (id) => {
        dispatch({
            type: 'completed',
            payload: {
                id
            }
        })
    }

    return (
        <div className="p-4">
            <h1>TodoApp({todos.length})</h1>
            <hr />
            <div className="d-flex gap-3">
                <div className="col-7">
                    <TodoList handleDelete = {handleDelete} handleCompleted={handleCompleted} todos={todos}/>
                </div>
                <form onSubmit={handleSubmit} className="col-5 form-group d-flex flex-column align-items-center p-4">
                    <p className="display-5">Agregar Todo</p>
                    <input
                        onChange={ handleChangeInput }
                        value={description}
                        type="text"
                        name="description"
                        className="form-control" 
                        placeholder="Escriba su tarea"
                    />
                    <button type="submit" className="btn btn-outline-success mt-2"
                    >Add</button>
                </form>

            </div>

        </div>
    )
}
