import { useState } from "react";
import {
  Container,
  Title,
  MyTeamButton,
  MyTeamLabel,
  CardContainter,
  CreateTeamButton,
} from "./styles";

import { ReactComponent as Line } from "../../../assets/myPage/myInfoVector1.svg";
import { ReactComponent as CheckCircleOff } from "../../../assets/myPage/CheckCircleOff.svg";
import { ReactComponent as CheckCircleOn } from "../../../assets/myPage/CheckCircleOn.svg";
import { ReactComponent as Cross } from "../../../assets/myPage/Cross.svg";
import MyTeamCard from "../../MyPageCard/MyTeamCard/myTeamCard";
import MyTeamTestData from "../../../api/testDummyData/myTeamTestData";

const MyTeam = ({ setIsCreateTeam }) => {
  const [isMyTeam, setIsMyTeam] = useState(false);

  const MyTeamBtn = () => {
    setIsMyTeam(!isMyTeam);
  };

  return (
    <Container>
      <Title>팀관리</Title>
      <Line
        style={{ marginTop: "22px", marginLeft: "auto", marginRight: "auto" }}
      />

      <div
        style={{
          marginTop: "25px",
          width: "98%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <MyTeamButton onClick={MyTeamBtn}>
          {isMyTeam ? <CheckCircleOn /> : <CheckCircleOff />}
          <MyTeamLabel>나의 팀만 보기</MyTeamLabel>
        </MyTeamButton>
      </div>

      <CreateTeamButton onClick={() => setIsCreateTeam(true)}>
        <Cross style={{ marginRight: "10px" }} />팀 생성
      </CreateTeamButton>
      <CardContainter>
        {MyTeamTestData.map((item) => (
          <MyTeamCard data={item} />
        ))}
      </CardContainter>
    </Container>
  );
};

export default MyTeam;
