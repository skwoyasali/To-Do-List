import ToDoItem from './ToDoItem';

function ToDoList({ todos, onToggle, onDelete, onEdit, onStartEdit }) {
  return (
    <ul className="flex flex-col m-2 p-5">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          onStartEdit={onStartEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
