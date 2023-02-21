import styled from "styled-components";

export const TeamHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;
export const CardTitle = styled.h4`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.fontColor.primary};
  font-family: "Space Grotesk", sans-serif;
  @media (max-width: 768px) {
    font-size: 2.8rem;
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
  .card-Desc {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.fontColor.primary};
    font-family: "Space Grotesk", sans-serif;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .team-member {
    /* width: auto; */
    height: 22rem;
    width: 18rem;
    border-radius: 16px;
    @media (max-width: 768px) {
      height: auto;
      height: 42rem;
      width: 90%;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0rem;
    .stars {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (min-width: 768px) {
    margin-top: 0rem;
    .stars {
      width: 2rem;
      height: 2.5rem;
    }
  }
`;

export const PersonImg = styled.img``;

export const PersonName = styled.h1``;

export const Quote = styled.h4``;
