import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, CardBody,CardHeader,CardFooter, Button } from 'reactstrap';



const TaskCard =(props)=>{
 


    return (
    
        <>
            <Card body  inverse color="warning" className="card w-55">
                <CardBody >
               
                    <CardHeader >{props.title}</CardHeader>
                    <CardText >{props.description}</CardText>
                    <CardText>
                        <small className="text-muted">Created {props.date}</small>
                    </CardText>
                </CardBody>
                <CardImgOverlay>
                    <img style={{maxWidth:"100%",maxHeight:"50%"}} src="https://www.onlygfx.com/wp-content/uploads/2018/04/completed-stamp-4.png"/>
                </CardImgOverlay>
                <CardFooter >
                <Button disabled={props["completed?"]} color="success">Run Quest</Button>
                </CardFooter>
        </Card>
        </>
        )


    

}

export default TaskCard