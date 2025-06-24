import React from "react";
import './Failed.css'

const Failed = ({data}) => {

    return(
                <div className="tasklist-failed">
                    <div className="head-card">
                        <h5>{data.category}</h5>
                        <p>{data.taskDate}</p>
                    </div>
                    <div className="body-card">
                        <h5>{data.taskTitle}</h5>
                        <p>{data.taskDescription}</p>
                    </div>
                    <div className="mark">
                        <button className="completedfailedtask">FAILED</button>
                        
                    </div>
                </div>
    )
}

export default Failed