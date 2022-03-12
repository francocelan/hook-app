import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos,handleToggle, handleDelete}) => {
  return (
    <ul className='list-group list-group-flush'>
        {
            todos.map( (todo, i) => {
                // crear un componente TodoListItem, necesita el todo,indice, handleDelete,handleToggle
                return <TodoListItem key={todo.id} todo={todo} indice={i} handleToggle={handleToggle} handleDelete={handleDelete} />

            })
        }
        
    </ul>
  )
}
