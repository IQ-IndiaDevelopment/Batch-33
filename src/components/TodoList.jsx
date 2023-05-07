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
    <div>
      <div>
        <input type="text" value={taskName} onChange={handleChange} />
        <Button name="ADD" styles="" onClick={handleClick} />
      </div>
      <List taskList={taskList}/>
    </div>
  );
};

export default TodoList;
