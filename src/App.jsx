import React, { useState, useEffect } from 'react'
import InputForm from './components/InputForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [titleEdit, setTitleEdit] = useState('');
  const [textEdit, setTextEdit] = useState('');
  // const [editedTodo, setEditedTodo] = useState(null);
    const [todo, setTodo] = useState(null);


  const addTodo = newTodo => {
    if (newTodo) {
      setTodos([...todos, { id: Date.now(), title: newTodo.title, text: newTodo.text, complete: false, isEditing: false }]);
    }
    console.log("todosssss", todos)
  };

  const toggleComplete = selectedTodo => {
    console.log("selectedTodo", selectedTodo)

    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
    // setEditedTodo(selectedTodo)
    console.log("updatedTodos", todos)

    console.log("todosssss", todos)

  };

  const deleteTodo = deletedTodo => {
    let updatedTodos = todos.filter(todo => todo.id != deletedTodo.id);
    setTodos(updatedTodos);
    // setTodo(undefined);

  }

  // const updateTodo = (editedTodo, property) => {
  //   let editedOldTodo = todos.map(todo => property === 'title' ? todo.title = editedTodo.title : todo.text = editedTodo.text);
  //   setTodos(editedOldTodo);
  // }
  const updateTodo = (updatedTodo) => {
    console.log("updatedTodo", updatedTodo)
    let newTodos = todos.map(todo => todo.id === updatedTodo?.id ? todo = updatedTodo : todo);
    console.log("newTodos", newTodos)

    let editedOldTodo = newTodos.find(todo => todo.id === updatedTodo?.id);
    // setEditedTodo(editedOldTodo)
    setTodo(editedOldTodo)
    setTodos(newTodos);
  }
  console.log(todos)
  console.log("todo", todo)

  // useEffect(() => {
  //   toggleComplete(editedTodo)
  
  //   // return () => {
  //   //   second
  //   // }
  // }, [editedTodo?.complete])
  
  useEffect(() => {
    updateTodo(todo)
  
    // return () => {
    //   second
    // }
  }, [todo])
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
          // setEditedTodo={setEditedTodo}
          setTodo={setTodo}
          // editedTodo={editedTodo}
          todo={todo}
        />
      {/* </div> */}
    </div>
  )
}

export default App
