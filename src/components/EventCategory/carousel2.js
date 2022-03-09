// import React, { useState, useEffect } from 'react';
// import './EventCategory.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel';
// import { 
//     EventCategoryContainer,
//     EventCategoryWrapper,
//     EventCategoryRow,
//     Column1,
//     Column2,
//     TextWrapper,
//     CategoryTitle,
//     CategorySubtitle,
//     CategoryDescription,
//     Img,
//     RegisterButton,
//     EventTitle,
//     EventSubtitle,
//     EventDescription,
//     ImgWrap,
// } from './EventCategoryElements';

// const EventCategory = ({
//     lightBg, 
//     id, 
//     imgStart, 
//     categoryTitle, 
//     darkTitle,
//     categorySubtitle,
//     darkSubtitle,
//     categoryDescription,
//     darkDescription,
//     buttonLabel,
//     img1,
//     img2,
//     img3,
//     alt,
//     primaryButton,
//     darkButton,
//     darkButtonText,
//     darkEventTitle,
//     darkEventSubtitle,
//     darkEventDescription,
//     event1title,
//     event1subtitle,
//     event1description,
//     event2title,
//     event2subtitle,
//     event2description,
//     event3title,
//     event3subtitle,
//     event3description,
// }) => {
//   return (
//     <>
//         <EventCategoryContainer lightBg={lightBg} id={id}>
//             <EventCategoryWrapper>
//                 <EventCategoryRow imgStart={imgStart}>
//                     <Column1>
//                     <TextWrapper>
//                         <CategoryTitle darkTitle={darkTitle}>{categoryTitle}</CategoryTitle>
//                         <CategorySubtitle darkSubtitle={darkSubtitle}>{categorySubtitle}</CategorySubtitle>
//                         <CategoryDescription darkDescription={darkDescription}>{categoryDescription}</CategoryDescription>
//                     </TextWrapper>
//                     </Column1>
//                     <Column2>
//                         <Carousel>  
//                             <Carousel.Item>
//                                 <ImgWrap>
//                                     <Img
//                                         className="d-block w-100"
//                                         src={img1} 
//                                         alt={alt}
//                                     />
//                                     <EventTitle darkEventTitle={darkEventTitle}>{event1title}</EventTitle>
//                                 </ImgWrap>
                                
//                                 <Carousel.Caption>
//                                     <EventSubtitle darkEventSubtitle={darkEventSubtitle}>{event1subtitle}</EventSubtitle>
//                                     <EventDescription darkEventDescription={darkEventDescription}>{event1description}</EventDescription>
//                                     <RegisterButton 
//                                         to='home'
//                                         smooth={true}
//                                         duration={500}
//                                         spy={true}
//                                         exact='true'
//                                         offset={-80}
//                                         primaryButton={primaryButton ? 1 : 0}
//                                         darkButton={darkButton ? 1 : 0}
//                                         darkButtonText={darkButtonText ? 1 : 0}
//                                     >{buttonLabel}</RegisterButton>
//                                 </Carousel.Caption>
//                             </Carousel.Item>
//                             <Carousel.Item>
//                                 <Img
//                                     // className="d-block w-100"
//                                     src={img2} 
//                                     alt={alt}
//                                 />
//                                 <Carousel.Caption>
//                                     <EventTitle darkEventTitle={darkEventTitle}>{event2title}</EventTitle>
//                                     <EventSubtitle darkEventSubtitle={darkEventSubtitle}>{event2subtitle}</EventSubtitle>
//                                     <EventDescription darkEventDescription={darkEventDescription}>{event2description}</EventDescription>
//                                     <RegisterButton 
//                                         to='home'
//                                         smooth={true}
//                                         duration={500}
//                                         spy={true}
//                                         exact='true'
//                                         offset={-80}
//                                         primaryButton={primaryButton ? 1 : 0}
//                                         darkButton={darkButton ? 1 : 0}
//                                         darkButtonText={darkButtonText ? 1 : 0}
//                                     >{buttonLabel}</RegisterButton>
//                                 </Carousel.Caption>                            
//                             </Carousel.Item>
//                             <Carousel.Item>
//                                 <Img
//                                     // className="d-block w-100"
//                                     src={img3} 
//                                     alt={alt}
//                                 />
//                                 <Carousel.Caption>
//                                     <EventTitle darkEventTitle={darkEventTitle}>{event3title}</EventTitle>
//                                     <EventSubtitle darkEventSubtitle={darkEventSubtitle}>{event3subtitle}</EventSubtitle>
//                                     <EventDescription darkEventDescription={darkEventDescription}>{event3description}</EventDescription>
//                                     <RegisterButton 
//                                         to='home'
//                                         smooth={true}
//                                         duration={500}
//                                         spy={true}
//                                         exact='true'
//                                         offset={-80}
//                                         primaryButton={primaryButton ? 1 : 0}
//                                         darkButton={darkButton ? 1 : 0}
//                                         darkButtonText={darkButtonText ? 1 : 0}
//                                     >{buttonLabel}</RegisterButton>
//                                 </Carousel.Caption>                            
//                             </Carousel.Item>
//                         </Carousel>
//                     </Column2>
//                 </EventCategoryRow>
//             </EventCategoryWrapper>
//         </EventCategoryContainer>
//     </>
//   )
// }

// export default EventCategory