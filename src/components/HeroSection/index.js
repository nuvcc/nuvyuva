import React, {useState} from 'react';
import Video from '../videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    Button,
} from './HeroElements';

const HeroSection = () => {
    const  [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>NUV YUVA</HeroH1>
                <HeroP>Event Description</HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='book' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'      
                    >
                        Register Here
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection