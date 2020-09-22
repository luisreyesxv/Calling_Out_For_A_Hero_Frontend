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
  const [sprite, setSprite] = useState(null)
  const [chosenHero, setChosenHero] = useState(null)

  const setUserInformation =(userObject,tokenInfo,spriteUrl,chosenHeroObj)=>{
    
    setUser(userObject)
    setToken(tokenInfo)
    setSprite(spriteUrl)
    setChosenHero(chosenHeroObj)
  }


  return (
    <>  
    <NavBar  user={user} name={"luis"} />
    {console.log("this is the current state",user,"this is the token",token,"this is the sprite",sprite,"this is the chosenHero",chosenHero)}
    <Route exact path="/" render={(routerProps)=><Homepage  {...routerProps} user={user}/>} />
    <Route exact path="/login" render={(routerProps)=><LogIn {...routerProps} setUserInformation={setUserInformation} apiUrl={baseAPIUrl} user={user}/>} />
    <Route exact path="/logout" render={()=><>{setUserInformation()} Successfully Logged Out. Redirecting ... <Redirect to="/" /> </>} />
    <Route exact path="/register" render={(routerProps)=><Register {...routerProps} setUserInformation={setUserInformation} apiUrl={baseAPIUrl} user={user}/>} />
  </>
  );
}

export default App;
