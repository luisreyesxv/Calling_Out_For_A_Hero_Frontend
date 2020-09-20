import React from 'react'
import {Container, Form, FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';
  


class LogIn extends React.Component{
    constructor(props){
        super()
        this.state={
            email: "",
            password: "",
            valid: false
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
            this.props.setUserInformation(userObj.user,userObj.jwt)
        })
        .catch(this.setState({
            ...this.state,
            email: "",
            password: "",
            errorStatus: true
        }))


    }


    onChange=(e)=>{
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value,
            errorStatus: false
        })
    }









    render(){
        return(
              <Container id="login" className="userInformation" >
                <h2>Sign In</h2>
                <Form  onSubmit={this.loggingIn}>
                    <FormGroup>
                        <Label  for="emaileEmail">Email</Label>
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
}

export default LogIn