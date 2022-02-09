import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from "@material-ui/core";

const ToDoList = (props) => {
const [line, setLine]=useState(false);

const del=()=>{
setLine(true);
}

  return (
    <>
      <div className="icon_div">
       <Button onClick={del} id="del"><DeleteIcon/></Button>
      <li style={{ textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
