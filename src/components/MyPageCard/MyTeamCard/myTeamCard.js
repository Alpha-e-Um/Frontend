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
  Button,
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "8px",
        }}
      >
        <TeamName>{data.name}</TeamName>
        <Introduction>{data.introduction}</Introduction>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "10px",
          marginTop: "16px",
        }}
      >
        <Button onClick={goToTeamDetail}>팀원 관리</Button>
        <Button>팀소개 수정</Button>
      </div>
    </Containter>
  );
};

export default MyTeamCard;
