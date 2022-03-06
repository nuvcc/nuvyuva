import React from 'react';
import './EventCategory.css';
import { 
    EventCategoryContainer,
    EventCategoryWrapper,
    EventCategoryRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Button,
    ImgWrap,
    Img,
    EventTitle,
    EventSubtitle,
    EventDescription,
} from './EventCategoryElements';

const EventCategory = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2,
    eventtitle,
    eventsubtitle,
    eventdescription,
}) => {
  return (
    <>
        <EventCategoryContainer lightBg={lightBg} id={id}>
            <EventCategoryWrapper>
                <EventCategoryRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button 
                                to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2 className='scrollbar'>
                        {/* <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap> */}
                        <Img src={img} alt={alt}/>
                        <EventTitle>{eventtitle}</EventTitle>
                        <EventSubtitle>{eventsubtitle}</EventSubtitle>
                        <EventDescription>{eventdescription}</EventDescription>
                    </Column2>
                </EventCategoryRow>
            </EventCategoryWrapper>
        </EventCategoryContainer>
    </>
  )
}

export default EventCategory