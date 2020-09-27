import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, CardBody,CardHeader,CardFooter, Button, Col} from 'reactstrap';

const Bio =(props)=>{



    return(
      
        
        <div className="wrapper">
    <div className="poster">
      
      
      <div className="chosenHero-Name">{props.name}</div>
      <div className="reputation">Things You Need to Know About Me</div>
      <div className="bio">
        {props.flavor.trait} 
      </div>
      <div className="reputation">Flaws:</div>
      <div className="bio">
        {props.flavor.flaw} 
      </div>

      <div className="reputation">Things You Need to Know About Me</div>
      <div className="bio">
        {props.flavor.bond} 
      </div>
      <div className="reputation">Reputation: {props.reputation}</div>


      

    </div> 
  </div> 
  
  



    )
}

export default Bio


  // <>
        //     <h1>Name: {props.name}</h1>
        //     <h3>Bio: {props.flavor.trait}</h3>
        //     <h3>About Me: {props.flavor.bond}</h3>

        //     <h4>Flaws: {props.flavor.flaw}</h4>
        //     <h2> Reputation: {props.reputation}</h2>
        // </>
{/* <>
                    <CardTitle  ><h1>Elfberto</h1></CardTitle>
        <Card body  inverse color="primary"   >
                <CardBody >
               
                    <CardText >Bio: I don't like to bathe.I ask a lot of questions.</CardText>
                    <CardText >About Me: I will become the greatest thief that ever lived.</CardText>
                    <CardText >Flaws: I put too much trust in the people who give me orders..</CardText>

                    <CardText>
                    <em >Reputation 34 {props.date}</em>
                    </CardText>
                </CardBody>
                
                
        </Card>
        </> */}