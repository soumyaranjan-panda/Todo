import axios from "axios";
import React from "react";

export const Todo = ({ todos, fetchHandler }) => {
  return (
    <div className="space-y-4">
      {todos.map((todo, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold mb-2">{todo.title}</h1>
          <h2 className="text-gray-700 mb-4">{todo.description}</h2>
          <button
            onClick={async () => {
              await axios
                .put("http://localhost:3000/api/v1/completed", {
                  id: todo._id,
                })
                .then(() => {
                  fetchHandler();
                });
            }}
            className={`px-4 py-2 rounded-lg ${
              todo.completed
                ? "bg-green-500 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {todo.completed ? "Completed" : "Mark as complete"}
          </button>
        </div>
      ))}
    </div>
  );
};
