import React from 'react'
import { Link } from 'react-router-dom'
import {Route, Redirect} from 'react-router-dom'
import MainPage from './mainPage'



class MainContainer extends React.Component{
    constructor(){
        super()
        this.state={
            tasks: []
        }
    }


    componentDidMount(){
        console.log( "Main Container just mounted. should make this a fetch")
    }

    render(){
        return(
            <>
            
            <Route exact path={`${this.props.match.url}/tasks`} render={(routerProps)=> <MainPage {...routerProps} />} />
            <Route exact path={this.props.match.url} render={(routerProps)=> <MainPage {...routerProps}  sprite={this.props.sprite}/>} />
            </>
        )
    }
}


export default MainContainer