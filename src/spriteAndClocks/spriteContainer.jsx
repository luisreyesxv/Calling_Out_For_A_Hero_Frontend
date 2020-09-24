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
        startAt={21}
        endAt={30}
        loop={true}
        isResponsive={true}
    />


    )
}

export default SpriteContainer