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
    
        communicateWithAPI=(options, id="",route="tasks")=>{

        return( fetch(this.props.apiUrl+route+"/"+id ,options)
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
                const newShowcaseTasks = this.state.showcaseTasks
                const todayDate = new Date().toISOString().split("T")[0]
                newTasks.unshift(taskObj)

                if( new Date(taskObj.date).toISOString().split("T")[0] === todayDate && !taskObj["completed?"]){
                    newShowcaseTasks.unshift(taskObj)
                }


                console.log("this is communicating with post action. the following is newTasks",newTasks,"this is current state",this.state.tasks)
                this.setState({
                    ...this.state,
                    tasks: newTasks,
                    showCaseTasks: newShowcaseTasks,
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


        patchChosenHero=(bodyObj,id)=>{
            const options = {
                method: "PATCH",
                headers: {
                    "Authorization": this.props.token,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({chosen_hero: bodyObj})
                }
            this.communicateWithAPI(options,id,"chosen_heros")
            .then(chosenhero=> {

                this.props.updateChosenHero(chosenhero.sprite,chosenhero.chosen_hero)
                
            })



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
                {/* <Route exact path={`${this.props.match.url}/quests/:id`} render={(routerProps)=> <AdventureContainer {...routerProps}   chosenHero={this.props.chosenHero} sprite={this.props.sprite} tasks={this.state.tasks} patchTask={this.patchTask} patchChosenHero={this.patchChosenHero}/>} /> */}
                <Route exact path={`${this.props.match.url}/quests/:id`} render={(routerProps)=> <AdventureContainer {...routerProps}   chosenHero={{"id":63,"user_id":196,"hero_id":209,"name":"Elfberto","reputation":34}} sprite={{"url":"http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBQZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--66127009b3c7d5e1ef4bbadd1dba508b7e648c5b/elf%201.png","width":816.8,"height":593.5}} tasks={this.state.tasks} patchTask={this.patchTask} patchChosenHero={this.patchChosenHero}/>} />

                <Route exact path={`${this.props.match.url}/quests`} render={(routerProps)=> <TaskList {...routerProps} sprite={this.props.sprite} tasks={this.state.tasks} patchTask={this.patchTask} />} />
                <Route exact path={this.props.match.url} render={(routerProps)=> <MainPage {...routerProps}  sprite={this.props.sprite} tasks={this.state.showcaseTasks} patchTask={this.patchTask}/>} />
                </Switch>
            )
        }
    }


export default MainContainer