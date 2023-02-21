import React from "react";
import {
  DescriptionText,
  HeadingTitle,
  SubHeadingTitle,
} from "../styles/globalStyles";
import { Container } from "../styles/Home/Styles";
import {
  TeamBody,
  TeamCard,
  TeamHeading,
  TeamHeadingDesc,
  CardTitle,
} from "../styles/Team/Styles";
import { teamMembers } from "../data/teamMembers";

const Team = () => {
  return (
    <Container>
      <TeamHeading>
        <HeadingTitle className="  w-4/5">Let's Meet Our Team</HeadingTitle>
        <TeamHeadingDesc className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          cupiditate consequuntur quis.
        </TeamHeadingDesc>
      </TeamHeading>
      {teamMembers.map((teams) => (
        <div>
          <HeadingTitle className="text-center decoration-white">
            {teams.category}
          </HeadingTitle>
          <TeamBody className=" grid md:grid-cols-3 sm:grid-cols-1  gap-8 md:gap-12">
            {teams.members.map((member) => (
              <TeamCard className="flex flex-col items-center">
                <img
                  src="/images/star-4.png"
                  className=" stars relative right-1/4 md:right-2/4"
                />
               
                <img className="team-member"  style={{height: "17rem"}} src={member.img?.length > 0 ? member.img :"/images/teamMember.png"} alt="person-name" />
                <img
                  src="/images/star-2.png"
                  className=" stars relative left-1/4  md:left-2/4"
                />
                <div className="relative bottom-8">
                  <CardTitle className="text-center">{member.name}</CardTitle>
                  <h6 className="text-sm card-Desc text-center">{member.quote}</h6>
                </div>
              </TeamCard>
            ))}
          </TeamBody>
        </div>
      ))}
    </Container>
  );
};

export default Team;
