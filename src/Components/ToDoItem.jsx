import { useState } from 'react';

function ToDoItem({ todo, onToggle, onDelete, onEdit, onStartEdit }) {
  const [newText, setNewText] = useState(todo.text);

  return (
    <li className={`flex flex-col justify-between m-1 p-2 rounded bg-[#f2f2f2] cursor-pointer ${todo.completed ? 'bg-green-300 opacity-70 line-through' : 'bg-[#f2f2f2]'}`}>
      {todo.editing ? (
        <div>
          <input className="px-4 py-2 w-64 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" value={newText} onChange={(e) => setNewText(e.target.value)} />
          <button className='px-4 py-2 ml-3 m-2 bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 rounded text-white  hover:bg-green-600' onClick={() => onEdit(todo.id, newText)}>Save</button>
        </div>
      ) : (
        <div>
          <span className='px-4 py-2 ml-3 w-64 inline-block  bg-blue-500  rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer' onClick={() => onToggle(todo.id)}>{todo.text}</span>
          <button className='px-4 py-2 ml-3 m-2 bg-yellow-500  rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-400  hover:bg-yellow-600 cursor-pointer' onClick={() => onStartEdit(todo.id)}>Edit</button>
          <button className='px-4 py-2 ml-3 m-2 bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 rounded text-white  hover:bg-red-600 cursor-pointer' onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default ToDoItem;
