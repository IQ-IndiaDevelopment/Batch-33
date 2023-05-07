import React from "react";

const List = ({ taskList }) => {
    console.log(taskList,"tasklist")
  return (
    <div>
      {taskList?.map((item) => {
        return (
          <div>
            <p>{item?.task}</p>
            <p>{item?.status ? "Completed" : "Not Completed"}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
