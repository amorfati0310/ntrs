import styled from '@emotion/styled';

import { InferGetServerSidePropsType, GetServerSideProps } from 'next';

import TodoTitle from '../components/TodoTitle';
import TodoForm from '../features/todos/TodoForm';
import TodoList from '../features/todos/TodoList';
import FilterButton from '../features/visibilityFilter/filterButton';
import { VisibilityFilter } from '../features/visibilityFilter/visibiltyFilters';

import { Todo } from '../features/todos/types';

type serverTodosType = { data: Array<Todo> };

export const getServerSideProps: GetServerSideProps<serverTodosType> = async (context) =>
  // This gets called on every request
  // const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  // const data:Todos = await res.json()
  // // Pass data to the page via props
  ({
    props: {
      data: [],
    },
  });
const MainBlock = styled.main`
  margin: 0 auto;
  width: 600px;
  align-items: center;
`;

function TodoPage({ data }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  // will resolve posts to type Data
  // const todos = data.slice(0,20);
  // console.log('todoss', todos)
  // Render data...
  return (
    <div>
      <TodoTitle title="todos" />
      <MainBlock>
        <TodoForm />
        <TodoList />
        <FilterButton visibilityFilter={VisibilityFilter.ShowAll} text="All" />
        <FilterButton visibilityFilter={VisibilityFilter.ShowActive} text="Active" />
        <FilterButton visibilityFilter={VisibilityFilter.ShowCompleted} text="Completed" />
      </MainBlock>
    </div>
  );
}

export default TodoPage;
