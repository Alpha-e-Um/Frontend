import { Container, Title, ResumeButton, CardContainter } from "./styles";

import { ReactComponent as Line } from "../../../assets/myPage/myInfoVector1.svg";
import { ReactComponent as Cross } from "../../../assets/myPage/Cross.svg";
import MyResumeCard from "../../MyPageCard/MyResumeCard/myResumeCard";
import MyResumeTestData from "../../../api/testDummyData/myResumeTestData";

const MyResume = ({ setIsNewResume }) => {
  return (
    <Container>
      <Title>팀관리</Title>
      <Line
        style={{ marginTop: "22px", marginLeft: "auto", marginRight: "auto" }}
      />
      <ResumeButton onClick={() => setIsNewResume(true)}>
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