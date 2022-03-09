import React, { useState, useEffect } from 'react';
import './EventCategory.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { 
    EventCategoryContainer,
    EventCategoryWrapper,
    EventCategoryRow,
    Column1,
    Column2,
    TextWrapper,
    CategoryTitle,
    CategorySubtitle,
    CategoryDescription,
    EventCardWrapper,
    EventCardImage,
    EventCardTextWrapper,
    EventCardTextTitle,
    EventCardTextSubtitle,
    EventCardTextBody,
    EventCardButtonWrapper,
    EventCardButton,
    EventCardButtonText,
} from './EventCategoryElements';

const EventCategory = ({
    lightBg, 
    id, 
    imgStart, 
    categoryTitle, 
    darkTitle,
    categorySubtitle,
    darkSubtitle,
    categoryDescription,
    darkDescription,
    img1,
    img2,
    img3,
    darkEventTitle,
    darkEventSubtitle,
    darkEventDescription,
    event1title,
    event1subtitle,
    event1description,
    event2title,
    event2subtitle,
    event2description,
    event3title,
    event3subtitle,
    event3description,
}) => {

    return (
        <>
            <EventCategoryContainer lightBg={lightBg} id={id}>
                <EventCategoryWrapper>
                    <EventCategoryRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <CategoryTitle darkTitle={darkTitle}>{categoryTitle}</CategoryTitle>
                            <CategorySubtitle darkSubtitle={darkSubtitle}>{categorySubtitle}</CategorySubtitle>
                            <CategoryDescription darkDescription={darkDescription}>{categoryDescription}</CategoryDescription>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <Carousel interval='5000' touch={true} indicators={false}>
                                <Carousel.Item>
                                    <EventCardWrapper>
                                        <EventCardImage img={img1} />
                                        <EventCardTextWrapper>
                                            <EventCardTextTitle darkEventTitle={darkEventTitle}>{event1title}</EventCardTextTitle>
                                            <EventCardTextSubtitle darkEventSubtitle={darkEventSubtitle}>{event1subtitle}</EventCardTextSubtitle>
                                            <EventCardTextBody darkEventDescription={darkEventDescription}>{event1description}</EventCardTextBody>
                                        </EventCardTextWrapper>
                                        <EventCardButtonWrapper>
                                            <EventCardButton onClick={() => window.open("https://www.nuv.ac.in/cpe-regn/")}>
                                                Register
                                            </EventCardButton>
                                        </EventCardButtonWrapper>
                                    </EventCardWrapper>
                                </Carousel.Item>    
                                <Carousel.Item>
                                    <EventCardWrapper>
                                        <EventCardImage img={img2} />
                                        <EventCardTextWrapper>
                                            <EventCardTextTitle darkEventTitle={darkEventTitle}>{event2title}</EventCardTextTitle>
                                            <EventCardTextSubtitle darkEventSubtitle={darkEventSubtitle}>{event2subtitle}</EventCardTextSubtitle>
                                            <EventCardTextBody  darkEventDescription={darkEventDescription}>{event2description}</EventCardTextBody>
                                        </EventCardTextWrapper>
                                        <EventCardButtonWrapper>
                                            <EventCardButton onClick={() => window.open("https://www.nuv.ac.in/cpe-regn/")}>
                                                Register
                                            </EventCardButton>
                                        </EventCardButtonWrapper>
                                    </EventCardWrapper>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <EventCardWrapper>
                                        <EventCardImage img={img3} />
                                        <EventCardTextWrapper>
                                            <EventCardTextTitle darkEventTitle={darkEventTitle}>{event3title}</EventCardTextTitle>
                                            <EventCardTextSubtitle darkEventSubtitle={darkEventSubtitle}>{event3subtitle}</EventCardTextSubtitle>
                                            <EventCardTextBody  darkEventDescription={darkEventDescription}>{event3description}</EventCardTextBody>
                                        </EventCardTextWrapper>
                                        <EventCardButtonWrapper>
                                            <EventCardButton onClick={() => window.open("https://www.nuv.ac.in/cpe-regn/")}>
                                                Register
                                            </EventCardButton>
                                        </EventCardButtonWrapper>
                                    </EventCardWrapper>
                                </Carousel.Item>
                            </Carousel>
                        </Column2>
                    </EventCategoryRow>
                </EventCategoryWrapper>
            </EventCategoryContainer>
        </>
    )
}

export default EventCategory