import React, { useState } from "react";
import axios from "axios";

export const CreateTodo = ({fetchHandler}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const descChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  const clickHandler = () => {
    axios.post("http://localhost:3000/api/v1/todo", {
      title: title,
      description: description,
    }).then(()=>{
        fetchHandler()
    })
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex flex-col items-center">
      <input
        className="w-[80%] mb-4 p-2 border rounded-lg"
        type="text"
        value={title}
        onChange={titleChangeHandler}
        placeholder="Title"
      ></input>
      <br />
      <input
        className="w-[80%] mb-4 p-2 border rounded-lg"
        type="text"
        value={description}
        onChange={descChangeHandler}
        placeholder="Description"
      ></input>
      <br />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={clickHandler}
      >
        Add a Todo
      </button>
      <br />
    </div>
  );
};
