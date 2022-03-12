

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'delete':
            return state.filter(todo => todo.id !== action.payload); // En este caso el payload deberia ser el ID del "todo" a borrar
        case 'toggle':
            return state.map( todo => (
                (todo.id === action.payload)
                ? {...todo, done: !todo.done}
                : todo
            ) )

        case 'toggle-modo-viejo':
            return state.map( todo => {
                if( todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }else {
                   return todo;
                }
            } )
    
        default:
            return state;
    }
}