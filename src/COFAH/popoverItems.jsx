import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody, Col } from "reactstrap";

const PopoverItem = props => {
  const { id, item } = props;
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);
    console.log( "i'm inside the popover, this is the text", props.item.text)
  return (
    <Col md={2} > 
    <span>
      
         <img id={"Popover-" + id} src= {item.url}/>
      
      <Popover
        placement="auto"
        isOpen={popoverOpen}
        target={"Popover-" + id}
        toggle={toggle}
        trigger="legacy"
      >
        <PopoverHeader>{item.house}</PopoverHeader>
        <PopoverBody>
          <p>{item.text}</p>
          <Button block disabled >Submit</Button>
        </PopoverBody>
      </Popover>
    </span>
    </Col>
  );
};

export default PopoverItem;