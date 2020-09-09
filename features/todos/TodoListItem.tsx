import React from 'react'
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactChildren } from 'react';
import { removeTodo, toggleTodo } from './todoSlice'
import { useDispatch } from 'react-redux';

interface TodoProps {
  completed: boolean,
  title: string
  children?: ReactChildren,
  id: number,
}

const TodoItemBlock = styled.li< Pick<TodoProps, 'completed'>>`
    display: flex;
    align-items: center;
    color: #4d4d4d;
    ${({ completed }) => completed ? css`
        color: #d9d9d9;
        text-decoration: line-through;
    `: ''}
`;

const LabelBlock = styled.label`
  padding: 15px 15px 15px 60px;
  font-size: 24px;
  width: 100%;
`;

export default function TodoListItem({ completed, title, id }: TodoProps) {
  const dispatch = useDispatch();

  function handleRemove(id: number){
    dispatch(removeTodo(id))
  }

  function handleToggleTodo(id: number) {
    dispatch(toggleTodo(id))
  }

  return (
    <TodoItemBlock completed={completed}>
      <button onClick={() => handleToggleTodo(id)}>''</button>
      <LabelBlock>
        {title}
      </LabelBlock>
      <button onClick={() => handleRemove(id)}>X</button>
    </TodoItemBlock>
  )
}