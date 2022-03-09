import React from "react";
import {
    AboutContainer,
    AboutWrapper,
    AboutRow,
    Column1,
    Column2,
    TextWrapper,
    Title,
    Subtitle,
    Heading,
    Content,
    Img,
} from './AboutElements';

const AboutSection = () => {
    return (
        <>
            <AboutContainer id='about'>
                <AboutWrapper>
                    <AboutRow>
                        <Column1>
                        <TextWrapper>
                            <Title>About</Title>
                            <Subtitle>Subtitle</Subtitle>
                            <Heading>Heading</Heading>
                            <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Content>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <Img src='../images/event.jpg'/>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection