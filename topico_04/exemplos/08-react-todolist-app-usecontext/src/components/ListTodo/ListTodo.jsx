/* eslint-disable react/prop-types */
import { useContext } from 'react';
import Todo from '../Todo/Todo';
import { StateTodosList } from '../../context/TodosListProvider';

export default function ListTodo({ editTodo }) {
  const { listTodos } = useContext(StateTodosList);
  return (
    <>
      <p>Suas Tarefas:</p>
      <ol>
        {listTodos.map((todo, i) => (
          <Todo key={i} todo={todo} editTodo={editTodo} />
        ))}
      </ol>
    </>
  );
}
