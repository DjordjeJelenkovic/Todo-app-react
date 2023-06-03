import React, { useState } from 'react'
import InputForm from './components/InputForm'
import TodoList from './components/TodoList'

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
    let newTodos = todos.map(todo => todo.id === editedTodo.id ? { ...todo, title: editedProp } : todo);
    let editedOldTodo = newTodos.find(todo => todo.id === editedTodo.id);
    setEditedTodo(editedOldTodo)
    setTodos(newTodos);
  }
  console.log(todos)

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-4xl font-bold mb-4">Todo List</h1>
      <div>
        <InputForm addTodo={addTodo} />
      </div>
      {/* <div className=""> */}
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          setEditedTodo={setEditedTodo}
          editedTodo={editedTodo}
        />
      {/* </div> */}
    </div>
  )
}

export default App
