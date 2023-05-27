import React from "react";
import Button from "./common/button";


const List = ({taskList,handleDelete,handleEdit,handleDeleteAll} )=>{
    
    return (
        <div>
        <div className="grid grid-cols-8"> 
            {taskList.map((items)=>{
                    return (
                        <div className="col-span-2 bg-white mx-4 my-4 h-36 rounded-3xl border border-4 border-green">
                           <p className="w-full mx-2 my-2">
                            <span className="text-green text-lg font-bold">Task Name:</span>
                            <span className="text-lg font-medium">{items.name}</span>
                            </p>
                           <p className="w-full mx-2 my-2">
                            <span className="text-green text-lg font-bold">Task Status</span>
                            <span className="text-lg font-medium">{items.status?"Complete":"Uncomplete"}</span>
                            </p>
                            <div className="flex">
                               <Button name="Edit" value={items?.id} styles="bg-green w-24 h-6 mx-6 my-4 rounded-md  text-white hover:bg-opacity-90" onClick={handleEdit}/>
                               <Button name="Delete"  value={items?.id} styles="bg-green w-24 h-6 mx-6 my-4 rounded-md  text-white hover:bg-opacity-90" onClick={handleDelete}/>
                            </div>
                        </div>
                        
                    )
                }
            )}
            

        </div>
        <div className="w-full text-white text-center text-5xl mb-8 pb-2 transition-colors ease-in-out duration-[0.4s] font-permanentMaker border border-green hover:text-green">
            <Button name="Delete All" value ="" styles="bg-green  h-16 mx-6 my-4 rounded-md  text-white hover:bg-opacity-90" onClick={handleDeleteAll}/>
            </div>
        </div>
    )  
};


export default List;