import { combineReducers } from '@reduxjs/toolkit';

import todoState from '../features/todos/todoSlice';
import visibilityFilter from '../features/visibilityFilter/visibiltyFilters';

const rootReducer = combineReducers({
  todoState,
  visibilityFilter,
});

export type RootState = ReturnType<typeof rootReducer>;

// TODO
// ReturnType<typeof rootReducer>

export default rootReducer;
