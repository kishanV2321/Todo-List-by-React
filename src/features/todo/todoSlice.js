import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,

    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map( (todo) => 
            (todo.id === action.payload? {...todo, text: action.payload}: todo))
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter( (todo) => 
            (todo.id !== action.payload))
        },
        toggleComplete: (state, action) => {
            state.todos = state.todos.map( (todo) => 
            (todo.id === action.payload? {...todo, completed: !todo.completed} : todo))
        }
    }
})

export const {addTodo, updateTodo, deleteTodo, toggleComplete} = todoSlice.actions

export default todoSlice.reducer