import { TeamButton, TeamMemberButton, CardContainter } from "./styles";

import TeamCard from "../Card/teamCard";
import teamTestData from "../../api/teamTestData";

const MyFavorites = (props) => {
  return (
    <div>
      <TeamButton>팀</TeamButton>
      <TeamMemberButton>팀원</TeamMemberButton>
      <CardContainter>
        {teamTestData.map((item) => (
          <TeamCard data={item} />
        ))}
      </CardContainter>
    </div>
  );
};

export default MyFavorites;
