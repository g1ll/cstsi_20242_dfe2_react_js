/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./todo.css";
const Todo = ({ index, todo, deleteTodo, editTodo }) => {
  useEffect(() => {
    return () => {
      console.warn(`${todo.title} removido !!!`);
    };
  }, []);

  return (
    <div className="todo_item">
      <div>
        <h3>
          &nbsp;&nbsp;&nbsp;{index + 1}º
          &nbsp;&nbsp;&nbsp;{todo.title}
        </h3>
      </div>
      <details>
        <summary>Descrição</summary>
        {todo.text}
        <details>
        <summary>Etapas</summary>
        <ol>
          <li>Etapas</li>
          <li>Etapas</li>
          <li>Etapas</li>
        </ol>
      </details>
      </details>
      <div>
        <button onClick={() => deleteTodo(todo)}>&#x274C;</button>
        <button className="todo_edit" onClick={() => editTodo(todo)}>
          &#x1F4DD;
        </button>
      </div>
    </div>
  );
};

export default Todo;
