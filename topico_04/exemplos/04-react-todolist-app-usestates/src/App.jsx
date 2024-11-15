/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [listTodos, setListTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [editedTodo, setEditedTodo] = useState({});

  console.log('renderiza', { title, text });

  const createTodo = () => {
    // console.log({ title, text });
    if (!title || !text) return;
    newTodo({ title, text });
    setTitle('');
    setText('');
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
    setTitle(todo.title);
    setText(todo.text);
  };

  useEffect(() => {
    console.table(listTodos);
  }, [listTodos]);

  return (
    <>
      <h1>React ToDoApp</h1>
      <fieldset>
        <legend>Criar uma nova Tarefa</legend>
        <label>Título:</label>
        <input
          type="text"
          placeholder="Título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Texto:</label>
        <input
          type="text"
          placeholder="Texto da tarefa"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
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
          <p>Crie e organize usas tarefas!!!</p>
        )}
      </div>
    </>
  );
}

export default App;
