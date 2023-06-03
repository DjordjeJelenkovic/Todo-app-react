import React from 'react'
import TodoInList from './TodoInList'
import SingleTodo from './SingleTodo';

function TodoList({ todos, toggleComplete, deleteTodo, setEditedTodo, editedTodo, updateTodo }) {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl font-bold mb-4">Add new todo</h1>
      <div className="flex flex-row w-full">
        <div className='flex-grow w-40 '>
          <ul className="list-disc list-inside">
            {todos.map(todo => (
              <TodoInList
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                setEditedTodo={setEditedTodo}
                updateTodo={updateTodo}
              />
            ))}
          </ul>
        </div>
        <div className='flex-grow w-60 '>
          {editedTodo ? <SingleTodo
            todo={editedTodo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          /> : <span>Choose your todo from the list on the right side!</span>}
        </div>
      </div>
    </div>
  );
}

export default TodoList
