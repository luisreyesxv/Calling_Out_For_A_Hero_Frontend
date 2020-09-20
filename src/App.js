import React,{useState} from 'react'
import './App.css';
// import { Button } from 'reactstrap';
import {Route, Redirect} from 'react-router-dom'
import Homepage from './HomePage/homepage'
import NavBar from './NavBar/navbar'
import LogIn from './Login/LogIn'
import Register from './Register/register'

function App() {
  const baseAPIUrl = "http://localhost:3000/"
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const setUserInformation =(userObject,tokenInfo)=>{
    console.log("this is from APP component, and it just ran", userObject,tokenInfo, token)
    setUser(userObject)
    setToken(tokenInfo)
  }


  return (
    <>  
    <NavBar  user={user} name={"luis"} />
    <Route exact path="/" render={()=><Homepage user={user}/>} />
    <Route exact path="/login" render={(routerProps)=><LogIn {...routerProps} setUserInformation={setUserInformation} apiUrl={baseAPIUrl} user={user}/>} />
    <Route exact path="/logout" render={()=><>{setUserInformation()} Successfully Logged Out. Redirecting ... <Redirect to="/" /> </>} />
    <Route exact path="/register" render={(routerProps)=><Register {...routerProps} setUserInformation={setUserInformation} apiUrl={baseAPIUrl}/>} />
  </>
  );
}

export default App;
