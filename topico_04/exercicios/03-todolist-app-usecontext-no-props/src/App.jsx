/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef } from 'react';

import './App.css';
import TodoFields from './components/TodoFields/TodoFields';
import ListTodo from './components/ListTodo/ListTodo';
import { StateTodosList } from './context/ListTodosProvider';

function App() {
  const { listTodos } = useContext(StateTodosList);

  useEffect(() => {
    console.table(listTodos);
  }, [listTodos]);

  return (
    <>
      <h1>React ToDoApp</h1>
      <TodoFields />
      <div className="card">
        {listTodos.length > 0 ? (
          <ListTodo />
        ) : (
          <p>Crie e organize suas tarefas!!!</p>
        )}
      </div>
    </>
  );
}

export default App;
