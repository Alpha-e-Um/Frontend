import {
  Container,
  ProjectName,
  TeamName,
  Region,
  Recruitment,
  RecruitmentTime,
  Introduction,
} from "./styles";
import { ReactComponent as CenterLine } from "../../../assets/myPage/MemberCenterLine.svg";
import { ReactComponent as HeartOff } from "../../../assets/myPage/HeartOff.svg";

const MyFavoriteCard = ({ data }) => {
  return (
    <Container>
      <ProjectName>{data.projectName}</ProjectName>
      <TeamName>[팀명]:{data.teamName}</TeamName>
      <Region>[지역]:{data.region}</Region>
      <Recruitment style={{ color: data.recruitment ? "#3376F6" : "#ff3737" }}>
        {data.recruitment ? "모집중" : "모집완료"}
        <RecruitmentTime>| {data.recruitmentTime}</RecruitmentTime>
      </Recruitment>
      <Introduction>{data.introduction}</Introduction>

      <CenterLine
        style={{
          position: "absolute",
          left: "50%",
          top: "192px",
          transform: "translateX(-50%)",
        }}
      />

      <HeartOff
        style={{
          position: "absolute",
          right: "18px",
          top: "207px",
        }}
      />
    </Container>
  );
};

export default MyFavoriteCard;
