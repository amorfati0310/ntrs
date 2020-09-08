import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export type Todo = {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

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
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
        state.todos.push({
            id: nextTodoId++,
            completed: false,
            userId: 1,
            title: payload.title
        })
    },
  }
})

export const { addTodo } = todosSlice.actions

export default todosSlice.reducer

// 이 부분 공부
// export const todosSelector = (state: { photosStore: TodoState }) =>
//   state.photosStore