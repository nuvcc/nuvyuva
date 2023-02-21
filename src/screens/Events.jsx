import React from "react";
import RegisterCard from "../components/RegisterCard";
import { ElementCenter, HeadingTitle } from "../styles/globalStyles";
import { Container } from "../styles/Home/Styles";
import { events } from "../data/events";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { EventContainer } from "../styles/Eventcard/Styles";

const Events = () => {
  const location = useLocation();
  const { query } = queryString.parse(location.search);
  const queryEvents = query
    ? events.filter((event) => event.title === query)
    : events;
  return (
    <Container>
      <EventContainer>
        {queryEvents.map((val, i) => {
          const { title, events } = val;
          return (
            <div key={title}>
              <div className="text-center ">
                <ElementCenter>
                  <img
                    src="/images/star-3.png"
                    className=" stars relative top-10 right-36"
                    alt="polygonimg"
                  />
                  <HeadingTitle className="mt-20">{title}</HeadingTitle>
                </ElementCenter>
              </div>
              <div className="px-20 ml-24"></div>
              <div className=" px-20 flex flex-row-reverse">
                <img
                  src="/images/star-2.png"
                  className="stars relative right-16"
                  alt="polygonimg"
                />
              </div>

              {events.map((val, i) => {
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
            </div>
          );
        })}
      </EventContainer>
    </Container>
  );
};

export default Events;
