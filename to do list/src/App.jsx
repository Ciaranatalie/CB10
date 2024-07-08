import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            value={todo}
            onChange={handleInputChange}
            placeholder="Input"
          />
          <button type="submit">ADD</button>
        </form>
        {todos.map((item, index) => (
          <div key={index} className="todo-item">
            <span>{item}</span>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
