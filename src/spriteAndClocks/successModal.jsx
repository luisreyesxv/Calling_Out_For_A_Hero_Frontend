import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, ButtonGroup,
    Modal, ModalBody,ModalHeader, ModalFooter,
    Popover, PopoverHeader, PopoverBody
} from 'reactstrap'
import SpriteContainer from '../spriteAndClocks/spriteContainer'


const SuccessModal =(props)=>{

    return(
        <Modal key={props.sprite} isOpen={true} centered id="cofah-success-sprite-container" >
                <ModalHeader style={{border:"none"}} id="successful-COFAH-head"> 
                    {props.adventure ? <h3>Quest Complete!</h3> : 
                        <h3>{props.chosenHero.name} Has Answered the Call!</h3>
                    }
                </ModalHeader>
                <ModalBody id="successful-COFAH">
                    <Row className="row justify-content-between "  >
                        <Col  xl={12} id={props.divName}>
                             <div >
                                 {props.adventure ?
                                    <>
                                        <SpriteContainer key="successful-cofah-avatar" {...props.sprite} status="cofah" divName= "cofah-success-avatar-container" />
                                        <SpriteContainer key="successful-cofah-avatar" url={'/images/treasure.png'} height={106} width={141} steps={1} status="rescue" divName= "cofah-success-avatar-container" />
                                    </>
                                    :
                                    <SpriteContainer key="successful-cofah-avatar" {...props.sprite} status="cofah" divName= "cofah-success-avatar-container" /> 
                                }


                            </div>
                            
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter style={{border:"none"}} id="successful-COFAH-footer">
            <ButtonGroup>
                <Button id="successful-COFAH-menu-button" tag={Link} to={props.link1.url}> {props.link1.text} </Button>
                <Button id="successful-COFAH-task-button" tag={Link} to={props.link2.url}> {props.link2.text}</Button>
            </ButtonGroup>

                </ModalFooter>

    </Modal>
    
    )
    

}

// const SuccessModal =(props)=>{

//     return(
//         <Modal key={props.sprite} isOpen={true} centered id="cofah-success-sprite-container" >
//                 <ModalHeader id="successful-COFAH-head"> {props.chosenHero?<h3>{props.chosenHero.name} Has Answered the Call!</h3>:null}</ModalHeader>
//                 <ModalBody id="successful-COFAH">
//                     <Row className="row justify-content-between "  >
//                         <Col  xl={12} id="cofah-success-sprite-modal">
//                              <div >
//                                 <SpriteContainer key="successful-cofah-avatar" {...props.sprite} status="cofah" divName= "cofah-success-avatar-container" />
//                                  <SpriteContainer key="successful-cofah-avatar" {...props.sprite} status="cofah" divName= "cofah-success-avatar-container" />
//                             </div>
                            
//                         </Col>
//                     </Row>
//                 </ModalBody>
//                 <ModalFooter id="successful-COFAH-footer">
//             <ButtonGroup>
//                 <Button id="successful-COFAH-menu-button" tag={Link} to={props.link1.url}> {props.link1.text} </Button>
//                 <Button id="successful-COFAH-task-button" tag={Link} to={props.link2.url}> {props.link2.text}</Button>
//             </ButtonGroup>

//                 </ModalFooter>

//     </Modal>
    
//     )
    

// }

export default SuccessModal