/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Todo from "../Todo/Todo";

const ListTodos = ({ todosList, deleteTodo, editTodo }) => {
  console.table({ todosList });
  return (
    <>
      <h2>Lista de Tarefas:</h2>
      {todosList.length > 0 &&
        todosList.map((todo, i) => (
          <Todo
            index={i}
            key={`todo_${i}`}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
    </>
  );
};

export default ListTodos;
