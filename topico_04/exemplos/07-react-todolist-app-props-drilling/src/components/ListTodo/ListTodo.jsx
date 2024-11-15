import Todo from '../Todo/Todo';

export default function ListTodo({ listTodos, editTodo, deleteTodo }) {
  return (
    <>
      <p>Suas Tarefas:</p>
      <ol>
        {listTodos.map((todo, i) => (
          <Todo
            key={i}
            todo={todo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ol>
    </>
  );
}
