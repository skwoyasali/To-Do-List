import { useState } from 'react';

function ToDoItem({ todo, onToggle, onDelete, onEdit, onStartEdit }) {
  const [newText, setNewText] = useState(todo.text);

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {todo.editing ? (
        <>
          <input value={newText} onChange={(e) => setNewText(e.target.value)} />
          <button onClick={() => onEdit(todo.id, newText)}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
          <button onClick={() => onStartEdit(todo.id)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
