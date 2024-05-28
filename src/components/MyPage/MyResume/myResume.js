import { Container, Title, ResumeButton, CardContainter } from "./styles";

import { useState, useEffect } from "react";
import { ReactComponent as Line } from "../../../assets/myPage/myInfoVector1.svg";
import { ReactComponent as Cross } from "../../../assets/myPage/Cross.svg";
import MyResumeCard from "../../MyPageCard/MyResumeCard/myResumeCard";
import MyResumeTestData from "../../../api/testDummyData/myResumeTestData";

const MyResume = ({ setIsNewResume, innerRef }) => {
  const [visible, setVisible] = useState({
    step0: false,
    step1: false,
    step2: false,
  });

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

  useEffect(() => {
    StartAnimation();
  }, []);

  return (
    <Container $isVisible={visible.step0}>
      <Title $isVisible={visible.step1}>이력서 관리</Title>
      <Line
        style={{ marginTop: "22px", marginLeft: "auto", marginRight: "auto" }}
      />
      <ResumeButton
        onClick={() => setIsNewResume(true)}
        $isVisible={visible.step2}
      >
        <Cross style={{ marginRight: "10px" }} />
        이력서 생성
      </ResumeButton>
      <CardContainter>
        {MyResumeTestData.map((item) => (
          <MyResumeCard data={item} />
        ))}
      </CardContainter>
    </Container>
  );
};

export default MyResume;
