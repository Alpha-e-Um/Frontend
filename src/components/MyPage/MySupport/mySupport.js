import { useState, useEffect } from "react";
import {
  Container,
  Title,
  Completed,
  CompletedLabel,
  CardContainter,
} from "./styles";
import { ReactComponent as CheckCircleOff } from "../../../assets/myPage/CheckCircleOff.svg";
import { ReactComponent as CheckCircleOn } from "../../../assets/myPage/CheckCircleOn.svg";
import MySupportCard from "../../MyPageCard/MySupportCard/mySupportCard";
import supportTestData from "../../../api/testDummyData/supportTestData";
import { ReactComponent as Line } from "../../../assets/myPage/myInfoVector1.svg";

const MySupport = ({ innerRef }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [visible, setVisible] = useState({
    step0: false,
    step1: false,
    step2: false,
  });

  const CompletedSetting = () => {
    setIsCompleted(!isCompleted);
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

  useEffect(() => {
    StartAnimation();
  }, []);

  return (
    <Container $isVisible={visible.step0}>
      <Title $isVisible={visible.step1}>지원현황</Title>
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
        <Completed onClick={CompletedSetting} $isVisible={visible.step2}>
          {isCompleted ? <CheckCircleOn /> : <CheckCircleOff />}
          <CompletedLabel>모집 완료 제외하기</CompletedLabel>
        </Completed>
      </div>

      <CardContainter>
        {supportTestData.map((item) => (
          <MySupportCard key={item.id} data={item} />
        ))}
      </CardContainter>
    </Container>
  );
};

export default MySupport;
