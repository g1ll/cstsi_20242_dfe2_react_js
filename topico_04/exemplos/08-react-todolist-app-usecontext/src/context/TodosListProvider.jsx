import { useState, createContext } from 'react';

export const StateTodosList = createContext({
  listTodos: [],
  editedTodo: {},
  newTodo: () => {},
  deleteTodo: () => {},
  setEditedTodo: () => {},
});

export const TodosListProvider = ({ children }) => {
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

  return (
    <StateTodosList.Provider
      value={{
        listTodos,
        editedTodo,
        newTodo,
        deleteTodo,
        setEditedTodo,
      }}
    >
      {children}
    </StateTodosList.Provider>
  );
};
