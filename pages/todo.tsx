import { InferGetServerSidePropsType } from 'next'

import TodoTitle from '../components/TodoTitle';
import TodoForm from '../components/TodoForm';

export type Todo = {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

export type Todos = Array<Todo>

export const getServerSideProps = async () => {
  // This gets called on every request
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data:Todos = await res.json()
  // Pass data to the page via props
  return {
    props: {
      data,
    },
  }
}

function TodoPage({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // will resolve posts to type Data
  const todos = data.slice(0,20);
  console.log('todoss', todos)
  // Render data...
  return (
  <div>
      <TodoTitle title="todos"/>
      <TodoForm/>
      <ul>
        
      {todos.map(({id, title, completed}) => (      
      <li key={id}>
        {title}
        <button>{completed ? 'v': 'x'}
        </button>
      </li>
      ))}
      </ul>
  </div>
  )
}



export default TodoPage
