/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import "./App.css";
import TodoFields from "./components/TodoFields/TodoFields";
import ListTodos from "./components/ListTodos/ListTodos";

function App() {
  const [listTodos, setListTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState({});

  const newTodo = ({ title, text }) => {
    //createEditTodo
    setListTodos((_listTodos) => {
      let new_todo = { title, text };
      if (!editedTodo?.title) {
        return [..._listTodos, new_todo];
      }
      
      let updatedListTodo = _listTodos.filter(
        (todo) => todo != editedTodo.title && todo.text != editedTodo.text
      );
      setEditedTodo({});
      return [...updatedListTodo, new_todo];
    });
  };

  const deleteTodo = (_todo) => {
    setListTodos((_listTodos) => {
      return _listTodos.filter((todo) => todo.title != _todo.title);
    });
  };

  const editTodo = (todo) => {
    setEditedTodo(todo);
  };

  useEffect(() => {
    console.table(listTodos);
  }, [listTodos]);

  return (
    <>
      <h1>React ToDoApp</h1>
      <TodoFields newTodo={newTodo} todo={editedTodo} />
      <div className="card">
        {listTodos.length > 0 && (
          <ListTodos
            todosList={listTodos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )}
        <p>Crie e organize usas tarefas!!!</p>
      </div>
    </>
  );
}

export default App;
