import React from "react";

const Button =({name,value,styles,onClick})=>{
return (
    <button className={styles} value={value} onClick={onClick}>{name}</button>
)
}

export default Button;