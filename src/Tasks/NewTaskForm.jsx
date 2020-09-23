import React from 'react'
import { Redirect } from 'react-router-dom';
import {Container, Form, FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';

class NewTaskForm extends React.Component{
    constructor(){
        super()
        this.state={
            title: "",
            description: "",
            date: ""
        }
    }


    render(){

        return(
            <h1> New Task Form</h1>
        )
    }
}

export default NewTaskForm