import React from 'react'



class LogIn extends React.Component{
    constructor(){
        super()
        this.state={
            email: "fake@email.com",
            password: "totallyfake"
        }
    }

    loggingIn=()=>{
        const LoginInfo ={
            email: this.state.email,
            password: this.state.password
        }
        const options={
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({user: LoginInfo})
        }


        fetch(this.props.apiUrl +"login", options)
        .then(response => response.json())
        .then(userObj => {
            console.log("the fetch just happened, this is what it gave us",userObj)
            this.props.setUserInformation(userObj.user,userObj.jwt)
        })


    }









    componentDidMount(){
        console.log("login sheet just loaded")
        
    }


    render(){
        return(
        <>
            <h3 style={{color:"purple"}}>Log In sheet </h3>
            {this.state.username}
            {this.state.password}
            {/* {this.loggingIn()} */}
         </>   
    )
    }
}

export default LogIn