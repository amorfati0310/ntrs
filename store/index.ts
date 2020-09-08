import { configureStore, createReducer, createAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

// // Before:
// const store = createStore(counter)


// Redux 


// // After:
// configure로 하면 reduxDevtoolExtension에서 히스토리 추적 가능 ! 
// const store = configureStore({
//   reducer: counter
// })


// Let's recap what the functions do:

// configureStore: creates a Redux store instance like the original createStore from Redux, but accepts a named options object and sets up the Redux DevTools Extension automatically
// createAction: accepts an action type string, and returns an action creator function that uses that type
// createReducer: accepts an initial state value and a lookup table of action types to reducer functions, and creates a reducer that handles all of those action types
// createSlice: accepts an initial state and a lookup table with reducer names and functions, and automatically generates action creator functions, action type strings, and a reducer function.


const addTodo = createAction('ADD_TODO')
const deleteTodo = createAction('DELETE_TODO')

const initialState = {
  count: 0,
  todos: []
}

const reducer = createReducer(initialState, {
  INCREMENT: (state, action) => ({ ...state, count: state.count + 1 }),
  DECREMENT: (state, action) => ({ ...state, count: state.count - 1 }),
  RESET: (state, action) => ({ ...state, count: initialState.count }),
  [addTodo.type]: (state, action) => ({...state, todos: state.todos.concat({
    completed: false,
    id: 1,
    title: 'todo',
    userId: 1,
  })})
  // ADDTODO: (state, ({payload})) => ({...state, todos: state.todos.concat({
  //   id: payload.id,
  //   title: payload.title,
  //   description: payload.description
  // }) })
})




// TODO1 preloadState 모르는데 일단 적용된 사항 나중에 볼 것 
const initializeStore = (preloadedState = initialState) => {
  return configureStore({
    reducer,
    preloadedState,
  })
}

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() 
// Export a hook that can be reused to resolve types

export const store = initializeStore()
