import React, { useContext } from "react";
import './Alltask.css'
import { AuthContext } from "../../context/AuthProvider";

const Alltask = () => {

    const [userdata, setUserdata] = useContext(AuthContext)


    return (
        <div className="container-alltask">
            <div className="all">
                <div className="task">
                    <p>EMPLOYEE NAME</p>
                    <h3>NEW TASK</h3>
                    <h5>ACTIVE TASK</h5>
                    <h5>COMPLETED TASK</h5>
                    <h5>FAILED TASK</h5>
                </div>
                <div className="all-content" id="parent-admin">
                {userdata.map(function(elem, idx){
                    return <div key={idx} className="task">
                    <p>{elem.firstName}</p>
                    <h3>{elem.taskCounts.newTask}</h3>
                    <h5>{elem.taskCounts.active}</h5>
                    <h5>{elem.taskCounts.completed}</h5>
                    <h5>{elem.taskCounts.failed}</h5>
                </div>
                })}
                
                </div>
            </div>
        </div>
    )
}

export default Alltask