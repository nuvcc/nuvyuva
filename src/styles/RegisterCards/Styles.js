import styled from "styled-components";

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem;
  align-items: center;

  .right-side {
    padding: 1.5rem;
    width: 30%;
  }

  .left-side {
    padding: 1.5rem;
    width: 70%;
  }

  .img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .register-section {
  }

  @media (max-width: 768px) {
    .polygon {
      width: 2rem;
      height: 2rem;
    }
    padding: 3rem;
  }
`;

export const CardTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.fontColor.primary};
  font-family: "Space Grotesk", sans-serif;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SubTitleContainer = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom:1rem ;
`;

export const SubTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.fontColor.primary};

`;

export const CardDesc = styled.h4`
  min-height: 10rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.fontColor.primary};
  font-family: "Space Grotesk", sans-serif;

  @media only screen and (max-width: 768px) {
    min-height: 4rem;

  }
`;

export const ResgisterBody = styled.button`
  border: 2px solid ${({ theme }) => theme.fontColor.primary};
  color: ${({ theme }) => theme.fontColor.primary};
  border-radius: 8px;
  display: flex;
  margin-top: 1rem;
  width: 100%;

`;

export const PriceValue = styled.h6`
  font-size: 1.5rem;
  padding: 1rem;
  width: 50%;
  color: ${({ theme }) => theme.fontColor.primary};
  font-family: "Space Grotesk", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const RegisterText = styled.h6`
 font-size: 1.5rem;
  padding: 1rem;
  width: 50%;
  color: ${({ theme }) => theme.fontColor.primary};
  font-family: "Space Grotesk", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
  }
  background: ${(props) => props.bg};
  border-top-right-radius:5px;
  border-bottom-right-radius:5px

`;
