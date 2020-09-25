import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MainPage from './mainPage'
import NewTaskForm from '../Tasks/NewTaskForm'
import TaskList from '../Tasks/TaskList'
import AdventureContainer from '../Adventure/AdventureContainer'



class MainContainer extends React.Component{
    constructor(){
        super()
        this.state={
            tasks: [],
            showcaseTasks: [],
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
                body: JSON.stringify({task: bodyObj},null,0)
                }

            this.communicateWithAPI(options,id)
            .then(taskObj => {
                const newTasks = this.state.tasks
                const todayTasks = this.state.showcaseTasks
                const taskIndex = newTasks.findIndex((task)=> task.id === id)
                const todayIndex = todayTasks.findIndex((task)=> task.id === id)
                const todayDate = new Date().toISOString().split("T")[0]

                newTasks[taskIndex] = taskObj
                if (todayIndex >=0){
                    if( new Date(taskObj.date).toISOString().split("T")[0] === todayDate && !taskObj["completed?"]){
                    todayTasks[todayIndex]= taskObj
                    }else{
                        todayTasks.splice(todayIndex,1)
                    }
                
                } else if (new Date(taskObj.date).toISOString().split("T")[0] === todayDate && !taskObj["completed?"]){
                    todayTasks.push(taskObj)
                }
                this.setState({
                    ...this.state,
                    tasks: newTasks,
                    showcaseTasks: todayTasks,
                    status:"success"
                })
            })
        }

        fetchAllTasks =()=>{
            const options = {
                method: "GET",
                headers: {
                    // "Authorization": this.props.token,
                    "Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxOTZ9.GVL0anlxiHYb9bbZNQ3GI05gvWmVxDkWc4JtE_dI2AY",
                    "Content-Type": "application/json",
                }
            }

            this.communicateWithAPI(options).then(tasksObj => {   
                
                const todayDate = new Date().toISOString().split("T")[0]

                const  todaysTasks= tasksObj.filter((task)=> ( new Date(task.date).toISOString().split("T")[0] === todayDate && !task["completed?"]))


                this.setState({
                ...this.state,
                tasks: tasksObj,
                showcaseTasks: todaysTasks
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
                <Switch>
                <Route exact path={`${this.props.match.url}/quests/new`} render={(routerProps)=> <NewTaskForm {...routerProps} token={this.props.token} postNewQuest={this.postNewTask} lengthOfTasks={this.state.tasks.length} postStatus={this.state.status} sprite={this.props.sprite}/>} />
                <Route exact path={`${this.props.match.url}/quests/:id`} render={(routerProps)=> <AdventureContainer {...routerProps}   sprite={this.props.sprite} tasks={this.state.showcaseTasks} patchTask={this.patchTask}/>} />

                <Route exact path={`${this.props.match.url}/quests`} render={(routerProps)=> <TaskList {...routerProps} sprite={this.props.sprite} tasks={this.state.showcaseTasks} patchTask={this.patchTask} />} />
                <Route exact path={this.props.match.url} render={(routerProps)=> <MainPage {...routerProps}  sprite={this.props.sprite} tasks={this.state.showcaseTasks} patchTask={this.patchTask}/>} />
                </Switch>
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