import React from 'react';
import './EventCategory.css';
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
    ImgWrap,
    Img,
    TitleandRegisterButtonWrap,
    RegisterButton,
    EventTitle,
    EventSubtitle,
    EventDescription,
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
    buttonLabel,
    img,
    alt,
    primaryButton,
    darkButton,
    darkButtonText,
    event1title,
    event1subtitle,
    event1description,
    event2title,
    event2subtitle,
    event2description,
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
                    <Column2 className='scrollbar'>
                        <div>
                            <Img src={img} alt={alt}/>
                            <TitleandRegisterButtonWrap>
                                <EventTitle>{event1title}</EventTitle>
                                <RegisterButton 
                                    to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primaryButton={primaryButton}
                                    darkButton={darkButton}
                                    darkButtonText={darkButtonText}
                                >{buttonLabel}</RegisterButton>
                            </TitleandRegisterButtonWrap>
                            <EventSubtitle>{event1subtitle}</EventSubtitle>
                            <EventDescription>{event1description}</EventDescription>
                        </div>
                        <div>
                        <Img src={img} alt={alt}/>
                        <TitleandRegisterButtonWrap>
                                <EventTitle>{event2title}</EventTitle>
                                <RegisterButton 
                                    to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primaryButton={primaryButton ? 1 : 0}
                                    darkButton={darkButton ? 1 : 0}
                                    darkButtonText={darkButtonText ? 1 : 0}
                                >{buttonLabel}</RegisterButton>
                            </TitleandRegisterButtonWrap>
                        <EventSubtitle>{event2subtitle}</EventSubtitle>
                        <EventDescription>{event2description}</EventDescription>
                        </div>
                    </Column2>
                </EventCategoryRow>
            </EventCategoryWrapper>
        </EventCategoryContainer>
    </>
  )
}

export default EventCategory