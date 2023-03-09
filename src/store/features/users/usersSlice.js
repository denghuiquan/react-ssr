import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// await axios.get('https://jsonplaceholder.typicode.com/users');
export const loadUsers = createAsyncThunk(
  'users/loads',
  // (payload, thunkAPI) => {
  //   axios
  //     .get(payload)
  //     .then(response => thunkAPI.dispatch(setUsers(response.data)))
  // }
  payload => {
    return axios.get(payload).then(response => response.data)
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    userAdded (state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    addUser: {
      prepare: user => {
        return { payload: { ...user, id: Math.ceil(Math.random() * 100) } }
      },
      reducer: (state, action) => {
        state.push(action.payload)
      }
    },
    userToggled (state, action) {
      const user = state.find(user => user.id === action.payload)
      user.completed = !user.completed
    },
    setUsers (state, action) {
      action.payload.forEach(user => state.push(user))
    }
  },
  extraReducers: {
    [loadUsers.fulfilled]: (state, action) => {
      action.payload.forEach(user => state.push(user))
      return state
    }
  }
})

export const { userAdded, userToggled, setUsers } = usersSlice.actions
export default usersSlice.reducer
