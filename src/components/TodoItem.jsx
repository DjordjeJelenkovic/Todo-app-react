import React from 'react'

function TodoItem({ todo, toggleComplete, deleteTodo }) {

  const handleDeleteButton = (todo) => {
    deleteTodo(todo);
  }

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.text}</p>
      <input
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
      />
      <button type="submit" onClick={() => handleDeleteButton(todo)}>Delete</button>
    </div>
  )
}

export default TodoItem