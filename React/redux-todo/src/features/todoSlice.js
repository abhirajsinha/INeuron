import {createSlice} from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {id: 1122, text: "Learn JS with Hitesh"},
        {id: 122, text: "Done with redux"},
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), //Generate a unique ID
                text: action.payload
            };

            state.todos.push(todo)

            //Todos.slice(1, 3)
            //Todo.splice(1, 3)
        },
        removeTodo: (state, action) => {
           state.todos =  state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer