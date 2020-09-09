import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice';
import styled from '@emotion/styled';


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
    }
`;

interface TodoFormProps {

}

function TodoForm({}: TodoFormProps){
  const dispatch = useDispatch();
  const [text, setText] = useState('')

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    console.log('text', text)
    if(!text.trim()){
      return;
    }
    dispatch(addTodo(text))

    setText('');
  }

  function handleChagne(e: React.ChangeEvent<HTMLInputElement>){
    setText(e.target.value)
  }

  return (
    <TodoFormBlock onSubmit={handleSubmit}>
      <input 
        placeholder="What need to be done"
        value={text}
        onChange={handleChagne}
      />
    </TodoFormBlock>
  )
}

// TODO Place holder style 적용 

export default TodoForm;

