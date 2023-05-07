import React from "react";

const Button = ({name,styles,onClick}) => {
  return <button className={`${styles} w-[120px]`} onClick={onClick}>{name}</button>;
};

export default Button;
