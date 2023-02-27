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
        <img src="/images/schedule_crop.png" alt="schedule-timline"/>
      </ElementCenter>
    </>
     
      
   
  );
};

export default Schedule;
