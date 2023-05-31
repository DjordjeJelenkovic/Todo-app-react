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
    let newTodos = todos.map(todo => todo.id === editedTodo.id ? { ...todo, title: editedProp } : todo);

    let editedOldTodo = newTodos.find(todo => todo.id === editedTodo.id);

    setEditedTodo(editedOldTodo)

    setTodos(newTodos);
  }
  console.log(todos)

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>
      <div className="max-w-xl mx-auto">
        <InputField addTodo={addTodo} />
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 mr-2">
            <TodoList
              todos={todos}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              setEditedTodo={setEditedTodo}
              editedTodo={editedTodo}
            />
          </div>
          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
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
