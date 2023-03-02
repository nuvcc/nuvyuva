import React from "react";
import { ElementCenter, HeadingTitle } from "../../styles/globalStyles";
import { Container } from "../../styles/Home/Styles";
import RegisterCard from "../RegisterCard";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import { events } from "../../data/events";
SwiperCore.use([Autoplay]);
const HighLights = () => {
  //Sample Data for Slider
  // const HighLightMap = [
  //   { id: 1, title: "Highlight 1" },
  //   { id: 2, title: "Highlight 2" },
  // ];
  return (
    <Container>
      <ElementCenter>
        <HeadingTitle>HighLights</HeadingTitle>
      </ElementCenter>

      {events[0].events.map((val, i) => {
        const {
          title,
          event_date,
          participation_type,
          description,
          image,
          registerBgCode,
          price,
        } = val;

        return (
          <div key={i}>
            <RegisterCard
              title={title}
              description={description}
              image={image}
              registerBgCode={registerBgCode}
              EventDate={event_date}
              ParticipationType={participation_type}
              Price={price}
            />
          </div>
        );
      })}
    </Container>
  );
};

export default HighLights;
