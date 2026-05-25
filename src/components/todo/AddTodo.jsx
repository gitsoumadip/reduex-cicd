import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../app/features/todo/todoSlice";

function AddTodo({ editTodo, setEditTodo }) {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    // Load selected todo into input
    React.useEffect(() => {
        if (editTodo) {
            setInput(editTodo.text);
        }
    }, [editTodo]);

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // UPDATE
        if (editTodo) {
            dispatch(
                updateTodo({
                    id: editTodo.id,
                    text: input,
                })
            );
            setEditTodo(null);
        }
        // ADD
        else {
            dispatch(addTodo(input));
        }
        setInput("");
    };

    return (
        <div className="todo-container">
            <form onSubmit={addTodoHandler} className="todo-form">
                <input
                    type="text"
                    placeholder="Enter a todo..."
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    className="todo-input"
                />
                <button type="submit" className="todo-button">
                    {editTodo ? "Update Todo" : "Add Todo"}
                </button>
            </form>
        </div>
    );
}

export default AddTodo;