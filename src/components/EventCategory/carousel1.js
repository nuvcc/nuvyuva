
// import React, { useState, useEffect } from 'react';
// import './EventCategory.css';
// import data from './Data/data.js';
// import './slider.css';
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
//     TitleandRegisterButtonWrap,
//     RegisterButton,
//     EventTitle,
//     EventSubtitle,
//     EventDescription,
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
//     img,
//     alt,
//     primaryButton,
//     darkButton,
//     darkButtonText,
//     event1title,
//     event1subtitle,
//     event1description,
//     event2title,
//     event2subtitle,
//     event2description,
// }) => {

//     const [events] = useState(data);
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const lastIndex = events.length - 1;
//         if (index < 0) {
//             setIndex(lastIndex);
//         }
//         if (index > lastIndex) {
//             setIndex(0);
//         }
//     }, [index, events]);

//     useEffect(() => {
//         let slider = setInterval(() => {
//             setIndex(index + 1);
//         }, 5000);
//         return () => {
//             clearInterval(slider);
//         };
//     }, [index]);

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
//                     <Column2 className='scrollbar'>
//                         <div>
//                             <Img src={img} alt={alt}/>
//                             <TitleandRegisterButtonWrap>
//                                 <EventTitle>{event1title}</EventTitle>
//                                 <RegisterButton 
//                                     to='home'
//                                     smooth={true}
//                                     duration={500}
//                                     spy={true}
//                                     exact='true'
//                                     offset={-80}
//                                     primaryButton={primaryButton}
//                                     darkButton={darkButton}
//                                     darkButtonText={darkButtonText}
//                                 >{buttonLabel}</RegisterButton>
//                             </TitleandRegisterButtonWrap>
//                             <EventSubtitle>{event1subtitle}</EventSubtitle>
//                             <EventDescription>{event1description}</EventDescription>
//                         </div>
//                         <div>
//                         <Img src={img} alt={alt}/>
//                         <TitleandRegisterButtonWrap>
//                                 <EventTitle>{event2title}</EventTitle>
//                                 <RegisterButton 
//                                     to='home'
//                                     smooth={true}
//                                     duration={500}
//                                     spy={true}
//                                     exact='true'
//                                     offset={-80}
//                                     primaryButton={primaryButton ? 1 : 0}
//                                     darkButton={darkButton ? 1 : 0}
//                                     darkButtonText={darkButtonText ? 1 : 0}
//                                 >{buttonLabel}</RegisterButton>
//                             </TitleandRegisterButtonWrap>
//                         <EventSubtitle>{event2subtitle}</EventSubtitle>
//                         <EventDescription>{event2description}</EventDescription>
//                         </div>
//                     </Column2>
//                 </EventCategoryRow>
//             </EventCategoryWrapper>
//         </EventCategoryContainer>
//     </>
//   )
// }

// export default EventCategory

