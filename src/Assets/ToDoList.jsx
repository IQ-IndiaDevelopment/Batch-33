import { useState } from 'react';
import ListElem from './Common Components/ListElements';
import Buttons from './Common Components/Buttons';
const ToDo = () => {
    const [taskList, setTaskList] = useState([]);
    const [taskName, setTaskName] = useState("");
    const handleTaskChange = (e) => {
        setTaskName(e.target.value);

    }
    const handleButtonClick = () => {
        const listVal = {
            Id: Math.ceil(Math.random() * 1000000),
            Name: taskName,
            Status: false
        };
        setTaskList([...taskList, listVal]);
        setTaskName("");
    }
    console.log(taskList, "tailwlskjl");
    return (
        <div className="bg-gray-50">
            <nav className="items-center flex w-full bg-amber-500 text-center border">
                <div><img className='h-14 w-14 m-3' src="https://camo.githubusercontent.com/33e1354ddfbca41fd53e6f1c8baaa3fcadf0168f6472d97168d7e8f727c6f7bd/68747470733a2f2f692e696d6775722e636f6d2f785873574c4c472e706e67" alt="ToDoList Logo" /></div>
                <div className=''><h1 className="">TO DO List</h1></div>
            </nav>
            <div className='w-full text-center mt-4'>
                <label for="taskName">Task Name: </label>
                <input value={taskName} className="mr-3 border border-black rounded-md " type="text" id="taskName" onChange={handleTaskChange} />
                <Buttons btnName="Add Task" click={handleButtonClick} btnstyle="mt-3 w-20 border border-sky-500 rounded-md text-black bg-sky-500 focus:scale-90" />
            </div>
            <div className='w-full'>
                <ListElem listVal={taskList} />
            </div>
        </div>
    )
}
export default ToDo;