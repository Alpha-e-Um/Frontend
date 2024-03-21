import { Completed, CompletedLabel, CardContainter } from "./styles";
import { ReactComponent as CheckCircleOff } from "../../assets/myPage/CheckCircleOff.svg";
import { ReactComponent as CheckCircleOn } from "../../assets/myPage/CheckCircleOn.svg";
import { useState } from "react";
import SupportCard from "../MyPageCard/SupportCard/SupportCard";
import supportTestData from "../../api/supportTestData";

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
          <SupportCard data={item}></SupportCard>
        ))}
      </CardContainter>
    </div>
  );
};

export default MySupport;
