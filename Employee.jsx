import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import Tasklist from "../others/Tasklist";

const Employee = (props) => {

    return(
        <>
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNumbers data={props.data}/>
            <Tasklist data={props.data}/>
        </>
    )
}

export default Employee