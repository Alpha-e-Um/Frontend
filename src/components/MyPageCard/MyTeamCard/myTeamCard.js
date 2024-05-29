import React from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import { ko } from "date-fns/locale";
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

  const formatFormationDate = (dateString) => {
    const date = parseISO(dateString);
    const distance = formatDistanceToNow(date, { addSuffix: true, locale: ko });

    // Check if the distance contains specific keywords and return them
    if (distance.includes("초")) {
      return "방금 전";
    } else if (distance.includes("분")) {
      return distance.replace("약 ", "");
    } else if (distance.includes("시간")) {
      return distance.replace("약 ", "");
    } else if (distance.includes("일")) {
      return distance.replace("약 ", "");
    }

    // Return the date in 'yyyy-MM-dd' format if it's more than 7 days ago
    return dateString.split("T")[0];
  };

  return (
    <Containter>
      <ProejctName>{data.name}</ProejctName>
      <TeamName>[{data.name}]</TeamName>
      <Region>[{data.region}]</Region>

      <Recruitment style={{ color: data.recruitment ? "#3376F6" : "#ff3737" }}>
        {data.recruitment ? "모집중" : "모집완료"}
        <RecruitmentTime>
          | {formatFormationDate(data.formationDate)}
        </RecruitmentTime>
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
