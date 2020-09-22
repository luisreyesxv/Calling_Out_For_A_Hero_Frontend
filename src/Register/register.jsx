import React from 'react'
import { Redirect } from 'react-router-dom';
import {Container, Form, FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';



class Register extends React.Component{
    constructor(){
        super()
        this.state={
            name: "",
            password: "",
            password_confirmation: "",
            email: "",
            password_error: false
        }
    }

    loggingIn=(e)=>{
        e.preventDefault()
        
         if (this.state.password === this.state.password_confirmation){ 

        const RegisterInfo ={
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,

        }
        const options={
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({user: RegisterInfo})
        }


        fetch(this.props.apiUrl +"register", options)
        .then(response => response.json())
        .then(userObj => {
            this.setState({
                ...this.state,
                errorStatus: !!userObj.error
            })
            this.props.setUserInformation(userObj.user,userObj.jwt,userObj.sprite,userObj.chosen_hero)
        })
        .catch(()=>{
           
            this.setState({
            ...this.state,
            email: "",
            password: "",
            errorStatus: true
            
        })})
        
    } else {
        this.setState({
            ...this.state,
            password:"",
            password_confirmation:"",
            password_error: true
        })
    }

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
        "Already Registered. Redirecting you to the Main Page"
        <Redirect to='/main' />
        </>
        )        
        : 
        (
            <Container id="register" className="userInformation" >
                <Form  onSubmit={this.loggingIn}>
                    <FormGroup> 
                        <h2>Register New Account</h2> 
                   </FormGroup>
                    <FormGroup >
                        <Label  for="email"><h5>Email</h5></Label>
                        <Input invalid={this.state.errorStatus} type="email" name="email" id="email" placeholder="example@email.com"  value={this.state.email} onChange={this.onChange}/>
                        <FormFeedback >Email/password combination is invalid. Please Try Again.</FormFeedback>
                    </FormGroup>
                    <FormGroup >
                        <Label  for="name"><h5>Name</h5></Label>
                        <Input type="name" name="name" id="name" placeholder="Insert your name"  value={this.state.name} onChange={this.onChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password"><h5>Password</h5></Label>
                        <Input type="password" name="password" id="password" placeholder="password"  value={this.state.password}  onChange={this.onChange}/>
                        
                    </FormGroup>
                    <FormGroup>
                        <Label for="password_confirmation"><h5>Re-type Password</h5></Label>
                        <Input invalid={this.state.password_error} type="password" name="password_confirmation" id="password_confirmation" placeholder="re-type password"  value={this.state.password_confirmation}  onChange={this.onChange}/>
                        <FormFeedback>Password & Password confirmation must match.</FormFeedback>                   
                    </FormGroup>
                    <FormGroup>
                        <Button style={{background: "#D2691E"}}>Submit</Button>
                    </FormGroup>
                </Form>
              </Container>
        )
        

    }

   




    render(){
        return(
            <div className="registerScreen">
              <img id="registerPhoto" src="/images/guildmaster.png"  alt="Guildmaster"/>
              {this.checkingIfLoggedin()}
              </div>
    )
    }

}

export default Register 