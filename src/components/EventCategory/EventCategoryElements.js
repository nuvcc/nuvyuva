import styled from 'styled-components';
import { Link } from 'react-scroll';


export const EventCategoryContainer = styled.div`
    color: #ffffff;
    background: ${({lightBg}) => (lightBg ? '#f3f3f7' : '#052c39')};

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
    grid-auto-column:minmax(auto, 1fr);
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
    margin-bottom: 15px;
    padding: 15px 15px;
    grid-area: col2;
    background-color: #031d26;
    width: 600px;
    height: 600px;
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
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const TitleandRegisterButtonWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const RegisterButton = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#ffffff' : '#139fcd')};
    color: #031d26;
    white-space: nowrap;
    margin-left: 20px;
    padding: 10px 20px;
    font-size: 15px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#139fcd' : '#ffffff')};
    }
`;

export const EventTitle = styled.p`
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const EventSubtitle = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ darkText }) => (darkText ? '#010606' : '#f7f8fa')};
    
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const EventDescription = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;
