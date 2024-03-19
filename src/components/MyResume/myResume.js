import { ResumeButton, CardContainter } from "./styles";
import { ReactComponent as Cross } from "../../assets/myPage/Cross.svg";

const MyResume = (props) => {
  return (
    <div>
      <ResumeButton>
        <Cross style={{ marginRight: "10px" }} />
        이력서 생성
      </ResumeButton>
      <CardContainter />
    </div>
  );
};

export default MyResume;
