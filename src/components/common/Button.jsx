import React from "react";

const Button = ({name,styles,onClick}) => {
  return <button className={`${styles} w-[250px]`} onClick={onClick}>{name}</button>;
};

export default Button;
