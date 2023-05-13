import React, { useState } from 'react'

function SingleTodo({ todo, toggleComplete, deleteTodo }) {
  // const [edit, setEdit] = useState(false);
  // const [editTodo, setEditTodo] = useStatetate(todo);
  console.log(todo)
  const handleDeleteButton = (todo) => {
    deleteTodo(todo);
  }
  const { title, text } = todo
  console.log(title)
  console.log(text)

  return (
    <div>
      {/* {edit ? (<input />) : <h3>{todo.title}</h3>} */}
      <h3>{title}</h3>
      <p>{text}</p>
      {/* <span onClick={}>edit</span> */}
      <input
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
      />
      <button onClick={() => handleDeleteButton(todo)}>Save</button>
    </div>
  )
}

export default SingleTodo