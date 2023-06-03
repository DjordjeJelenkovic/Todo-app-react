import React, { useEffect, useState } from 'react'

function TodoInList({ todo, toggleComplete, deleteTodo, setEditedTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.title);


  function handleSubmit(e) {
    e.preventDefault();

    console.log(e)
    setIsEditing(true)
    // setEditedTodo(editTodo)
    // console.log("editTodo", editTodo)

    updateTodo(editTodo)
    setIsEditing(false)
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
    <div className="border-2 border-gray-300 p-4 my-2 rounded shadow-md">
      {isEditing
        ?
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input autofokus className="border p-2 my-2 rounded shadow-sm" 
                 value={editTodo} 
                 onChange={(e) => setEditTodo(e.target.value)} 
          />
          <button className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-700" type="submit">Save</button>
        </form>
        : (
          <>
            <h3 className="font-bold text-lg cursor-pointer" onClick={() => {
              setEditedTodo(todo)
              setIsEditing(true)
            }}>{todo.title}</h3>
            <p className="my-2">{todo.text}</p>
            <label className="inline-flex items-center mt-3">
              <input type="checkbox"
                     onChange={() => toggleComplete(todo)}
                     checked={todo.complete}
                     className="form-checkbox h-5 w-5 text-gray-600"
              /><span className="ml-2 text-gray-700">Complete</span>
            </label>
            <div className="flex justify-between mt-4">
              <button onClick={() => handleDeleteButton(todo)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                Delete
              </button>
              <button onClick={() => {
                setEditedTodo(todo)
                setIsEditing(true)
              }} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                Edit
              </button>
            </div>
          </>
        )}
    </div>
  )
}

export default TodoInList