import React, { useContext, useState } from 'react';
import Login from './components/auth/Login';
import Employee from './components/dashboard/Employee';
import Admin from './components/dashboard/Admin';
import { useEffect } from 'react';
import { setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  // useEffect(()=>{
  //   setLocalStorage()
  // }, )


  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggenInUserdata] = useState(null)
  const [userdata, setUserdata] = useContext(AuthContext)
  
  useEffect(()=>{
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userdata = JSON.parse(loggedInUser)
        setUser(userdata.role)
        setLoggenInUserdata(userdata.data)
      }
    },[])


  const handleLogin = (email,password) => {
    if(email=='admin@me.com' && password=='admin123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(userdata){
      const employee = userdata.find((e)=>email==e.email && e.password==password)
      if(employee){
        setUser('employee')
        setLoggenInUserdata(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
      }
    }else{ 
      alert('Invalid Credentials')
    }
  }

  
  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'employee' && <Employee changeUser={setUser} data={loggedInUserData}/>}
      {user === 'admin' && <Admin changeUser={setUser}/>}
    </>
  )
}

export default App