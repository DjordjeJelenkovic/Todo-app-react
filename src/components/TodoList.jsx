import React, { useState } from 'react'
import TodoInList from './TodoInList'
import SingleTodo from './SingleTodo';

function TodoList({ todos, toggleComplete, deleteTodo, setTodo, todo, updateTodo }) {
  // const [isEditing, setIsEditing] = useState(false);
  // const [showWholeTodo, setShowWholeTodo] = useState(false);

  console.log("todos", todos)
  // console.log("editedTodo", editedTodo)

  return (
    <div className="flex flex-col w-full">
      {/* <h1 className="text-2xl font-bold mb-4">Add new todo</h1> */}
      <div className="flex flex-row w-full">
        <div className='flex-grow w-40 '>
          <ul className="list-disc list-inside">
            {todos.map(todo => (
              <TodoInList
                key={todo.id}
                todo={todo}
                // setEditedTodo={setEditedTodo}
                setTodo={setTodo}
                // isEditing={isEditing}
                // setShowWholeTodo={setShowWholeTodo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))}
          </ul>
        </div>
        <div className='flex-grow w-60 '>
          {todo?.isEditing ? <SingleTodo
            todo={todo}
            // setEditedTodo={setEditedTodo}
            setTodo={setTodo}
            // isEditing={isEditing}
            // setIsEditing={setIsEditing}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          /> : ( todos ? <span>Choose your todo from the list on the right side!</span> : <span>Create your first todo!</span>)}
        </div>
      </div>
    </div>
  );
}

export default TodoList
