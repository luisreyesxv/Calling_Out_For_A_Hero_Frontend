import React,{useState} from 'react'
import TaskCard from './TaskCard'
import TaskMedia from './taskMediaComponent'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Media
  } from 'reactstrap';



const FeaturedQuestCarousel =(props)=>{

    // const displayCards = () =>{
       
    //  return props.tasks.map(taskObj =>  <TaskCard key={taskObj.id} {...taskObj} patchHandler={props.patchTask} />)
    // }


      const [activeIndex, setActiveIndex] = useState(0);
      const [animating, setAnimating] = useState(false);
    
      const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.tasks.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.tasks.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      // const goToIndex = (newIndex) => {
      //   if (animating) return;
      //   setActiveIndex(newIndex);
      // }
    
      const slides = props.tasks.map((task) => {
        return (
          <CarouselItem 
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={task.id}
           
          >
    
                <TaskMedia key={task.id} {...task} patchHandler={props.patchTask} featured={true} />
            
          </CarouselItem>
        );
      });
    
      return (
          <>
           
            <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            
            
            
            >
          
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </>
      );
    }
    
    export default FeaturedQuestCarousel;