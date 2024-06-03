import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import axios from "axios";
import { Todo } from "./components/Todo";
//https://sum-server.100xdevs.com/todos
//"http://localhost:3000/api/v1/todos"
function App() {
  const [todos, setTodos] = useState([]);
  // const fetchFnc = async () => {
  //   const response = axios.get("https://sum-server.100xdevs.com/todos")
  //   .then((data)=>{
  //     console.log(data.data.response);
  //     setTodos(data.data.response)
  //   }) 
  // }
  const fetchFnc = () => {
    fetch("http://localhost:3000/api/v1/todos").then(async (res) => {
      const json = await res.json();
      console.log(json);
      setTodos(json.response);
      console.log(todos);
    });
  }
  useEffect(fetchFnc, []);

  return (
    <div className=" flex flex-col bg-blue-300 items-center m-auto w-full h-full p-20">
      <div className=" w-[50%]">
        <CreateTodo fetchHandler={fetchFnc}></CreateTodo>
        <Todo fetchHandler = {fetchFnc} todos={todos}></Todo>
      </div>
    </div>
  );
}

export default App;
