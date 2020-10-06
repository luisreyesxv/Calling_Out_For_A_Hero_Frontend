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
            status:"",
            playlist: "https://api.soundcloud.com/playlists/300494469"
        }
    }
    
    addingMusicToState=(playlist)=>{
        this.setState({
            ...this.state,
            playlist: playlist
        })
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
            .then(Obj => {
                console.log(Obj.sprite)
                const taskObj = Obj.task
                const spriteObj = Obj.sprite
                const chosenHero = Obj.chosen_hero
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
                },()=> this.props.updateChosenHero(spriteObj,chosenHero))
            })
        }

        fetchAllTasks =()=>{
            const options = {
                method: "GET",
                headers: {
                    "Authorization": this.props.token,
                    // "Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMzB9.yeWND_iTiWh-80-zVeHqQIN-EQFy9rW9gPOv_l-8uhY",
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
                <Route exact path={`${this.props.match.url}/quests/:id`} render={(routerProps)=> <AdventureContainer {...routerProps}   chosenHero={this.props.chosenHero} sprite={this.props.sprite} tasks={this.state.tasks} patchTask={this.patchTask} patchChosenHero={this.patchChosenHero} music={this.state.playlist}/>} />
                {/* <Route exact path={`${this.props.match.url}/quests/:id`} render={(routerProps)=> <AdventureContainer {...routerProps}   chosenHero={{"id":67,"user_id":200,"hero_id":213,"name":"Elfberto","reputation":34}} sprite={{"url":"http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBRZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--34806bcbf486b237b0458f2215f6d2394bea1c16/elf%201.png","width":816.8,"height":593.5}} tasks={this.state.tasks} patchTask={this.patchTask} patchChosenHero={this.patchChosenHero}/>} /> */}

                <Route exact path={`${this.props.match.url}/quests`} render={(routerProps)=> <TaskList {...routerProps} sprite={this.props.sprite} tasks={this.state.tasks} patchTask={this.patchTask} />} />
                <Route exact path={this.props.match.url} render={(routerProps)=> <MainPage {...routerProps}  sprite={this.props.sprite} tasks={this.state.showcaseTasks} patchTask={this.patchTask} chosenHero={this.props.chosenHero} addPlaylist={this.addingMusicToState}/>} />
                </Switch>
            )
        }
    }


export default MainContainer

MainContainer.defaultProps={
    token: 
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyOTR9.-jvFz7ym-MH3NbvlwkOUb9cnTObU1SXa2--HdvHKfrk",
    chosenHero: {"id":156,"user_id":294,"hero_id":252,"name":"Elfberto","reputation":34,"flavor":{"trait":"I am always willing to act in accordance with the financial incentive offered. Also, I can't think of anything to look forward to.","bond":"I face danger and evil to offset an unredeemable act in my past.","flaw":"There's no room for caution in a life lived to the fullest."}},
    tasks: [{"id":445,"user_id":294,"title":"Call Out For A Hero ","description":"Welcome to Calling Out For A Hero. After you have called out to a hero Go to the Hall of Quests and register a new quest. Schedule it for whenever you want and build up your reputation.","date":"2020-10-01","completed?":false,"created_at":"2020-10-01T19:44:53.992Z","updated_at":"2020-10-01T19:44:53.992Z","flavor":"A sage named Criphreusim seeks a company of adventurers to rescue the elven town of Lechy from Shaka the Lich Tyrant."},{"id":448,"user_id":294,"title":"Call Out For A Hero ","description":"Welcome to Calling Out For A Hero. After you have called out to a hero Go to the Hall of Quests and register a new quest. Schedule it for whenever you want and build up your reputation.","date":"2020-10-01","completed?":true,"created_at":"2020-10-01T19:44:54.013Z","updated_at":"2020-10-01T19:44:54.013Z","flavor":"An elven lady named Bruocha seeks a company of adventurers to thwart the monstrous plan of Sisigoia the Unspeakable. However, her information is completely wrong."}],
    sprite: 
    {"width":204.2,"height":148.33333333,"steps":10,"url":"http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBhUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eadd794c0b5712b4920d59e5ff4b78efc1782f9a/elf%201.png"}

}

