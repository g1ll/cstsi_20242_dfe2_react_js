/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './todoFields.css'
import  { useEffect, useRef, useState } from "react";

const TodoFields = ({ todo,newTodo }) => {
  // const [title, setTitle] = useState("");
  const inputTitle = useRef()
  const [text, setText] = useState("");

  // const handleTodoTitle = (e) => {
  //   setTitle(e.target.value);
  // };

  const handleTodoText = (e) => {
    setText(e.target.value);
  };

  const createTodo = ()=>{
   let title = inputTitle.current?.value

   if(!title || !text) return;

   newTodo({ title, text })
  //  setTitle('')
  inputTitle.current.value = '';
  setText('')
  }

useEffect(() => {
    if(todo?.title){
      // setTitle(todo.title)
      inputTitle.current.value = todo.title
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
        ref={inputTitle}
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
