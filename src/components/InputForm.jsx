import React, { useState, useRef, ChangeEvent, FormEvent } from 'react'

function InputField({ addTodo }) {
  // const [newTodo, setNewTodo] = useState<ITodo>();
  const titleRef = useRef()
  const textRef = useRef()

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   // setNewTodo(e.target.value);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // addTodo(newTodo);
    let todoObject = {};
    todoObject.title = titleRef?.current.value;
    todoObject.text = titleRef.current?.value;

    // const newTodo.title = titleRef.current.value;
    titleRef.current.value = '',
      textRef.current.value = '',
      addTodo(todoObject);
  };

  return (
    <div>
      {/* <input type="text" ref={titleRef} placeholder="Write your task title!" onChange={handleChange} /> */}
      <input type="text" ref={titleRef} placeholder="Write your task title!" />
      <input type="text" ref={textRef} placeholder="Write your task!" />
      <button type="submit" onClick={handleSubmit}>Create</button>
    </div>
  )
}

export default InputField
