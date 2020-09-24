import React from 'react'
import {Container, Form, FormGroup, Label, Input, Button, FormFeedback,Row, Col} from 'reactstrap';
import SpriteContainer from '../spriteAndClocks/spriteContainer'


class NewTaskForm extends React.Component{
    constructor(){
        super()
        this.state={
            title: "",
            description: "",
            date: "",
            submitDisabled: false,
            errorMessage: "Please Make Sure All Fields Are Filled In"
        }
    }


    onChange=(e)=>{
        
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value,
            submitDisabled: false,
            submitted: false,
            errorMessage: "Please Make Sure All Fields Are Filled In"
        })
    }

    submittingNewQuest=(e)=>{
        e.preventDefault()
        const date = new Date(e.target.date.value)
        const fixedDate= `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`

        let body = {
            title: e.target.title.value,
            description: e.target.description.value,
            date: fixedDate
        };
     
        if(this.state.title && this.state.description && this.state.date) {
            this.props.postNewQuest(body)
        } else{
            this.setState({ ...this.state, submitDisabled: true})
        } 


    }




    componentDidUpdate(previousProps){
        if(previousProps.lengthOfTasks !== this.props.lengthOfTasks && this.props.postStatus==="success"){
            this.setState({
                title: "",
                description: "",
                date: "",
                submitDisabled: false,
                submitted: true,
                errorMessage: "Please Make Sure All Fields Are Filled In"
            })
            console.log("this is new task form updating",this.props.lengthOfTasks)
        }else if(previousProps.lengthOfTasks === this.props.lengthOfTasks && this.props.postStatus==="fail" && previousProps.postStatus !== "fail"){
            console.log("this is what happens when the post fails")
            this.setState({
                ...this.state,
                submitDisabled: true,
                errorMessage: "There Was An Issue With Making The New Quest. Please Make Sure You Are Logged In And Try Again Later"
            })
        }

        
    }







    render(){
        return(

            <div className={"RegisterNewQuest"}>
           
            <Container id="New-Quest-Form" className="userInformation" >
            
            <Form  onSubmit={this.submittingNewQuest}>
                <Row form >
                    <Col xl={12} >
                        <FormGroup  > 
                                <h2>Register New Quest</h2> 
                                
                        </FormGroup >
                    </Col> 
             </Row>
             <Row form className="row justify-content-center">
                    <Col xl={8} sm={8} md={8} >
                        <FormGroup >
                            <Label for="title"><h5>Title</h5></Label>
                            <Input   invalid={this.state.submitDisabled} type="title" name="title" id="title" placeholder="Title For Quest"  value={this.state.title} onChange={this.onChange}/>
                            <FormFeedback invalid={this.state.submitDisabled}>{this.state.errorMessage}</FormFeedback>
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
                    <Button style={{background: "#D2691E"}}>Submit</Button>
                </FormGroup>
            </Form>
          </Container>

          {/* NEED TO FIX BELOW */}
          {this.props.sprite ? (
          <Container  >
          <Row className="row justify-content-center">
                <Col xl={3} sm={1} md={1}>
            
                <SpriteContainer key="mainChosenHero" {...this.props.sprite} />

            
                </Col> 
            </Row>
            </Container>) : null}
          </div>
        )
    }
}

export default NewTaskForm