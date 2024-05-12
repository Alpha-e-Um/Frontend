import {
  Container,
  Title,
  SelectButton,
  NotSelectButton,
  CardContainter,
} from "./styles";

import { useState, useEffect } from "react";
import TeamCard from "../../Card/teamCard";
import MemberCard from "../../Card/memberCard";

import teamTestData from "../../../api/testDummyData/teamTestData";
import memberTestData from "../../../api/testDummyData/memberTestData";

import { ReactComponent as Line } from "../../../assets/myPage/myInfoVector1.svg";

const MyFavorites = (props) => {
  const [isToggle, setIsToggle] = useState(false);
  const [visible, setVisible] = useState({
    step0: false,
    step1: false,
    step2: false,
    step3: false,
  });

  const TeamButton = () => {
    setIsToggle(true);
  };

  const TeamMemberButton = () => {
    setIsToggle(false);
  };

  const StartAnimation = () => {
    const timers = [];
    const delay = 50;

    for (let i = 0; i <= 3; i++) {
      const timer = setTimeout(() => {
        setVisible((prev) => ({ ...prev, [`step${i}`]: true }));
      }, i * delay + 300);
      timers.push(timer);
    }

    return () => {
      timers.forEach(clearTimeout);
    };
  };

  useEffect(() => {
    StartAnimation();
  }, []);

  return (
    <Container>
      <Title>즐겨찾기 목록</Title>
      <Line
        style={{ marginTop: "22px", marginLeft: "auto", marginRight: "auto" }}
      />

      <div
        style={{
          marginTop: "23px",
          width: "98%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {isToggle ? (
          <>
            <SelectButton onClick={TeamButton}>팀</SelectButton>
            <NotSelectButton onClick={TeamMemberButton}>팀원</NotSelectButton>
          </>
        ) : (
          <>
            <NotSelectButton onClick={TeamButton}>팀</NotSelectButton>
            <SelectButton onClick={TeamMemberButton}>팀원</SelectButton>
          </>
        )}
      </div>

      <CardContainter>
        {isToggle
          ? teamTestData.map((item) => <TeamCard data={item} />)
          : memberTestData.map((item) => <MemberCard data={item} />)}
      </CardContainter>
    </Container>
  );
};

export default MyFavorites;
