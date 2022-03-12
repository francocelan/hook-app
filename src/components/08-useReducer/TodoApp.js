import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
// import {useForm} from '../../hooks/useForm';

import './styles.css';
import { TodoList } from '../TodoList';
import { TodoAddForm } from '../TodoAddForm';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) )
    }, [todos])

    const handleDelete = (todoId) => {

        // Crear la action 
        const actionTodo = {
            type:'delete',
            payload: todoId
        }

        // dispatch
        dispatch( actionTodo );
        
    }

    const handleToggle = (todoId) => {
        dispatch({
            type:'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type:'add',
            payload: newTodo
        });
    }


  return (
    <div>
        <h1>TodoApp ({todos.length}) </h1>
        <hr/>

        <div className='row'>

            <div className='col-7'>

                { /* crear un componente TodoList debe recibir como argumento los todos,handleDelete,handleToggle*/ }
                <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete}/>

            </div>

            <div className='col-5'>
            <TodoAddForm
                handleAddTodo={handleAddTodo}
            />
            
            </div>

        </div>

    </div>
  )
}
