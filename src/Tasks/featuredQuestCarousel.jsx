import React,{useState} from 'react'
import TaskMedia from './taskMediaComponent'
import { Carousel, CarouselItem, CarouselControl} from 'reactstrap';



const FeaturedQuestCarousel =(props)=>{

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

    
      const slides = props.tasks.map((task) => {
        return (
          <CarouselItem 
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={task.id}
           
          >
    
                <TaskMedia key={task.id} {...task} first={props.first} patchHandler={props.patchTask} featured={true} />
            
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

   