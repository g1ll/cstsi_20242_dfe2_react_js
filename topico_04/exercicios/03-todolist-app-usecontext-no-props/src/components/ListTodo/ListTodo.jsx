import { useContext } from 'react';
import Todo from '../Todo/Todo';
import { StateTodosList } from '../../context/ListTodosProvider';

export default function ListTodo() {
  const { listTodos } = useContext(StateTodosList);
  return (
    <>
      <p>Suas Tarefas:</p>
      <ol>
        {listTodos.map((todo, i) => (
          <Todo key={i} todo={todo} />
        ))}
      </ol>
    </>
  );
}
