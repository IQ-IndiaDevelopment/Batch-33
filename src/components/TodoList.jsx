import React, { useState } from "react";
import Button from "./common/Button";
import List from "./common/List";

const TodoList = () => {
  const [taskList, setTasksList] = useState([]);
  const [taskName, setTaskName] = useState("");

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleClick = () => {
    const list = {
      id: Math.floor(Math.random() * 10000),
      task: taskName,
      status: false,
    };
    setTasksList([...taskList,list]);
    setTaskName("");
  };
  console.log(taskList, "taskList");

  return (
    <>
    <center>
    <div  className="bg-gradient-to-r from-green-400 via-red-500 to-black relative item- center block max-w-sm px-20 border-grey-100 rounded-lg shadow-md dark:bg-grey-700 dark:border-grey-800 dark:hover:bg-grey-700">
      <center> <br></br>
      <div> 
        <input type="text" placeholder="                  TO-DO-LIST " value={taskName} onChange={handleChange} className="border border-green-600 rounded-md h-15 w-[248px]	focus:border-green-600 focus: outline-0 focus:ring-0 w-[20%]" />
        <Button name="ADD" styles="w-30 h-6 bg-green-600 rounded-lg" onClick={handleClick} />
      </div>
      <List taskList={taskList}/></center>
    </div></center> <div>
      <img src="https://wallpapercave.com/wp/wp11400962.jpg"></img>
    </div>
    </>
    
    
  );
};

export default TodoList;
