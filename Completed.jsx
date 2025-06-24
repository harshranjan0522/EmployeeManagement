import React from "react";
import './Completed.css'

const Completed = ({data}) => {

    return(
                <div className="tasklist-completed">
                    <div className="head-card">
                        <h5>{data.category}</h5>
                        <p>{data.taskDate}</p>
                    </div>
                    <div className="body-card">
                        <h5>{data.taskTitle}</h5>
                        <p>{data.taskDescription}</p>
                    </div>
                    <div className="mark">
                        <button className="completedtask">COMPLETED</button>
                        
                    </div>
                </div>
    )
}

export default Completed