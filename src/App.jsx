import React, { useState } from 'react'
// import EditTodo from './components/EditTodo';
import InputField from './components/InputForm'
import TodoList from './components/TodoList'
// import TodoInList from './components/TodoInList'

function App() {
  const [todos, setTodos] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [titleEdit, setTitleEdit] = useState('');
  const [textEdit, setTextEdit] = useState('');
  const [editedTodo, setEditedTodo] = useState(null);

  const addTodo = newTodo => {
    if (newTodo) {
      setTodos([...todos, { id: Date.now(), title: newTodo.title, text: newTodo.text, complete: false }]);
    }
    console.log(todos)
  };

  const toggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = deletedTodo => {
    let updatedTodos = todos.filter(todo => todo.id != deletedTodo.id);
    setTodos(updatedTodos);
  }

  // const updateTodo = (editedTodo, property) => {
  //   let editedOldTodo = todos.map(todo => property === 'title' ? todo.title = editedTodo.title : todo.text = editedTodo.text);
  //   setTodos(editedOldTodo);
  // }
  const updateTodo = (editedProp) => {
    let editedOldTodo = todos.map(todo => todo.id === editedTodo.id ? { ...todo, title: editedProp } : todo);
    setTodos(editedOldTodo);
  }
  console.log(todos)

  return (
    <div className="todo-app">

      <h1>
        Todo list
      </h1>
      <div className='flex flex-col'>
        <InputField addTodo={addTodo} />
        <div className='list-and-edit flex flex-row'>
          <div className='w-4/12'>
            <TodoList
              todos={todos}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              setEditedTodo={setEditedTodo}
              editedTodo={editedTodo}
            />
          </div>
          <div className='w-8/12'>
            {/* <TodoInList
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            /> */}
            {/* <SingleTodo
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            /> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
