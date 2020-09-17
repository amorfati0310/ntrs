import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactChildren } from 'react';
import { removeTodo, toggleTodo } from './todoSlice';
import { useDispatch } from 'react-redux';

interface TodoProps {
  completed: boolean;
  title: string;
  children?: ReactChildren;
  id: number;
}

const TodoItemBlock = styled.li<Pick<TodoProps, 'completed'>>`
  display: flex;
  align-items: center;
  color: #4d4d4d;
  ${({ completed }) =>
    completed
      ? css`
          color: #d9d9d9;
          text-decoration: line-through;
        `
      : ''}
`;

const LabelBlock = styled.label`
  padding: 15px 15px 15px 60px;
  font-size: 24px;
  width: 100%;
`;

export default function TodoListItem({ completed, title, id }: TodoProps): JSX.Element {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeTodo(id));
  }

  function handleToggleTodo() {
    dispatch(toggleTodo(id));
  }

  return (
    <TodoItemBlock completed={completed}>
      <button onClick={handleToggleTodo}>v</button>
      <LabelBlock>{title}</LabelBlock>
      <button onClick={handleRemove}>X</button>
    </TodoItemBlock>
  );
}
