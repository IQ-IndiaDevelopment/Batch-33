import { useRef, useState } from "react";
import { useEffect } from "react";
import Button from "./component/common/button";
import List from "./component/list";
const Todolist = (i) => {
  const todos = JSON.parse(window.localStorage.getItem('MyList') || "[]");
   /*------------------------------------------------------------------------
                           Start of Hooks.
    ------------------------------------------------------------------------*/
   
    const [task,setTask]= useState(""); //useState(todos);
    const [tasksList,setTasksList]=useState(todos);
    console.log(tasksList);
   
   useEffect(() => {
    localStorage.setItem("MyList", JSON.stringify(tasksList));
    },[tasksList])

    /*------------------------------------------------------------------------
                                   End of Hooks.
    ------------------------------------------------------------------------*/


    /*------------------------------------------------------------------------
                           Start of Event Handlers.
    ------------------------------------------------------------------------*/
    const handleChange=(e)=>{
          setTask(e.target.value);
    }   

    const handleClick =() => {
        if (task == "") return alert ("Please Add Task ");
        const list ={
            id:Math.floor(Math.random()*10000),
            name:task,
            status:false,
        };
        setTasksList([...tasksList,list]);
        setTask("");
    }
       

    const handleEdit=(e)=>{
      alert("Editing");
      tasksList.map((item)=> {
        if(item?.id == e.target.value){item.status= true}
    })
    setTasksList([...tasksList,]); 
  }
  
  const handleDelete=(e)=>{
    const remainingTask = tasksList.filter((item)=>{if(item.id != e.target.value) return tasksList})
    setTasksList(remainingTask);
  }
  
  const handleDeleteAll=()=>{
      return setTasksList([]);      
  }

/*------------------------------------------------------------------------
                           End of Event Handlers.
------------------------------------------------------------------------*/
    return (
        <div>
        <div className="flex flex-col items-center my-0 mx-auto max-w-[480px] py-16 px-8 container">
          <h1 className="text-white text-5xl mb-8 pb-2 transition-colors ease-in-out duration-[0.4s] font-permanentMaker border-b-[2px] border-b-green hover:text-green">
            Todo App
          </h1>
          
            <input
              className="w-full h-12 px-4 py-1 rounded-md border border-green-100 text-gray-800 focus:outline-none"
              
              placeholder="What is in your mind?" value={task} onChange={handleChange}
            />
            <Button name="Add Task" value="" styles="bg-green w-full h-8 px-4 py-1 rounded-md my-3 text-white hover:bg-opacity-90" onClick={handleClick}/>   
           </div>
           <div className="w-full">
                {tasksList.length?<List taskList={tasksList}  handleDelete={handleDelete} handleEdit={handleEdit} handleDeleteAll={handleDeleteAll}/>:<h2 className="text-white text-center text-5xl mb-8 pb-2 transition-colors ease-in-out duration-[0.4s] font-permanentMaker border border-green hover:text-green">No Task in ToDo List</h2>}
           </div>
           </div>
      );
  };

export default Todolist;