/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';

import './App.css';
import TodoFields from './components/TodoFields/TodoFields';
import ListTodo from './components/ListTodo/ListTodo';

function App() {
  const [listTodos, setListTodos] = useState([]);
  const inputTitle = useRef();
  const inputText = useRef();
  const [editedTodo, setEditedTodo] = useState({});

  console.log('renderiza', [
    inputTitle.current?.value,
    inputText.current?.value,
  ]);

  const createTodo = () => {
    let title = inputTitle?.current?.value;
    let text = inputText?.current?.value;

    if (!title || !text) return;

    newTodo({ title, text });
    inputTitle.current.value = '';
    inputText.current.value = '';
  };

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
    inputTitle.current.value = todo.title;
    inputText.current.value = todo.text;
  };

  useEffect(() => {
    console.table(listTodos);
  }, [listTodos]);

  return (
    <>
      <h1>React ToDoApp</h1>
      <TodoFields
        inputTitleRef={inputTitle}
        inputTextRef={inputText}
        createTodo={createTodo}
        editedTodo={editedTodo}
      />
      <div className="card">
        {listTodos.length > 0 ? (
          <ListTodo
            listTodos={listTodos}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ) : (
          <p>Crie e organize suas tarefas!!!</p>
        )}
      </div>
    </>
  );
}

export default App;
