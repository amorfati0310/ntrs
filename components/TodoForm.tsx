import React from 'react'
import styled from '@emotion/styled';
import { createAction } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'


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
`

interface TodoFormProps {

}

function TodoForm({}: TodoFormProps){
  return (
    <TodoFormBlock onSubmit="">
      <input type="text" placeholder="What needs to be done?"/>
    </TodoFormBlock>
  )
}

export default TodoForm;
