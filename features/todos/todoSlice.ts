import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from './types';



export interface TodoState {
    todos: Array<Todo>;
    loading: boolean;
    errors: string;
}

const initialState:TodoState = {
    todos: [],
    loading: false,
    errors: "",
}

let nextTodoId = 0

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, { payload }: PayloadAction<Todo>){
        state.todos.push({
            id: nextTodoId++,
            completed: false,
            userId: 1,
            title: payload.title
        })
    },
    toggleTodo(state, action: PayloadAction<Todo>) {
        let todo = state.todos.find(todo => todo.id === action.payload.id);
        if (!todo) {
            return;
        }
        todo.completed = !todo.completed;
    },
  }
})

export const { addTodo } = todosSlice.actions

export default todosSlice.reducer

// 이 부분 공부
export const todosSelector = (state:TodoState) => state.todos