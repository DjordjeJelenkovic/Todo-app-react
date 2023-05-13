import React, { useEffect, useState } from 'react'

function TodoInList({ todo, toggleComplete, deleteTodo, setEditedTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.title);

  // if (isEditing) {
  //   setEditedTodo(todo)
  // }

  function handleSubmit() {

    // e.preventDeafault();
    setIsEditing(true)
    // setEditedTodo(editTodo)
    // console.log("editTodo", editTodo)

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
    <div>
      {isEditing
        ?
        <form onSubmit={handleSubmit}>
          <input autofokus className="edit-input" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
          <button type="submit">Save</button>
        </form>
        : (
          <>
            <h3 onClick={() => {
              setEditedTodo(todo)
              setIsEditing(true)
            }}>{todo.title}</h3>
            <p>{todo.text}</p>
            <input
              type="checkbox"
              onChange={() => toggleComplete(todo)}
              checked={todo.complete}
            />
            <button onClick={() => handleDeleteButton(todo)}>Delete</button>
            {/* <button type="submit" onClick={() => updateTodo(editTodo)}>Edit</button> */}
            <button onClick={() => {
              setEditedTodo(todo)
              setIsEditing(true)
            }}>Edit</button>
          </>
        )}
    </div>
  )
}

export default TodoInList