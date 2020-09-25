import React,  {useState} from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, CardBody,CardHeader,CardFooter, Button, Col , 
    Modal, ModalHeader, ModalBody, ModalFooter ,
    InputGroup, InputGroupAddon, InputGroupText, Input, FormText, FormFeedback
} from 'reactstrap';
import { Link } from 'react-router-dom'




const TaskCard =(props)=>{
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [date, setDate] = useState(props.date);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");


  const toggle = () => setModal(!modal);
 
    const isCompleted =()=>{
       return props["completed?"] ? ( <CardImgOverlay>
            <img style={{maxWidth:"100%",maxHeight:"50%"}} src="https://www.onlygfx.com/wp-content/uploads/2018/04/completed-stamp-4.png"/>
        </CardImgOverlay>
        )
        : null
        }


        const onChange=(e)=>{   
            setSubmitDisabled(false)
            const choices = {title: setTitle, description: setDescription,date: setDate}

            
            if (e.target.name === "title" && e.target.value.length > 100){
                console.log('inside onChange and just triggered this')
                setErrorMessage("Please Keep Title up to 100 characters")
                setSubmitDisabled(true)

                } else if(e.target.name === "description" && e.target.value.length > 125){
                    setSubmitDisabled(true)
                    setErrorMessage( "Please Keep Description up to 125 characters")
        } else {
            choices[e.target.name](e.target.value)
        }
    }



        const cancelFunction =() =>{
            setTitle(props.title)
            setDescription(props.description);
            setDate(props.date);
            toggle()
        }

        const submitHandler=()=>{
            const newDate = new Date(date)

            const fixedDate = newDate.toISOString() 

            const body ={
                title: title,
                description: description,
                date:fixedDate
            }
            
            props.patchHandler(body,props.id)
            toggle()
            

        }

    return (
    
        <>
        <Col md={3}>
            <Card body  inverse color="warning" className="card w-75" >
                <CardBody >
               
                    <CardHeader  ><CardTitle >{props.title}</CardTitle></CardHeader>
                    <CardText >{props.description}</CardText>
                    <CardText>
                        <small className="text-muted">Created {props.date}</small>
                    </CardText>
                </CardBody>
                {isCompleted()}
                <CardFooter >
                <Link className="featured-quests-buttons" to={`/main/quests/${props.id}`} >
                <Button disabled={props["completed?"]} color="success">Run Quest</Button>
            </Link>
                
                <Button disabled={props["completed?"]} color="danger" onClick={toggle}>Edit Quest</Button>
                </CardFooter>
        </Card>
        </Col>


        
                    <Modal isOpen={modal} toggle={toggle} >
                        <ModalHeader toggle={toggle}>
                            {`Edit Quest ${props.title}`}
                            {submitDisabled ? <h4 style={{color: "red"}}>{errorMessage}</h4> : null }
                            </ModalHeader>
                        <ModalBody>
                            <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Title</InputGroupText>
                                    </InputGroupAddon>
                                    <Input name="title" value={title} onChange={onChange}/>
                            </InputGroup>
                            <FormText>(max 100 Characters)</FormText>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>Description</InputGroupText>
                                </InputGroupAddon>
                                <Input type="textarea"  name="description" value={description} onChange={onChange}/>
                            </InputGroup>
                                <FormText>(max 110 Characters)</FormText>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>Date</InputGroupText>
                                </InputGroupAddon>
                                <Input type="date" name="date" min={new Date().toISOString().split("T")[0]}  value={date} onChange={onChange}/>
                            </InputGroup>
                        </ModalBody>
                        <ModalFooter>
                        <Button color="success" onClick={submitHandler}>Finish Edit</Button>{' '}
                        <Button color="secondary" onClick={cancelFunction}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
        
        </>
        )


    

}

export default TaskCard