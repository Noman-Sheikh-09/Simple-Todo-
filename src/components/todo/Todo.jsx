import React from "react";
import { useState } from "react";
import { addTodo, deleteTodo } from "../../store/actions/TodoActions";
import { useDispatch } from "react-redux";
import "./Todo.css";
export default function Todo() {
  const [inputData, setinputData] = useState("");
  const dispatch = useDispatch();
  console.log(inputData);
  return (
    <div>
      <div className="bg">
        <h1 style={{ color: "white", marginLeft: "35%", fontSize: "50px" }}>
          {" "}
          A Simple Todo App{" "}
        </h1>
        <input
          type="text"
          placeholder="Add..."
          value={inputData}
          className="input"
          onChange={(event) => setinputData(event.target.value)}
        />

        <button onClick={() => dispatch(addTodo(inputData), setinputData(""))}>
          Add{" "}
        </button>
      </div>
    </div>
  );
}
