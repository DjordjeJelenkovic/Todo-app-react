import React, { useState } from 'react'

function SingleTodo({ todo, toggleComplete, deleteTodo }) {
  // const [edit, setEdit] = useState(false);
  // const [editTodo, setEditTodo] = useStatetate(todo);
  console.log(todo)
  const handleDeleteButton = (todo) => {
    deleteTodo(todo);
  }

  return (
    <div onClick={() => handleDeleteButton(todo)}>
      {/* {edit ? (<input />) : <h3>{todo.title}</h3>} */}
      <h3>{todo.title}</h3>
      <p>{todo.text}</p>
      {/* <span onClick={}>edit</span> */}
      <input
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
      />
      <button type="submit" onClick={() => handleDeleteButton(todo)}>Delete</button>
    </div>
  )
}

export default SingleTodo