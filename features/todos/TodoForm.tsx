import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice';
import styled from '@emotion/styled';

function TodoForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    dispatch(addTodo(text))

    setText('');
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  return (
    <TodoFormBlock onSubmit={handleSubmit}>
      <input
        placeholder="What need to be done"
        value={text}
        onChange={onChange}
      />
    </TodoFormBlock>
  )
}


export default TodoForm;

const TodoFormBlock = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 600px;
    input {
      padding: 16px 16px 16px 60px;
      border: none;
      background: rgba(0, 0, 0, 0.003);
      box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
      position: relative;
      margin: 0;
      width: 100%;
      font-size: 24px;
      line-height: 1.4em;
      ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
      }
      ::-moz-placeholder { /* Firefox 19+ */
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
      }
      :-ms-input-placeholder { /* IE 10+ */
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
      }
      :-moz-placeholder { /* Firefox 18- */
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
      }
    }

    
`;