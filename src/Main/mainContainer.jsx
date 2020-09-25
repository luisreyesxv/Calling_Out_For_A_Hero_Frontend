import React from 'react'
import { Link } from 'react-router-dom'
import {Route, Redirect} from 'react-router-dom'
import MainPage from './mainPage'
import NewTaskForm from '../Tasks/NewTaskForm'
import TaskList from '../Tasks/TaskList'



class MainContainer extends React.Component{
    constructor(){
        super()
        this.state={
            tasks: [],
            status:"success"
        }
    }
    
    communicateWithAPI=(options, id="")=>{

       return( fetch(this.props.apiUrl+"tasks/"+id ,options)
            .then(response => {
                if(!response.ok){
                    const errorMessage = response.status === 401 ? "Quest was not able to be created. Please Try Again." : "Server. Please Try again later"
                    throw Error(errorMessage)
                } else {
                    return response.json()
                }})
        )
    }

    postNewTask = (bodyObj) =>{
        const options = {
            method: "POST",
            headers: {
                "Authorization": this.props.token,
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({task: bodyObj})
        }

        this.communicateWithAPI(options)
        .then(taskObj => {
            const newTasks = this.state.tasks
            newTasks.unshift(taskObj)
            console.log("this is communicating with post action. the following is newTasks",newTasks,"this is current state",this.state.tasks)
            this.setState({
                ...this.state,
                tasks: newTasks,
                status:"success"
            })
        })
        .catch(()=>{
            this.setState({
            ...this.state,
            status:"fail"
            
        })})



    }   
            patchTask =(bodyObj,id)=>{
                const options = {
                    method: "PATCH",
                    headers: {
                        "Authorization": this.props.token,
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({task: bodyObj})
                    }

                this.communicateWithAPI(options,id)
                .then(taskObj => {
                    const newTasks = this.state.tasks
                    const taskIndex = newTasks.findIndex((task)=> task.id === id)
                    newTasks[taskIndex] = taskObj
                    this.setState({
                        ...this.state,
                        tasks: newTasks,
                        status:"success"
                    })
                })
            }

    fetchAllTasks =()=>{
        const options = {
            method: "GET",
            headers: {
                "Authorization": this.props.token,
                // "Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxOTh9.qyERkbxVZ1fnCwgOIcrNirgcbA5FVHIINl77ukwTrOM",
                "Content-Type": "application/json",
            }
        }

        this.communicateWithAPI(options).then(tasksObj => {            
            this.setState({
            ...this.state,
            tasks: tasksObj
        })})
    }



    componentDidMount(){
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
            <Route exact path={`${this.props.match.url}/quests/new`} render={(routerProps)=> <NewTaskForm {...routerProps} token={this.props.token} postNewQuest={this.postNewTask} lengthOfTasks={this.state.tasks.length} postStatus={this.state.status} sprite={this.props.sprite}/>} />
            <Route exact path={`${this.props.match.url}/quests`} render={(routerProps)=> <TaskList {...routerProps} tasks={this.state.tasks} patchTask={this.patchTask} />} />
            <Route exact path={this.props.match.url} render={(routerProps)=> <MainPage {...routerProps}  sprite={this.props.sprite}/>} />
            </>
        )
    }
}
// MainContainer.defaultProps= {
//     sprite: {url: "/images/testknightsprite.png",
//             width: 740,
//             height: 508,
//             ["missing?"]: true}
//   }

export default MainContainer