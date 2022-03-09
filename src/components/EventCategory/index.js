import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { EventsData } from './EventsData';
import { 
    FaRupeeSign,
} from 'react-icons/fa';
import image from '../images/a.png';
import Image from 'react-bootstrap/Image'
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
    EventCardTextEventCriteria1,
    EventCardTextEventCriteria2,
    EventCardButtonWrapper,
    EventCardButton,
    EventCardButtonText,
    ImgWrap,
    Img,
} from './EventCategoryElements';

const EventCategory = ({
    bg, 
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
            {EventsData.map(data => {
                return (
                    <EventCategoryContainer bg={bg} id={data.id}>
                        <EventCategoryWrapper>
                            <EventCategoryRow imgStart={imgStart}>
                                <Column1 key={data.name}>
                                <ImgWrap>
                                    <Image src={image} fluid={true}/>

                                    {/* <Img src={image} /> */}
                                </ImgWrap>
                                <TextWrapper>
                                    <CategoryTitle darkTitle={darkTitle}>{data.name}</CategoryTitle>
                                    {/* <CategorySubtitle darkSubtitle={darkSubtitle}>{categorySubtitle}</CategorySubtitle> */}
                                    {/* <CategoryDescription darkDescription={darkDescription}>{categoryDescription}</CategoryDescription> */}
                                </TextWrapper>
                                </Column1>
                                <Column2>
                                    <Carousel fade interval='5000' touch={true} indicators={false}>
                                            {data.events.map(event => {
                                                return (
                                                    <Carousel.Item key={event.name}>
                                                        <EventCardWrapper>
                                                            <EventCardImage img={ event.image } />
                                                            <EventCardTextWrapper>
                                                                    <EventCardTextTitle darkEventTitle={darkEventTitle}>{event.name}</EventCardTextTitle>
                                                                    <EventCardTextBody darkEventDescription={darkEventDescription}>{event.description}</EventCardTextBody>
                                                                    <EventCardTextSubtitle darkEventSubtitle={darkEventSubtitle}><FaRupeeSign />{event.price}</EventCardTextSubtitle>
                                                                    <EventCardTextEventCriteria1>{event.group}</EventCardTextEventCriteria1>                    
                                                                    <EventCardTextEventCriteria2>{event.max}</EventCardTextEventCriteria2>  
                                                            </EventCardTextWrapper>
                                                            <EventCardButtonWrapper>
                                                                <EventCardButton onClick={() => window.open("https://www.nuv.ac.in/cpe-regn/")}>
                                                                    Register
                                                                </EventCardButton>
                                                            </EventCardButtonWrapper>
                                                        </EventCardWrapper>
                                                    </Carousel.Item>  
                                                );
                                            })}
                                    </Carousel>
                                </Column2>
                            </EventCategoryRow>
                        </EventCategoryWrapper>
                    </EventCategoryContainer>
                );
            })};
        </>
    )
}

export default EventCategory