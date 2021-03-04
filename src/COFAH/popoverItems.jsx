import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody} from "reactstrap";

const PopoverItem = props => {
  const { id, item } = props;
  const [popoverOpen, setPopoverOpen] = useState(false);



    const submitButton =(e)=>{
        e.preventDefault()
        const body ={
            method: "specific",
            house:  id
        }
        props.callHero(body)

    }



  const toggle = () => setPopoverOpen(!popoverOpen);
  
  
  
  
  
  
    return (
    <>
      
         <img id={"Popover-" + id} src= {item.url}/>
      
      <Popover
        placement="auto"
        isOpen={popoverOpen}
        target={"Popover-" + id}
        toggle={toggle}
        trigger="legacy"
      >
        <PopoverHeader>
            <img id={"Popover-" + id} src= {item.url}/>
            {item.house}  
        </PopoverHeader>
        <PopoverBody>
          <p>{item.text}</p>
          <Button id="COFAH-submit-button" block onClick={submitButton} >Call Out To the House of {item.house}</Button>
        </PopoverBody>
      </Popover>
      </>
  );
};

export default PopoverItem;