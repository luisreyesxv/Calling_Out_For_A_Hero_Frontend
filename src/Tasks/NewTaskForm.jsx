import React from 'react'
import { Redirect } from 'react-router-dom';
import {Container, Form, FormGroup, Label, Input, Button, FormFeedback,Row, Col} from 'reactstrap';

class NewTaskForm extends React.Component{
    constructor(){
        super()
        this.state={
            title: "",
            description: "",
            date: "",
            submitDisabled: false
        }
    }


    onChange=(e)=>{
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        })
    }
    submittingNewQuest=(e)=>{

    }






    render(){

        return(
            <>
            <h1> New Task Form</h1>
            <Container id="New-Quest-Form" className="userInformation" >
            
            <Form  onSubmit={this.submittingNewQuest}>
                <Row form >
                    <Col xl={12} >
                        <FormGroup > 
                                <h2>Register New Quest</h2> 
                        </FormGroup >
                    </Col> 
             </Row>
             <Row form className="row justify-content-center">
                    <Col xl={8} sm={8} md={8} >
                        <FormGroup >
                            <Label  for="title"><h5>Title</h5></Label>
                            <Input   invalid={this.state.errorStatus} type="title" name="title" id="title" placeholder="Title For Quest"  value={this.state.title} onChange={this.onChange}/>
                        </FormGroup>
                    </Col> 
            </Row>
            <Row form className="row justify-content-center">
                <Col xl={12} sm={10} md={12}>
                    <FormGroup >
                        <Label  for="description"><h5>Description</h5></Label>
                        <Input type="textarea" name="description" id="description" placeholder="Specify What the Quest is About" value={this.state.description} onChange={this.onChange}/>
                    </FormGroup>
                </Col> 
            </Row>
               
            <Row form className="row justify-content-center">
                <Col xl={4} sm={8}  md={8}>
                    <FormGroup>
                        <Label for="date"><h5>Date</h5></Label>
                        <Input type="date" name="date" id="date" value={this.state.date} min={new Date().toISOString().split("T")[0]} onChange={this.onChange}/>
                    </FormGroup>
                </Col> 
            </Row>
                <FormGroup>
                    <Button disable= {this.state.submitDisabled} style={{background: "#D2691E"}}>Submit</Button>
                </FormGroup>
            </Form>
          </Container>
          </>
        )
    }
}

export default NewTaskForm