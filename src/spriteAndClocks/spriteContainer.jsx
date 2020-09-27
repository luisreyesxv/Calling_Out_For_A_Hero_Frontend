import React from 'react'
import Spritesheet from 'react-responsive-spritesheet';

const SpriteContainer =(props)=>{




    return(

        <Spritesheet
        image= {props.url}
        widthFrame= {props.width}
        heightFrame= {props.height}
        fps= {20}
        direction="forward"
        startAt={31}
        endAt={40}
        loop={true}
        isResponsive={true}
    />


    )
}

export default SpriteContainer