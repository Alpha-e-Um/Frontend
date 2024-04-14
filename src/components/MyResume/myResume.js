import { ResumeButton, CardContainter } from "./styles";
import { ReactComponent as Cross } from "../../assets/myPage/Cross.svg";
import MyResumeCard from "../MyPageCard/MyResumeCard/myResumeCard";
import MyResumeTestData from "../../api/myResumeTestData";

const MyResume = ({ setIsNewResume }) => {
  return (
    <div>
      <ResumeButton onClick={() => setIsNewResume(true)}>
        <Cross style={{ marginRight: "10px" }} />
        이력서 생성
      </ResumeButton>
      <CardContainter>
        {MyResumeTestData.map((item) => (
          <MyResumeCard data={item} />
        ))}
      </CardContainter>
    </div>
  );
};

export default MyResume;
