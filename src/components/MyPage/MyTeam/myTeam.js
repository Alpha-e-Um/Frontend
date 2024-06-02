import { useState, useEffect } from "react";
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
import { teamAPI } from "../../../api/teamAPI";

const MyTeam = ({ setIsCreateTeam, innerRef }) => {
  const [myTeams, setMyTeams] = useState([]);
  const [isMyTeam, setIsMyTeam] = useState(false);

  const [visible, setVisible] = useState({
    step0: false,
    step1: false,
    step2: false,
  });

  const MyTeamBtn = () => {
    setIsMyTeam(!isMyTeam);
  };

  const StartAnimation = () => {
    const timer1 = setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step0`]: true }));
    }, 0);
    const timer2 = setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step1`]: true }));
    }, 100);
    const timer3 = setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step2`]: true }));
    }, 200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  const EndAnimation = async () => {
    setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step2`]: false }));
    }, 0);
    setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step1`]: false }));
    }, 0);
    setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step0`]: false }));
    }, 200);
  };

  innerRef.current = {
    EndAnimation,
  };

  const getMyTeams = async () => {
    try {
      const response = await teamAPI.getMyTeams();
      console.log(response.data.data);
      setMyTeams(response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    StartAnimation();
    getMyTeams();
  }, []);

  return (
    <Container $isVisible={visible.step0}>
      <Title $isVisible={visible.step1}>팀관리</Title>
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
        <MyTeamButton onClick={MyTeamBtn} $isVisible={visible.step2}>
          {isMyTeam ? <CheckCircleOn /> : <CheckCircleOff />}
          <MyTeamLabel>내가 팀장인 팀만 보기</MyTeamLabel>
        </MyTeamButton>
      </div>

      <CreateTeamButton
        onClick={() => setIsCreateTeam(true)}
        $isVisible={visible.step2}
      >
        <Cross style={{ marginRight: "10px" }} />팀 생성
      </CreateTeamButton>
      <CardContainter>
        {myTeams.map((item) => (
          <MyTeamCard key={item.id} data={item} />
        ))}
      </CardContainter>
    </Container>
  );
};

export default MyTeam;
