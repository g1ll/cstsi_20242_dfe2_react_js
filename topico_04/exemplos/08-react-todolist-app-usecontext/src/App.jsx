/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef } from 'react';

import './App.css';
import TodoFields from './components/TodoFields/TodoFields';
import ListTodo from './components/ListTodo/ListTodo';
import { StateTodosList } from './context/TodosListProvider';

function App() {
  const { listTodos, newTodo, setEditedTodo } = useContext(StateTodosList);
  const inputTitle = useRef();
  const inputText = useRef();

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
      />
      <div className="card">
        {listTodos.length > 0 ? (
          <ListTodo editTodo={editTodo} />
        ) : (
          <p>Crie e organize suas tarefas!!!</p>
        )}
      </div>
    </>
  );
}

export default App;
