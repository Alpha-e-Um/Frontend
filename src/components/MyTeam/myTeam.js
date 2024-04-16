import { useState } from "react";
import {
  MyTeamButton,
  MyTeamLabel,
  CardContainter,
  CreateTeamButton,
} from "./styles";
import { ReactComponent as CheckCircleOff } from "../../assets/myPage/CheckCircleOff.svg";
import { ReactComponent as CheckCircleOn } from "../../assets/myPage/CheckCircleOn.svg";
import { ReactComponent as Cross } from "../../assets/myPage/Cross.svg";
import MyTeamCard from "../MyPageCard/MyTeamCard/myTeamCard";
import MyTeamTestData from "../../api/testDummyData/myTeamTestData";

const MyTeam = ({ setIsCreateTeam }) => {
  const [isMyTeam, setIsMyTeam] = useState(false);

  const MyTeamBtn = () => {
    setIsMyTeam(!isMyTeam);
  };

  return (
    <div>
      <MyTeamButton onClick={MyTeamBtn}>
        {isMyTeam ? <CheckCircleOn /> : <CheckCircleOff />}
        <MyTeamLabel>나의 팀만 보기</MyTeamLabel>
      </MyTeamButton>
      <CreateTeamButton onClick={() => setIsCreateTeam(true)}>
        <Cross style={{ marginRight: "10px" }} />팀 생성
      </CreateTeamButton>
      <CardContainter>
        {MyTeamTestData.map((item) => (
          <MyTeamCard data={item} />
        ))}
      </CardContainter>
    </div>
  );
};

export default MyTeam;
