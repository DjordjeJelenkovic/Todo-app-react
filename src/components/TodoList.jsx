import React from 'react'
import TodoInList from './TodoInList'
import SingleTodo from './SingleTodo';

function TodoList({ todos, toggleComplete, deleteTodo, setEditedTodo, editedTodo, updateTodo }) {
  console.log(todos)
  // const [editTodo, setEditTodo] = useState(null);
  console.log("editedTodo", editedTodo)
  return (
    <div>
      <div className='flex flex-col w-4/12'>
        <h1> Add new todo</h1>
        <ul>
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
      <div>
        {editedTodo ? <SingleTodo
          // key={editedTodo.id}
          todo={editedTodo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        /> : <span>Choose you todo list on the right side!</span>}
      </div>
    </div>


  );

}

export default TodoList