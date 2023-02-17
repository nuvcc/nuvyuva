import styled from "styled-components";

export const HeadingTitle = styled.h1`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.fontColor.primary};
  font-family: "Space Grotesk", sans-serif;
`;

export const SubHeadingTitle = styled.h3`
  font-size: 3rem;
  color: ${({ theme }) => theme.fontColor.primary};
  font-family: "Space Grotesk", sans-serif;

  @media (max-width: 768px) {
    font-size: 3rem;
   
  }
`;

export const DescriptionText = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.fontColor.primary};
  font-family: "Space Grotesk", sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 2rem;

      }
  
`;

export const FooterText = styled.h5``;

export const ElementCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LabelBody = styled.div`
  z-index: 1;
  position: relative;
  /* bottom: 8rem; */
`;

export const MultiColorButton = styled.div`
  /* padding:1rem; */
  background: ${(props) => props.bg};
  width: 50%;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-left: 2px solid ${({ theme }) => theme.fontColor.primary}; */
`;

export const MultiClr = styled.button`
  /* padding:1rem; */
  border: none;
  outline: none;
  width: 50%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background: linear-gradient(180deg, #34a8d7 0%, rgba(0, 84, 118, 0.72) 100%);
`;

export const ImgLoader = styled.img`
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;
