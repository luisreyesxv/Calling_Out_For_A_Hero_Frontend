import React from 'react'
import {Container, Form, FormGroup,FormText, Label, Input, Button, FormFeedback,Row, Col} from 'reactstrap';
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

        if (e.target.id === "title" && e.target.value.length > 100){
            this.setState({ ...this.state,
                submitDisabled: true,
                errorMessage: "Please Keep Title up to 100 characters"})
            } else if(e.target.id === "description" && e.target.value.length > 125){
                this.setState({ ...this.state,
                    submitDisabled: true,
                    errorMessage: "Please Keep Description up to 125 characters"})
            } else{

        
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value,
            submitDisabled: false,
            submitted: false,
            errorMessage: "Please Make Sure All Fields Are Filled In"
        })}
    }

    submittingNewQuest=(e)=>{
        e.preventDefault()
        const fixedDate = new Date(e.target.date.value).toISOString() 
    

        let body = {
            title: e.target.title.value,
            description: e.target.description.value,
            date: fixedDate
        };
     
        if(this.state.title !== '' && this.state.description !== '' && this.state.date !== '') {
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
           
            <Container id="New-Quest-Form"  >
            
            <Form  className="userInformation" onSubmit={this.submittingNewQuest}>
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
                            <FormText>(max 100 Characters)</FormText>
                            <FormFeedback invalid={this.state.submitDisabled}>{this.state.errorMessage}</FormFeedback>
                        </FormGroup>
                    </Col> 
            </Row>
            <Row form className="row justify-content-center">
                <Col xl={12} sm={10} md={12}>
                    <FormGroup >
                        <Label  for="description"><h5>Description</h5></Label>
                        <Input type="textarea" name="description" id="description" placeholder="Specify What the Quest is About" value={this.state.description} onChange={this.onChange}/>
                        <FormText>(max 125 Characters)</FormText>
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
          
          {this.props.sprite ? (
         
          <Row className="row justify-content-center" style={{margin: "20px",marginBottom:"35px"}}>
                
            
                <SpriteContainer key="mainChosenHero" {...this.props.sprite} divName="hero-avatar-container"/>
                <SpriteContainer key="shopper" url="/images/shopper%20spritesheet.png" width={598} height= {461}  steps={10} status= "shopper" divName="hero-avatar-container"/>


            
              
            </Row>)
             : <SpriteContainer key="shopper" url="/images/shopper%20spritesheet.png" width={598} height= {461}  steps={10} status= "shopper" divName="hero-avatar-container"/>}
            </Container>)
          </div>
        )
    }
}

export default NewTaskForm