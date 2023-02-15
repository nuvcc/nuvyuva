import styled from "styled-components";

export const MemoryBody = styled.div`

`;

export const TextHeading = styled.p`
margin-top: 2rem;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 57px;
  line-height: 100px;
  text-align: center;
  color: #fff;
  /* identical to box height, or 175% */
  letter-spacing: -1px;
`;

export const FlexBox = styled.div`
  /* display: flex; */
  margin: 1rem;
    
  /* justify-content: space-around; */
`;

export const MCard = styled.div`
  display: inline-block;
  margin: 1rem;
  display: block;
  width: 300px;
  
  img {
    /* width: 100%; */
    /* height: 100%; */
  }
`;

export const MCardHeading = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  padding-top: 1rem;
  font-size: 32px;
  line-height: 42px;
  color: #fff;
`;

export const MCardText = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  padding-top: 0.6rem;
  font-size: 16px;
  align-items: center;
  text-align: justify;
  color: #ffffff;
`;

export const BannerBlock = styled.div`
  background-image: url("/images/BGM.png");
  height:130px;
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 19.11px 45px rgba(246, 87, 20, 0.3));
`;
export const BannerText = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 60px;
  text-align: center;
  letter-spacing: 7px;
  color: #060919;
`;
