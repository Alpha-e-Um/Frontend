import { Completed, CompletedLabel, CardContainter } from "./styles";
import { ReactComponent as CheckCircleOff } from "../../assets/myPage/CheckCircleOff.svg";
import { ReactComponent as CheckCircleOn } from "../../assets/myPage/CheckCircleOn.svg";
import { useState } from "react";

const MyTeam = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const CompletedSetting = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div>
      <Completed onClick={CompletedSetting}>
        {isCompleted ? <CheckCircleOn /> : <CheckCircleOff />}
        <CompletedLabel>팀관리</CompletedLabel>
      </Completed>
      <CardContainter></CardContainter>
    </div>
  );
};

export default MyTeam;
