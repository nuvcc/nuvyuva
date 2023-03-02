import React from "react";
import { ElementCenter, HeadingTitle } from "../../styles/globalStyles";
import { Container } from "../../styles/Home/Styles";
import EventHomeCard from "./EventHomeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { events } from "../../data/events";
SwiperCore.use([Autoplay]);
const EventHome = ({ title, data }) => {
  //Sample Data for Slider

  return (
    <Container >
      <ElementCenter>
        <HeadingTitle>Events</HeadingTitle>
      </ElementCenter>

      <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{clickable: true}}
        
      >
        {events.filter((val,i)=>{
          return val.title !== "Highlight Events"
        }).map((val, i) => {
          const { title, description, image } = val;

          return (
            <SwiperSlide key={i}>
              <EventHomeCard
                title={title}
                description={description}
                image={image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default EventHome;
