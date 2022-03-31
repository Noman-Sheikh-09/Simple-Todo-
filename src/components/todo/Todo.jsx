import React from "react";
// import List from '../List/List'
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
          Add
        </button>
        <div className="list-first" style={{ display: "flex", marginLeft: "38%", marginTop: "20px",  }}>
          <h3
            style={{
              backgroundColor: "white",
              color: "black",
              width: "300px",
              height: "40px",
            }}
          >
          {inputData}
          </h3>
          <button
            onClick={() => dispatch(deleteTodo(inputData), setinputData(""))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
