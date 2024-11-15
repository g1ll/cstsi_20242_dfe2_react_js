import { useContext, useEffect, useRef } from 'react';
import { StateTodosList } from '../../context/ListTodosProvider';

export default function TodoFields() {
  const inputTitle = useRef();
  const inputText = useRef();
  const { editedTodo, newTodo } = useContext(StateTodosList);

  useEffect(() => {
    if (editedTodo?.title) {
      inputTitle.current.value = editedTodo.title;
      inputText.current.value = editedTodo.text;
    }
  }, [editedTodo]);

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

  return (
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
  );
}
