import React, { useEffect, useState } from "react";
import './Header.css'
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = (props) => {

    // const username = data?.firstName || 'ADMIN'
    const logout = () => {
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
        // window.location.reload()
    }

    return(
        <div className="container-header" >
            <div className="head">
                <h2>HELLO <br /><span className="Harsh"><strong>USER</strong></span></h2>
                <button onClick={logout}>LOGOUT</button>
            </div>
        </div>
    )
}

export default Header