import React, { useState } from 'react'

function SingleTodo({ todo, setTodo, toggleComplete, deleteTodo, updateTodo }) {
  // const [edit, setEdit] = useState(false);
  // const [editedTodo, setEditedTodo] = useState(todo);
  // const [editedTodoTitle, setEditedTodoTitle] = useState(todo.title);
  // const [editedTodoText, setEditedTodoText] = useState(todo);

  // const { title, text } = todo

  // useEffect(() => {
    
  // }, [todo])
  
  const handleDeleteButton = (todo) => {
    deleteTodo(todo);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(e)
    // setIsEditing(true)
    // console.log("editedTodoTitle", editedTodoTitle)
    // console.log("editedTodoText", editedTodoText)
// console.log("editedTodo", editedTodo)
    // console.log("editedTodoText", editedTodoText)
    // setEditedTodo({ ...todo, text: editedTodoText.text})
    // console.log("editTodo", editTodo)
    // console.log(editedTodo)

    updateTodo({...todo, isEditing: false})
    // setIsEditing(false)
  }
console.log("todo", todo)
// console.log("editedTodo", editedTodo)

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
    <div className="border-2 border-gray-300 p-8 my-4 rounded shadow-lg max-w-2xl mx-auto">
            {/* {edit ? (<input />) : <h3>{todo.title}</h3>} */}
      {/* <h3 className="font-bold text-2xl">{title}</h3> */}
      <input autofokus className="border p-2 my-2 rounded shadow-sm" 
                 value={todo?.title} 
                //  onChange={(e) => setEditedTodoTitle(e.target.value)} 
                // onChange={(e) => setEditedTodo((todo) => { return {...todo, title: e.target.value }})}
                onChange={(e) => setTodo((todo) => { return {...todo, title: e.target.value }})} 
 

          />
      {/* <p className="my-4 text-lg">{text}</p> */}
            {/* <span onClick={}>edit</span> */}
      {/* <textarea id={todo.id} name="" rows="9" cols="50">{text}</textarea> */}
      <textarea 
        id={todo?.id}
        name="" 
        rows="9" 
        cols="50"
        value={todo?.text} 
        // onChange={(e) => setEditedTodoText(e.target.value)} 
        // onChange={(e) => {setEditedTodo((todo) => { return {...todo, text: e.target.value }})
        onChange={(e) => {setTodo((todo) => { return {...todo, text: e.target.value }})

        console.log("e.target.value", e.target.value)
      }} 

      />

      <label className="inline-flex items-center mt-4">
        <input
          type="checkbox"
          // onChange={(e) => {e.target.checked === false ? setEditedTodo((todo) => { return {...todo, complete: false }}) 
          // : setEditedTodo((todo) => { return {...todo, complete: true }})
          onChange={(e) => {e.target.checked === false ? setTodo((todo) => { return {...todo, complete: false }}) 
          : setTodo((todo) => { return {...todo, complete: true }})
          console.log("e.target.value", e.target.value)}}
          // onChange={(e) =>{ 
          //   console.log("e", e)

          //   toggleComplete(todo)
          //   console.log("todo", todo)
          // }
          // }
          checked={todo?.complete} 
          className="form-checkbox h-5 w-5 text-gray-600"
        /><span className="ml-2 text-gray-700 text-lg">Complete</span>
      </label>
      <button onClick={() => handleDeleteButton(todo)} 
              className="bg-red-500 text-white px-6 py-3 text-lg rounded hover:bg-red-700 mt-6">
        Delete
      </button>
      <button className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-700" type="submit">Save</button>
    </div>
    </form>

  )
}

export default SingleTodo
