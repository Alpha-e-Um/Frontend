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

const MyFavorites = ({ innerRef }) => {
  const [isToggle, setIsToggle] = useState(false);
  const [visible, setVisible] = useState({
    step0: false,
    step1: false,
    step2: false,
  });

  const TeamButton = () => {
    setIsToggle(true);
  };

  const TeamMemberButton = () => {
    setIsToggle(false);
  };

  const StartAnimation = () => {
    const timer1 = setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step0`]: true }));
    }, 100);
    const timer2 = setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step1`]: true }));
    }, 200);
    const timer3 = setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step2`]: true }));
    }, 300);

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

  useEffect(() => {
    StartAnimation();
  }, []);

  return (
    <Container isVisible={visible.step0}>
      <Title isVisible={visible.step1}>즐겨찾기 목록</Title>
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
            <SelectButton onClick={TeamButton} isVisible={visible.step2}>
              팀
            </SelectButton>
            <NotSelectButton
              onClick={TeamMemberButton}
              isVisible={visible.step2}
            >
              팀원
            </NotSelectButton>
          </>
        ) : (
          <>
            <NotSelectButton onClick={TeamButton} isVisible={visible.step2}>
              팀
            </NotSelectButton>
            <SelectButton onClick={TeamMemberButton} isVisible={visible.step2}>
              팀원
            </SelectButton>
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
