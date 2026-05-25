import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../app/features/todo/todoSlice";

// function Todos() {
//   const todos = useSelector((state) => state.todos.todos);

function Todos({ setEditTodo }) {
    const todos = useSelector(
        (state) => state.todos.todos
    );
    // }

    const dispatch = useDispatch();

    return (
        <>
            <h2>Todos</h2>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>
                            X
                        </button>
                        <button
                            onClick={() => setEditTodo(todo)}
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;