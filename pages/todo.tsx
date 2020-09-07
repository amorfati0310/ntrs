import { InferGetServerSidePropsType } from 'next'

type Todo = {
    completed: Boolean;
    id: Number;
    title: String;
    userId: Number;
}

type Todos = Array<Todo>

export const getServerSideProps = async () => {
  // This gets called on every request
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data: Todos = await res.json()
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
      <h1>TODOS</h1>
      <ul>
        
      {todos.map(({id, title, completed}) => (      
      <li>
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
