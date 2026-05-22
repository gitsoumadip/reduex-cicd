import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../app/features/todo/todoSlice";

function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();

        if (!input.trim()) return;

        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <div className="todo-container">
            <form onSubmit={addTodoHandler} className="todo-form">
                <input
                    type="text"
                    placeholder="Enter a todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className=""
                />

                <button type="submit" className="todo-button">
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default AddTodo;