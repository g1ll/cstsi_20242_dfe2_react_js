/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './todoFields.css'
import  { useEffect, useRef, useState } from "react";

const TodoFields = ({ todo,newTodo }) => {
  // const [title, setTitle] = useState("");
  const inputTitle = useRef()
  // const [text, setText] = useState("");
  const inputText = useRef()

  // const handleTodoTitle = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleTodoText = (e) => {
  //   setText(e.target.value);
  // };

  const createTodo = ()=>{
   let title = inputTitle.current?.value
   let text = inputText.current?.value

   if(!title || !text) return;

   newTodo({ title, text })
  inputTitle.current.value = '';
  inputText.current.value = '';
  }

useEffect(() => {
    if(todo?.title){
      inputTitle.current.value = todo.title
      inputText.current.value = todo.text
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
       ref={inputText}
      />
      <button onClick={createTodo}>
        {todo?.title? "\u270F Editar Tarefa": "+ Nova Tarefa"}
      </button>
    </div>
  );
};

export default TodoFields;
