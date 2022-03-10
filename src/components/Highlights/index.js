import React, { useState } from 'react';
import hackathon from '../images/hackathon_1.png';
import concert from '../images/concert_1.jpg';
import mun from '../images/mun_1.jpg';

import {
    HighlightsContainer,
    HighlightsWrapper,
    HighlightsCard,
    HighlightsH1,
    HighlightsIcon,
    HighlightsH2,
    HighlightsP,
    HighlightsBtnWrapper,
    HighlightsButton,
} from './HighlightsElements';

const Highlights = () => {
    const  [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HighlightsContainer id='5'>
            <HighlightsH1>Highlights</HighlightsH1>
            <HighlightsWrapper>
                <HighlightsCard>
                    <HighlightsIcon src={hackathon}/>
                    <HighlightsH2>Hackathon</HighlightsH2>
                    {/* <EventsP>Description</EventsP> */}
                    <HighlightsBtnWrapper>
                        <HighlightsButton 
                            to='hackathon' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                        >
                            Coming Soon
                        </HighlightsButton>
                    </HighlightsBtnWrapper>
                </HighlightsCard>
                <HighlightsCard>
                    <HighlightsIcon src={concert}/>
                    <HighlightsH2>Concert</HighlightsH2>
                    {/* <EventsP>Description</EventsP> */}
                    <HighlightsBtnWrapper>
                        <HighlightsButton 
                            to='cultural' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                        >
                            Coming Soon
                        </HighlightsButton>
                    </HighlightsBtnWrapper>
                </HighlightsCard>
                <HighlightsCard>
                    <HighlightsIcon src={mun}/>
                    <HighlightsH2>MUN</HighlightsH2>
                    {/* <EventsP>Description</EventsP> */}
                    <HighlightsBtnWrapper>
                        <HighlightsButton 
                            to='mun' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                        >
                            Coming Soon
                        </HighlightsButton>
                    </HighlightsBtnWrapper>
                </HighlightsCard>
            </HighlightsWrapper>
        </HighlightsContainer>
    )
}

export default Highlights