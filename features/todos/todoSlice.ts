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
    addTodo(state, { payload }: PayloadAction<string>){
        state.todos.push({
            id: nextTodoId++,
            completed: false,
            userId: 1,
            title: payload
        })
    },
    removeTodo(state, { payload }: PayloadAction<number>) {
        // TODO 그냥 filter return 하면 왜 안되는지? 알아보기
        state.todos = state.todos.filter(todo => todo.id !== payload)
    },
    toggleTodo(state, {payload}: PayloadAction<number>) {
        let todo = state.todos.find(todo => todo.id === payload);
        if (!todo) {
            return;
        }
        todo.completed = !todo.completed;
    },
  }
})

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer

// 이 부분 공부
export const todosSelector = (state:TodoState) => state.todos