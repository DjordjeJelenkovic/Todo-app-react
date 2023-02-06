import React, { useState } from 'react'
import InputField from './components/InputForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = newTodo => {
    if (newTodo) {
      setTodos([...todos, { id: Date.now(), text: newTodo.text, complete: false }]);
    }
    console.log(todos)
  };

  const toggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = deletedTodo => {
    let updatedTodos = todos.filter(todo => todo.id != deletedTodo.id);
    setTodos(updatedTodos);
  }

  return (
    <div className="todo-app">

      <h1>
        Todo list
      </h1>
      <InputField addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
