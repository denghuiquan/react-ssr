import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './features/todos/todosSlice'
import usersReducer from './features/users/usersSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    users: usersReducer
  },
  preloadedState: window.INITIAL_STATE
})
