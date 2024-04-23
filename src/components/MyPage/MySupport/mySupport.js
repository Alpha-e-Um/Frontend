import { useState } from "react";
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

const MySupport = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const CompletedSetting = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <Container>
      <Title>즐겨찾기 목록</Title>
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
        <Completed onClick={CompletedSetting}>
          {isCompleted ? <CheckCircleOn /> : <CheckCircleOff />}
          <CompletedLabel>모집 완료 제외하기</CompletedLabel>
        </Completed>
      </div>

      <CardContainter>
        {supportTestData.map((item) => (
          <MySupportCard data={item} />
        ))}
      </CardContainter>
    </Container>
  );
};

export default MySupport;
