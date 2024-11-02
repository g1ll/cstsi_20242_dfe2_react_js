/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './todoFields.css'
import  { useEffect, useState } from "react";

const TodoFields = ({ todo,newTodo }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleTodoTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleTodoText = (e) => {
    setText(e.target.value);
  };

  const createTodo = ()=>{
   newTodo({ title, text })
   setTitle('')
   setText('')
  }

useEffect(() => {
    if(todo?.title){
      setTitle(todo.title)
      setText(todo.text)
    }
}, [todo])

  return (
    <div className="todo_fields">
      <label>Título</label>
      <input
        type="text"
        name="title"
        placeholder="Título"
        onChange={handleTodoTitle}
        value={title}
      />
      <br />
      <label>Texto</label>
      <textarea
        type="text"
        name="text"
        placeholder="Texto"
        onChange={handleTodoText}
        value={text}
      />
      <button onClick={createTodo}>
        {todo?.title? "\u270F Editar Tarefa": "+ Nova Tarefa"}
      </button>
    </div>
  );
};

export default TodoFields;
