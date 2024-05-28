import {
  Containter,
  ProejctName,
  TeamName,
  Region,
  Recruitment,
  RecruitmentTime,
  Introduction,
  TeamMemberButtton,
  EditButton,
} from "./styles";
import { ReactComponent as MemberCenterLine } from "../../../assets/myPage/MemberCenterLine.svg";
import { useNavigate } from "react-router-dom";

const MyTeamCard = ({ data }) => {
  const navigate = useNavigate();

  const goToTeamDetail = () => {
    navigate(`/mypage/team/${data.id}`);
  };

  return (
    <Containter>
      <ProejctName>{data.projectName}</ProejctName>
      <TeamName>[{data.teamName}]</TeamName>
      <Region>[{data.region}]</Region>

      <Recruitment style={{ color: data.recruitment ? "#3376F6" : "#ff3737" }}>
        {data.recruitment ? "모집중" : "모집완료"}
        <RecruitmentTime>| {data.recruitmentTime}</RecruitmentTime>
      </Recruitment>

      <Introduction>{data.introduction}</Introduction>
      <MemberCenterLine
        style={{
          position: "absolute",
          left: "50%",
          top: "189px",
          transform: "translateX(-50%)",
        }}
      />
      <TeamMemberButtton onClick={goToTeamDetail}>팀원 관리</TeamMemberButtton>
      <EditButton>소개 페이지 수정</EditButton>
    </Containter>
  );
};

export default MyTeamCard;
