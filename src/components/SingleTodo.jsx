import React from 'react'

function SingleTodo({ todo, toggleComplete, deleteTodo }) {
  // const [edit, setEdit] = useState(false);
  // const [editTodo, setEditTodo] = useStatetate(todo);
  const handleDeleteButton = (todo) => {
    deleteTodo(todo);
  }
  const { title, text } = todo

  return (
    <div className="border-2 border-gray-300 p-8 my-4 rounded shadow-lg max-w-2xl mx-auto">
            {/* {edit ? (<input />) : <h3>{todo.title}</h3>} */}
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="my-4 text-lg">{text}</p>
            {/* <span onClick={}>edit</span> */}
      <textarea id="" name="" rows="9" cols="50">{text}</textarea>
      <label className="inline-flex items-center mt-4">
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
          className="form-checkbox h-5 w-5 text-gray-600"
        /><span className="ml-2 text-gray-700 text-lg">Complete</span>
      </label>
      <button onClick={() => handleDeleteButton(todo)} 
              className="bg-red-500 text-white px-6 py-3 text-lg rounded hover:bg-red-700 mt-6">
        Delete
      </button>
    </div>
  )
}

export default SingleTodo
