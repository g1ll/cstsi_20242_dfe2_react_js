import { useContext } from 'react';
import { StateTodosList } from '../../context/ListTodosProvider';

export default function Todo({ todo }) {
  const { deleteTodo, setEditedTodo } = useContext(StateTodosList);

  return (
    <li>
      <h2>{todo.title}</h2>
      <h5>{todo.text}</h5>
      &nbsp;&nbsp;&nbsp;
      <a href="#" onClick={() => setEditedTodo(todo)} title="Editar">
        Editar
      </a>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#" onClick={() => deleteTodo(todo)} title="Deletar">
        X
      </a>
    </li>
  );
}
