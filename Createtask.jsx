import React, { useContext, useState } from "react";
import './Createtask.css'
import Failed from "../tasks/Failed";
import { AuthContext } from "../../context/AuthProvider";

const Createtask = () => {

    const [userdata, setUserdata] = useContext(AuthContext)


    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();

    const newTask = {
        taskTitle,
        taskDescription,
        taskDate,
        category,
        active: false,
        newTask: true,
        failed: false,
        completed: false,
    };

    const data = userdata
    
    data.forEach(function (elem) {
        if (assignTo === elem.firstName) {
            elem.tasks.push(newTask)
            elem.taskCounts.newTask = elem.taskCounts.newTask + 1
        }   
    });
    // localStorage.setItem('employees', JSON.stringify(data));
    console.log(data); 
    setUserdata(data)
    setAssignTo('');
    setCategory('');
    setTaskDate('');
    setTaskDescription('');
    setTaskTitle('');
    }

    return (
        <div className='container-createtask'>
            <form onSubmit={(e)=>{submitHandler(e)}} className="createform">
                <div className="left">
                    <div className="newtask">
                    <h5>TASK TITLE</h5>
                    <input 
                    value={taskTitle}
                    onChange={(e)=>{setTaskTitle(e.target.value)}}
                    type="text" placeholder="Design UI for a Landing Page"/>
                </div>
                <div className="date">
                    <h5>DATE</h5>
                    <input
                    value={taskDate}
                    onChange={(e)=>{setTaskDate(e.target.value)}}
                    type="date" />
                </div>

                <div className="assign">
                    <h5>ASSIGN TO</h5>
                    <input 
                    value={assignTo}
                    onChange={(e)=>{setAssignTo(e.target.value)}}
                    type="text" placeholder="Employee Name"/>
                </div>

                <div className="category">
                    <h5>CATEGORY</h5>
                    <input
                    value={category}
                    onChange={(e)=>{setCategory(e.target.value)}}
                    type="text" placeholder="Design, Development, ec."/>
                </div>

                </div>
                
                <div className="desc">
                    <h5>DESCRIPTION</h5>
                    <textarea
                    value={taskDescription}
                    onChange={(e)=>{setTaskDescription(e.target.value)}}
                    name="" id="" cols="30" rows="10" placeholder="The design must be well planned and simple yet eye catchy"></textarea>
                    <button>CREATE TASK</button>
                </div>
                
            </form>
        </div>
    )
}

export default Createtask