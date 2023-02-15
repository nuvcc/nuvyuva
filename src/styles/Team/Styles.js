import styled from "styled-components";

export const TeamHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
`;
export const CardTitle = styled.h4`
  font-size: 3rem;
  color: ${({ theme }) => theme.fontColor.primary};
  font-family: "Space Grotesk", sans-serif;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
export const TeamHeadingDesc = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.fontColor.primary};
  font-family: "Space Grotesk", sans-serif;
`;

export const TeamBody = styled.div`
  margin-top: 1rem;
  padding: 1rem 8rem;
`;

export const TeamCard = styled.div`
  margin-top: 4rem;

  .card-Desc {
    font-size: 2.3rem;
    color: ${({ theme }) => theme.fontColor.primary};
    font-family: "Space Grotesk", sans-serif;
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  
  @media (max-width: 768px) {
      margin-top: 0rem;
      .stars{
        width: 2rem;
        height: 2rem;
      }
  }

  @media(min-width: 768px) and (max-width: 1024px){
    margin-top: 0rem;
      .stars{
        width: 3rem;
        height: 3rem;
      }
  }
`;



export const PersonImg = styled.img``;

export const PersonName = styled.h1``;

export const Quote = styled.h4``;
