import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './features/todos/todosSlice'
import usersReducer from './features/users/usersSlice'
export const createStore = () => {
  return configureStore({
    reducer: {
      todos: todosReducer,
      users: usersReducer
    }
  })
}

export default createStore
