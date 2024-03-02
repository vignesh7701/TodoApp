import React from "react";
import { v4 as uuidv4 } from "uuid";

function TodoItem({ input, todos, setTodos, setInput }) {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => {
      todo.id === id ? { title, id, completed } : todo;
    });

    setTodos(newTodo);
    setEditTodo("");
  }

    const inputTextHandler = (e) => {
      setInput(e.target.value);
    };

    const whileSubmit = (e) => {
      e.preventDefault();
      if (!editTodo) {
        setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
        setInput("");
      } else {
        updateTodo(input, editTodo.id, editTodo.completed);
      }
    };
    return (
      <form onSubmit={whileSubmit}>
        <input
          type="text"
          placeholder="Enter a Todo..."
          className="task-input"
          value={input}
          required
          onChange={inputTextHandler}
        />
        <button className="button-add" type="submit">
          Add
        </button>
      </form>
    );
  };

export default TodoItem;
