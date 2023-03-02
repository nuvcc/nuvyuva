import React from "react";
import {
  HeadingTitle,
} from "../styles/globalStyles";
import { Container } from "../styles/Home/Styles";
import {
  TeamBody,
  TeamCard,
  TeamHeading,
  CardTitle,
} from "../styles/Team/Styles";
import { teamMembers } from "../data/teamMembers";

const Team = () => {
  return (
    <Container>
      <TeamHeading>
        <HeadingTitle className=" text-center">
          Let's Meet Our Team
        </HeadingTitle>
      </TeamHeading>
      {teamMembers.map((teams, i) => (
        <div key={i}>
          <HeadingTitle className="text-center decoration-white">
            {teams.category?.toUpperCase()}
          </HeadingTitle>
          <TeamBody
            className={`grid  sm:grid-cols-1 gap-8 md:gap-12 ${
              teams.members.length >= 3
                ? "md:grid-cols-3 justify-start": 
                 teams.members.length === 2
                  ? "md:grid-cols-2 justify-center"
                  : "md:grid-cols-1 justify-center"
                // : "md:grid-cols-3 justify-start"
            }`}
          >
            {teams.members.map((member, index) => (
              <TeamCard className="flex flex-col items-center" key={index}>
                <img
                  src="/images/star-4.png"
                  alt=""
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
                  alt=""
                />
                <div className="relative bottom-8">
                  <CardTitle className="text-center">{member.name?.toUpperCase()}</CardTitle>
                  <h6 className="mt-4 md:mt-1 text-sm card-Desc text-center">
                    {member.quote?.toUpperCase()}
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
