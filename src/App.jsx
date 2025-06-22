import { useState } from 'react';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false, editing: false }]);
      setInput('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, editing: true } : todo));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText, editing: false } : todo
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto p-4 space-y-4 bg-gray-100 rounded shadow">
      <Header />
      <div className="flex flex-col sm:flex-row items-center w-full space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button onClick={addTodo} 
        className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 cursor-pointer"
        >Add</button>
      </div>
      <ToDoList
        todos={todos}
        onToggle={toggleComplete}
        onDelete={deleteTodo}
        onEdit={editTodo}
        onStartEdit={startEditing}
      />
    </div>
  );
}

export default App;
