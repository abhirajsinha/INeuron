import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  return (
    <div>
      <>
      <h1>TODO APP</h1>
        <div className="flex gap-2 justify-center items-center p-5">
          <input
            type="text"
            placeholder="Enter your task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border-2 border-blue-500"
          />
          <button onClickCapture={() => dispatch(addTodo(input))} className="">
            <i className="fa fa-plus fa-plus-large"></i>
          </button>
        </div>
        {todos.map((todo) => (
          <div className="flex gap-2 justify-center items-center">
            <div key={todo.id}>{todo.text}</div>
            {/* Conditional Rendering for Cross Button */}
            {todo.text ? (
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                <i className="fa fa-minus fa-minus-large"></i>
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
      </>
    </div>
  );
}

export default Todos;
