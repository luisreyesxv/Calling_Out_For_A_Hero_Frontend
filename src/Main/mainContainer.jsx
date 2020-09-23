import React from 'react'
import { Link } from 'react-router-dom'
import {Route, Redirect} from 'react-router-dom'
import MainPage from './mainPage'
import NewTaskForm from '../Tasks/NewTaskForm'



class MainContainer extends React.Component{
    constructor(){
        super()
        this.state={
            tasks: []
        }
    }

    fetchAllTasks =()=>{
        const options = {
            method: "GET",
            headers: {
                "Authorization": this.props.token,
                "Content-Type": "application/json",
            }
        }

        this.communicateWithAPI(options).then(tasksObj => {            
            this.setState({
            ...this.state,
            tasks: tasksObj
        })})
    }

    communicateWithAPI=(options, id="")=>{

       return( fetch(this.props.apiUrl+"tasks/"+id ,options)
        .then(response => response.json())
       )

    }


    componentDidMount(){
        console.log("LUIS", this.props.token)
        console.log("this is the mainContainer componentDidMount",this.props.token)
        this.fetchAllTasks()
    }

    componentDidUpdate(previousProps){
        if(previousProps.token !== this.props.token){
            console.log("this is the mainContainer componentDidUpdate",this.props.token)

            this.fetchAllTasks()
        }
    }

    render(){
        return(
            <>
            <Route exact path={`${this.props.match.url}/quests/new`} render={(routerProps)=> <NewTaskForm {...routerProps} token={this.props.token}/>} />
            <Route exact path={`${this.props.match.url}/quest`} render={(routerProps)=> <MainPage {...routerProps} />} />
            <Route exact path={this.props.match.url} render={(routerProps)=> <MainPage {...routerProps}  sprite={this.props.sprite}/>} />
            </>
        )
    }
}
MainContainer.defaultProps= {
    sprite: {url: "/images/testknightsprite.png",
            width: 740,
            height: 508,
            ["missing?"]: true}
  }

export default MainContainer