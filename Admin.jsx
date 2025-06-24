import React from "react";
import Alltask from "../others/Alltask";
import Header from "../others/Header";
import Createtask from "../others/Createtask";

const Admin = (props) => {

    return (
        <>
            <Header changeUser={props.changeUser}/>
            <Createtask/>
            <Alltask/>
        </>
    )
}

export default Admin