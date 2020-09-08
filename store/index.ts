import { configureStore, createReducer } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  todos: []
}

const reducer = createReducer(initialState, {
  INCREMENT: (state, action) => ({ ...state, count: state.count + 1 }),
  DECREMENT: (state, action) => ({ ...state, count: state.count - 1 }),
  RESET: (state, action) => ({ ...state, count: initialState.count }),
  // ADDTODO: (state, ({payload})) => ({...state, todos: state.todos.concat({
  //   id: payload.id,
  //   title: payload.title,
  //   description: payload.description
  // }) })
})




const initializeStore = (preloadedState = initialState) => {
  return configureStore({
    reducer,
    preloadedState,
  })
}

export const store = initializeStore()