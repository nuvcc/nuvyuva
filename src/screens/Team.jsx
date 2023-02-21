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
      <TeamHeading >
        <HeadingTitle className=" text-center">
          Let's Meet Our Team
        </HeadingTitle>
      </TeamHeading>
      {teamMembers.map((teams) => (
        <div>
          <HeadingTitle className="text-center decoration-white">
            {teams.category}
          </HeadingTitle>
          <TeamBody
            
            className={`grid  sm:grid-cols-1 gap-8 md:gap-12 ${
              teams.members.length == 1 ? "md:grid-cols-1 justify-center" : "md:grid-cols-3 justify-start"
            }`}
          >
            {teams.members.map((member) => (
              <TeamCard className="flex flex-col items-center">
                <img
                  src="/images/star-4.png"
                  className=" stars relative right-2/4"
                />

                <img
                  className="team-member"
                  src={
                    member.img?.length > 0
                      ? member.img
                      : "/images/teamMember.png"
                  }
                  alt="person-name"
                />
                <img
                  src="/images/star-2.png"
                  className=" stars relative left-2/4"
                />
                <div className="relative bottom-8">
                  <CardTitle className="text-center">{member.name}</CardTitle>
                  <h6 className="mt-4 md:mt-1 text-sm card-Desc text-center">
                    {member.quote}
                  </h6>
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
