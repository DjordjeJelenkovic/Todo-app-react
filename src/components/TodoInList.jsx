import React, { useEffect, useState } from 'react'

function TodoInList({ todo, toggleComplete, deleteTodo, setEditedTodo, updateTodo }) {
  const [showEdit, setShowEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.title);

  if (showEdit) {
    setEditedTodo(todo)
  }

  function handleSubmit() {
    updateTodo(editTodo)
  }
  const handleDeleteButton = (todo) => {
    deleteTodo(todo);
  }

  // {
  // if (edit) {
  //   document.querySelector(".edit-input").addEventListener("keydown", listener)
  // }
  // useEffect(() => {
  // const listener = event => {
  //   if (event.code === "Enter" || event.code === "NumpadEnter") {
  //     console.log("Enter key was pressed. Run your function.");
  //     event.preventDefault();
  //     // callMyFunction();
  //     setEditTodo(event.target.value)
  //   }
  // };
  // return () => {
  //   document.querySelector(".edit-input").removeEventListener("keydown", listener);
  // };
  // }, [])) : null;
  // : null;


  // }
  return (
    <form onSubmit={handleSubmit}>
      {showEdit
        ? <input className="edit-input" value={editTodo} onChange={(e) => setEditTodo(e.target.value)}
        />
        : <h3 onClick={() => {
          setEditedTodo(todo)
          setShowEdit(true)
        }}>{todo.title}</h3>}
      {/* <h3>{todo.title}</h3> */}
      <p>{todo.text}</p>
      {/* <span onClick={}>edit</span> */}
      <input
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
      />
      <button type="submit" onClick={() => handleDeleteButton(todo)}>Delete</button>
      {/* <button type="submit" onClick={() => updateTodo(editTodo)}>Edit</button> */}
      <button type="submit">Edit</button>
    </form>
  )
}

export default TodoInList