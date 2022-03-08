import styled from 'styled-components';
import { Link } from 'react-scroll';


export const EventCategoryContainer = styled.div`
    color: #ffffff;
    background: ${({lightBg}) => (lightBg ? '#073b4c' : '#052c39')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const EventCategoryWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const EventCategoryRow = styled.div`
    display: grid;
    grid-auto-column: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 'col2'`: `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 0px;
    padding: 0px 0px;
    grid-area: col2;
    background-color: #031d26;
    // width: 500px;
    overflow: auto;
    text-align:justify;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const CategoryTitle = styled.p`
    // color: #f3f3f7;
    color: ${({ darkTitle }) => (darkTitle ? '#052c39' : '#f3f3f7')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const CategorySubtitle = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ darkSubtitle }) => (darkSubtitle ? '#139fcd' : '#139fcd')};
    
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const CategoryDescription = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkDescription }) => (darkDescription ? '#052c39' : '#f3f3f7')};
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    text-align: center;
    height: 100%;
`;

export const Img = styled.img`
    width: 300px;
    height: 300px;
    margin: 0 0 0 0;
    padding-right: 0;
    filter: blur(10px);
`;

export const TitleandRegisterButtonWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const RegisterButton = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#f3f3f7' : '#139fcd')};
    color: #031d26;
    white-space: nowrap;
    margin-top: 10px;
    padding: 10px 20px;
    width: 200px;
    font-size: 15px;
    outline: none;
    border: none;
    cursor: pointer;
    display: absolute;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#139fcd' : '#f3f3f7')};
    }
`;

export const EventTitle = styled.p`
    color: ${({ darkEventTitle }) => (darkEventTitle ? '#139fcd' : '#f3f3f7')};
    font-size: 26px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 12px;
`;

export const EventSubtitle = styled.h1`
    margin-bottom: 12px;
    font-size: 36px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ darkEventSubtitle }) => (darkEventSubtitle ? '#139fcd' : '#f3f3f7')};
    
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const EventDescription = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    color: ${({ darkEventDescription }) => (darkEventDescription ? '#139fcd' : '#f7f8fa')};
`;

export const EventCardWrapper = styled.div`
    display: grid;
    // grid-template-columns: 500px;
    grid-auto-column: minmax(auto, 1fr);
    grid-template-rows: 220px 230px 50px;
    grid-template-areas: "image" "text" "button";
    //   border-radius: 18px;
    background: #031d26;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
    text-align: center;
`;

export const EventCardImage = styled.div`
    grid-area: image;
    background-image: url(${props => props.img});
    //   border-top-left-radius: 15px;
    //   border-top-right-radius: 15px;
    background-size: cover;
`;

export const EventCardTextWrapper = styled.div`
    grid-area: text;
    margin: 10px;
`;

export const EventCardTextTitle = styled.h2`
    margin-top: 0px;
    font-size: 2rem;
    box-sizing: border-box;
    min-width: 0px;
    line-height: 1.2;
    margin: 0px;
    background: linear-gradient(
        110.78deg,
        #f3f3f7 0%,
        #f3f3f7 15%,
        #f3f3f7 40%,
        #f3f3f7 50%,
        #139fcd 60%,
        #139fcd 85%,
        #139fcd 100%
        // rgb(118, 230, 80) -1.13%,
        // rgb(249, 214, 73) 15.22%,
        // rgb(240, 142, 53) 32.09%,
        // rgb(236, 81, 87) 48.96%,
        // rgb(255, 24, 189) 67.94%,
        // rgb(26, 75, 255) 85.34%,
        // rgb(98, 216, 249) 99.57%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`;

export const EventCardTextSubtitle = styled.span`
    color: #139fcd;
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
`;

export const EventCardTextBody = styled.p`
    color: #f3f3f7;
    font-size: 15px;
    font-weight: 300;
    margin-top: 10px;
`;

export const EventCardButtonWrapper = styled.div`
    grid-area: button;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    //   border-bottom-left-radius: 15px;
    //   border-bottom-right-radius: 15px;
    background: #139fcd;
`;

export const EventCardButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #f3f3f7;
    padding: 10px;
`;

export const EventCardButtonText = styled.a`
    color: #f3f3f7;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #052c39;
    }
`;
