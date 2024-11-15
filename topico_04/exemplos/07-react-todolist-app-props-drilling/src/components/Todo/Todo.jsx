export default function Todo({ todo, editTodo, deleteTodo }) {
  return (
    <li>
      <h2>{todo.title}</h2>
      <h5>{todo.text}</h5>
      &nbsp;&nbsp;&nbsp;
      <a href="#" onClick={() => editTodo(todo)} title="Editar">
        Editar
      </a>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#" onClick={() => deleteTodo(todo)} title="Deletar">
        X
      </a>
    </li>
  );
}
