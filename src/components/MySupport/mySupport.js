import { useState } from "react";
import { Completed, CompletedLabel, CardContainter } from "./styles";
import { ReactComponent as CheckCircleOff } from "../../assets/myPage/CheckCircleOff.svg";
import { ReactComponent as CheckCircleOn } from "../../assets/myPage/CheckCircleOn.svg";
import MySupportCard from "../MyPageCard/MySupportCard/mySupportCard";
import supportTestData from "../../api/testDummyData/supportTestData";

const MySupport = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const CompletedSetting = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <div>
      <Completed onClick={CompletedSetting}>
        {isCompleted ? <CheckCircleOn /> : <CheckCircleOff />}
        <CompletedLabel>모집 완료 제외하기</CompletedLabel>
      </Completed>
      <CardContainter>
        {supportTestData.map((item) => (
          <MySupportCard data={item} />
        ))}
      </CardContainter>
    </div>
  );
};

export default MySupport;
