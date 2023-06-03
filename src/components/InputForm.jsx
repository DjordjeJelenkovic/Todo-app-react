import React, { useState } from 'react'

function InputField({ addTodo }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !text) return;

    addTodo({
      title,
      text
    });

    setTitle('')
    setText('')
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Write your task title!"
        className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500 flex-grow"
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your task!"
        className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500 flex-grow"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="p-2 bg-blue-500 text-white rounded shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        Create
      </button>
    </div>
  )
}

export default InputField
