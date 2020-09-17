import React from 'react';
import TodoListItem from './TodoListItem';
import { RootState } from 'store/rootReducer';
import { useSelector } from 'react-redux';
import { VisibilityFilter } from '../visibilityFilter/visibiltyFilters';
import { Todo } from './types';

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilter.ShowAll:
      return todos;
    case VisibilityFilter.ShowCompleted:
      return todos.filter((t) => t.completed);
    case VisibilityFilter.ShowActive:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};
export default function TodoList(): JSX.Element {
  const todos = useSelector((state: RootState) => getVisibleTodos(state.todoState.todos, state.visibilityFilter));

  return (
    <ul>
      {todos.map(({ completed, id, title }) => (
        <TodoListItem key={id} title={title} id={id} completed={completed} />
      ))}
    </ul>
  );
}
