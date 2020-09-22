import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap'
import Banner from './banner'
// import {SpriteAnimator} from 'react-sprite-animator'
import Spritesheet from 'react-responsive-spritesheet';

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
                
                {/* <SpriteAnimator
                style={{"border=style":"dotted","border-radius":"50%"}}
                    sprite ="/images/testknightsprite.png"
                    width={1800}
                    height={700}
                    shouldAnimate={true}
                    direction="horizontal"
                    frameCount={9}
                    fps="20"
                    scale ={5}
                    
                /> */}

<Spritesheet
    image="/images/testknightsprite.png"
    widthFrame={819.2}
    heightFrame={338}
    fps={20}
    // steps={20} this seems to go counter to endAt. may just want to use startAt and endAt. the possibility for it to be more dynamic
    direction="forward"
    startAt={51}
    endAt={60}
    loop={true}
    scale={.25}
    isResponsive={true}
    />
    


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