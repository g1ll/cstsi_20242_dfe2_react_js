/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';

import './App.css';

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
      <fieldset>
        <legend>
          {' '}
          {editedTodo?.title ? 'Edite a' : 'Criar uma nova'} Tarefa
        </legend>
        <label>Título:</label>
        <input type="text" placeholder="Título da tarefa" ref={inputTitle} />
        <br />
        <label>Texto:</label>
        <input type="text" placeholder="Texto da tarefa" ref={inputText} />
        <hr />
        <button onClick={createTodo}>
          {editedTodo?.title ? 'Editar' : 'Criar'} Tarefa
        </button>
      </fieldset>
      <div className="card">
        {listTodos.length > 0 ? (
          <>
            <p>Suas Tarefas:</p>
            <ol>
              {listTodos.map((t, i) => (
                <li key={i}>
                  <h2>{t.title}</h2>
                  <h5>{t.text}</h5>
                  &nbsp;&nbsp;&nbsp;
                  <a href="#" onClick={() => editTodo(t)} title="Editar">
                    Editar
                  </a>
                  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                  <a href="#" onClick={() => deleteTodo(t)} title="Deletar">
                    X
                  </a>
                </li>
              ))}
            </ol>
          </>
        ) : (
          <p>Crie e organize suas tarefas!!!</p>
        )}
      </div>
    </>
  );
}

export default App;
