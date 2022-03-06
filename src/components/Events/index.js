import React, { useState } from 'react';
import Icon1 from '../images/event.jpg';
import Icon2 from '../images/event.jpg';
import Icon3 from '../images/event.jpg';
import Icon4 from '../images/event.jpg';

import {
    EventsContainer,
    EventsWrapper,
    EventsCard,
    EventsH1,
    EventsIcon,
    EventsH2,
    EventsP,
    EventsBtnWrapper,
    Button,
} from './EventsElements';

const Events = () => {
    const  [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <EventsContainer id='events'>
            <EventsH1>Events</EventsH1>
            <EventsWrapper>
                <EventsCard>
                    <EventsIcon src={Icon1}/>
                    <EventsH2>Cultural</EventsH2>
                    <EventsP>Description</EventsP>
                    <EventsBtnWrapper>
                        <Button 
                            to='/event' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            primary='true'      
                        >
                            View Details
                        </Button>
                    </EventsBtnWrapper>
                </EventsCard>
                <EventsCard>
                    <EventsIcon src={Icon2}/>
                    <EventsH2>Sports</EventsH2>
                    <EventsP>Description</EventsP>
                    <EventsBtnWrapper>
                        <Button 
                            to='cultural' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            primary='true'      
                        >
                            View Details
                        </Button>
                    </EventsBtnWrapper>
                </EventsCard>
                <EventsCard>
                    <EventsIcon src={Icon3}/>
                    <EventsH2>Technical</EventsH2>
                    <EventsP>Description</EventsP>
                    <EventsBtnWrapper>
                        <Button 
                            to='cultural' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            primary='true'      
                        >
                            View Details
                        </Button>
                    </EventsBtnWrapper>
                </EventsCard>
                <EventsCard>
                    <EventsIcon src={Icon4}/>
                    <EventsH2>Main Highlights</EventsH2>
                    <EventsP>Concert, Model United Nations</EventsP>
                    <EventsBtnWrapper>
                        <Button 
                            to='cultural' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            primary='true'      
                        >
                            View Details
                        </Button>
                    </EventsBtnWrapper>
                </EventsCard>
            </EventsWrapper>
        </EventsContainer>
    )
}

export default Events