import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap'
import Banner from './banner'
// import {SpriteAnimator} from 'react-sprite-animator'
import SpriteContainer from '../spriteAndClocks/spriteContainer'

const Homepage = () =>{




    return(
    //     <div>
    //         <h1>This is my homepage</h1>
    //         Calling out for a hero, coming soon
    // <img alt="beginning sprite" src="http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9a6b855051ac18a44fadb0867a516973e3cfe4a5/pirate.PNG" />
    //     </div>
    <>
   
    
        <Banner />
        <Container>
            <Row style={{"marginTop":"10%"}} className="row justify-content-between"  noGutters={false} >
                <Col md="6" style={{background:"green"}}> 
                    <SpriteContainer key="demoHero" url="/images/testknightsprite.png" width={740} height= {508} />
                </Col>
                <Col md="4" style={{background:"orange"}} offset="1"> another random avatar</Col>
            </Row>
 
               
            <Row  >
                <Col>
                <Jumbotron >
                    <p>
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words



                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words



                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    </p>
                    <p>
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words



                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words



                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    A crap ton of words
                    </p>
                    lol what?
                    </Jumbotron>


                </Col>
            </Row>

            <Row style={{"marginTop":"5"}} className="row justify-content-between"  noGutters={true} >
                <Col md="4" style={{background:"yellow"}}>
                    <Link to="/login" >
                        <Button block style={{background: "#D2691E"}} size="lg">
                            Log In
                        </Button>
                    </Link>
                </Col>
                <Col md="4"  > 
                    <Link to="/register" >
                        <Button block style={{background: "#D2691E"}} size="lg">
                            Register New Account
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
</>
    )
}

export default Homepage