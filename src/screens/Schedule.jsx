import React from "react";
import { ElementCenter, HeadingTitle } from "../styles/globalStyles";
import { Container } from "../styles/Home/Styles";

const Schedule = () => {
  return (
    <>
     <div className="text-center ">
        <ElementCenter>
          <HeadingTitle>Event Schedule</HeadingTitle>
        </ElementCenter>
      </div>
      <ElementCenter className="mt-10">
        <img src="/images/event_chart_layout_v2_without-background.png" alt="schedule-timline"/>
      </ElementCenter>
    </>
     
      
   
  );
};

export default Schedule;
