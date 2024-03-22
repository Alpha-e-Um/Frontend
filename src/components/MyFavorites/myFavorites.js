import { TeamButton, TeamMemberButton, CardContainter } from "./styles";

import MyFavoriteCard from "../MyPageCard/MyFavoriteCard/myFavoriteCard";
import MyTeamTestData from "../../api/myTeamTestData";

const MyFavorites = (props) => {
  var d = {
    id: 1,
    name: "홍길동",
    position: "프론트엔드 개발자",
    gender: "남성",
    location: "서울",
    introduction:
      "React와 JavaScript 경험이 있는 열정적인 프론트엔드 개발자입니다.",
    skill1: "React",
    skill2: "JavaScript",
  };

  return (
    <div>
      <TeamButton>팀</TeamButton>
      <TeamMemberButton>팀원</TeamMemberButton>
      <CardContainter>
        {MyTeamTestData.map((item) => (
          <MyFavoriteCard data={item} />
        ))}
      </CardContainter>
    </div>
  );
};

export default MyFavorites;
