import React, { useState } from 'react';
import Icon1 from '../images/event.jpg';
import Icon2 from '../images/event.jpg';
import Icon3 from '../images/event.jpg';

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
} from './HighlightsElements';

const Highlights = () => {
    const  [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <EventsContainer id='highlights'>
            <EventsH1>Highlights</EventsH1>
            <EventsWrapper>
                <EventsCard>
                    <EventsIcon src={Icon1}/>
                    <EventsH2>Hackathon</EventsH2>
                    <EventsP>Description</EventsP>
                    <EventsBtnWrapper>
                        <Button 
                            to='hackathon' 
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
                    <EventsH2>Cultural</EventsH2>
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
                    <EventsH2>MUN</EventsH2>
                    <EventsP>Description</EventsP>
                    <EventsBtnWrapper>
                        <Button 
                            to='mun' 
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

export default Highlights