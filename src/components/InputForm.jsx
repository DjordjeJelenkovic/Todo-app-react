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
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Write your task title!" />
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Write your task!" />
      <button type="submit" onClick={handleSubmit}>Create</button>
    </div>
  )
}

export default InputField
