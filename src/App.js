import React,{useState} from 'react'
import './App.css';
// import { Button } from 'reactstrap';
import {Route, Redirect} from 'react-router-dom'
import Homepage from './HomePage/homepage'
import NavBar from './NavBar/navbar'
import LogIn from './Login/LogIn'
import Register from './Register/register'
import MainContainer from './Main/mainContainer'
import COFAHContainer from './COFAH/cofahContainer'


function App() {
  const baseAPIUrl = "http://localhost:3000/"
  const [user, setUser] = useState()
  const [token, setToken] = useState()
  const [sprite, setSprite] = useState()
  const [chosenHero, setChosenHero] = useState()

  const setUserInformation =(userObject,tokenInfo,spriteUrl,chosenHeroObj)=>{
    
    setUser(userObject)
    setToken(tokenInfo)
    setSprite(spriteUrl)
    setChosenHero(chosenHeroObj)
  }

  const updateChosenHero = (spriteUrl,chosenHeroObj) =>{
    setChosenHero(chosenHeroObj)
    setSprite(spriteUrl)
  }


  return (
    <>  
    <NavBar  user={user} />
    {console.log("this is the current state",user,"this is the token",token,"this is the sprite",sprite,"this is the chosenHero",chosenHero)}
    <Route exact path="/" render={(routerProps)=><Homepage  {...routerProps} user={user}/>} />
    <Route exact path="/login" render={(routerProps)=><LogIn {...routerProps} setUserInformation={setUserInformation} apiUrl={baseAPIUrl} user={user}/>} />
    <Route exact path="/logout" render={()=><>{setUserInformation()} Successfully Logged Out. Redirecting ... <Redirect to="/" /> </>} />
    <Route exact path="/register" render={(routerProps)=><Register {...routerProps} setUserInformation={setUserInformation} apiUrl={baseAPIUrl} user={user}/>} />
    <Route exact path={`/cofah`} render={(routerProps)=> <COFAHContainer {...routerProps} token={token} apiUrl={baseAPIUrl} sprite={sprite} chosenHero={chosenHero} updateChosenHero={updateChosenHero}/>}/>
    <Route path="/main" render={(routerProps)=> <MainContainer {...routerProps} user={user} sprite={sprite} token={token} apiUrl={baseAPIUrl} chosenHero={chosenHero} updateChosenHero={updateChosenHero}/>} />
  </>
  );
}


export default App;
