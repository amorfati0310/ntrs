import { combineReducers } from '@reduxjs/toolkit';

import paginate from '../features/pagninate/paginateSlice';
import todoState from '../features/todos/todoSlice';
import visibilityFilter from '../features/visibilityFilter/visibiltyFilters';

const rootReducer = combineReducers({
  todoState,
  visibilityFilter,
  paginate,
});

export type RootState = ReturnType<typeof rootReducer>;

// TODO
// ReturnType<typeof rootReducer>

export default rootReducer;
