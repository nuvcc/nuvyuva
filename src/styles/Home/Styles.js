import styled from "styled-components";

export const ImgBG = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  /* background-image: url("./images/BackgroundImg.png"); */
  padding-top: 3rem;
  .logo-counter {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      height: 25rem;
      width: 40rem;
    }
  }

  @media (max-width: 768px) {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0;
    margin: 0;
    position: relative;
    img {
      height: 100%;
      width: 100%;
    }
    .banner{
      position:absolute;
      bottom: 0;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 35vh;
  }
`;

export const NUVLogo = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url("./images/yuva-logo.png");
`;

export const Container = styled.div`
  padding: 1.25rem;

  /* margin-top: 2.5rem; */
`;

export const AboutUsBody = styled.div`
  /* display: flex; */
  /* justify-content: space-between;
  align-items: center; */
  padding: 0 3.5rem;

  .side-1 {
    /* width: 75%; */
    padding: 2rem;
  }

  .side-2 {
    /* width: 25%; */
    padding: 1rem;

    img {
      height: 15rem;
      width: 15rem;

      @media screen and (max-width: 768px) {
        height: 18rem;
        width: 18rem;
      }
    }
  }
`;

export const CounterBlock = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  font-family: "Space Grotesk", sans-serif;
  .timer-block {
    /* width: 4rem; */
    width: 100%;
    text-align: center;
  }
  h1 {
    color: #fff;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 1rem;
    text-align: center;
  }
  span {
    color: #fff;
    width: 100%;
    text-align: center;
  }
`;

export const LocationBody = styled.div`
  height: 600px;
  background: url(image.png);
  margin: 2rem 10rem;
  border-radius: 40px;
  text-align: center;
  filter: drop-shadow(30px 44px 60px rgba(50, 115, 146, 0.3));
`;
export const LText = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 100px;
  text-align: center;
  color: #ffffff;
`;

export const LocationCard = styled.div`
  background-color: #ffffff;
  width: 10rem;
  height: 4rem;
  font-size: 1rem;
  p {
    margin: 2px;
  }
  a {
    display: block;
    margin: 10px;
    text-decoration: underline;
    color: blue;
  }
`;

export const FooterDiv = styled.div`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  padding: 2rem 0;

  a{
    border-bottom: 1px solid #fff;
   }

`;
