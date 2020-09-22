import React from 'react'
import { Redirect } from 'react-router-dom';
import {Container, Form, FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';
  


class LogIn extends React.Component{
    constructor(){
        super()
        this.state={
            email: "",
            password: "",
            errorStatus: false
        }
    }

    loggingIn=(e)=>{
        e.preventDefault()
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
           console.log(userObj)
            this.props.setUserInformation(userObj.user,userObj.jwt,userObj.sprite,userObj.chosen_hero)
        })
        .catch(()=>{
           
            this.setState({
            ...this.state,
            email: "",
            password: "",
            errorStatus: "true"
            
        })})
        


    }


    onChange=(e)=>{
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value,
            errorStatus: false
        })
    }


    checkingIfLoggedin=()=>{
        return this.props.user ? (
        <>
        "Already Logged In. Redirecting you to the Main Page"
        <Redirect to="/" />
        </>
        )        
        : 
        (
            <Container id="login" className="userInformation" >
                <h2>Sign In</h2>
                <Form  onSubmit={this.loggingIn}>
                    <FormGroup>
                        <Label  for="email">Email</Label>
                        <Input invalid={this.state.errorStatus}type="email" name="email" id="email" placeholder="example@email.com"  value={this.state.email} onChange={this.onChange}/>
                        <FormFeedback invalid>Email/password combination is invalid. Please Try Again.</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="password"  value={this.state.password}  onChange={this.onChange}/>
                    </FormGroup>
                    <Button style={{background: "#D2691E"}}>Submit</Button>
                </Form>
              </Container>
        )
        

    }

   




    render(){
        return(
            <div className="loginScreen">
              {this.checkingIfLoggedin()}
              <img id="loginPhoto" src="/images/shopper.png"  alt="Shop Keeper"/>
              </div>
    )
    }
}

export default LogIn