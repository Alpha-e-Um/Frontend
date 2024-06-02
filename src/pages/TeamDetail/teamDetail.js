import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import Navigation from "../../components/Navigation/navigation";
import { useEffect, useState } from "react";
import { teamAPI } from "../../api/teamAPI";
import {
  Container,
  ContentWrapper,
  TeamInfoWrapper,
  Logo,
  Info,
  InfoItem,
  Introduction,
  ApplyButton,
  ParticipantsWrapper,
  ParticipantCard,
  ParticipantImage,
  ParticipantInfo,
  ParticipantName,
  ParticipantDetails,
} from "./styles";

const TeamDetail = () => {
  const location = useLocation();
  const [teamInfo, setTeamInfo] = useState({});
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const url = location.pathname;
    const result = url.split("/");
    const teamId = result[result.length - 1];
    console.log(teamId);

    teamAPI
      .getTeamById(teamId)
      .then((res) => {
        console.log(res);
        console.log(res.data.data);
        setTeamInfo(res.data.data);
        setParticipants(res.data.data.participants || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  const handleApply = () => {
    alert("지원하기 버튼을 눌렀습니다!");
  };

  return (
    <div>
      <Navigation />
      <Container>
        <ContentWrapper>
          <TeamInfoWrapper>
            <Logo src={teamInfo.logo} alt={`${teamInfo.name} 로고`} />
            <Info>
              <InfoItem>팀명: </InfoItem>
              <InfoItem>연락처: </InfoItem>
              <InfoItem>이메일: </InfoItem>
              <InfoItem>생성일: </InfoItem>
            </Info>
            <Info>
              <InfoItem>{teamInfo.name}</InfoItem>
              <InfoItem>{teamInfo.phoneNumber}</InfoItem>
              <InfoItem>{teamInfo.email}</InfoItem>
              <InfoItem>{teamInfo.formationDate}</InfoItem>
            </Info>
          </TeamInfoWrapper>
          <Introduction>{teamInfo.introduction}</Introduction>
          <div
            style={{ display: "flex", justifyContent: "end", width: "100%" }}
          >
            <ApplyButton onClick={handleApply}>해당 팀에 지원하기</ApplyButton>
          </div>
        </ContentWrapper>
        <ParticipantsWrapper>
          <h2>소속 팀원 정보</h2>
          {participants.map((participant, index) => (
            <ParticipantCard key={index}>
              <ParticipantImage
                src={participant.image}
                alt={participant.name}
              />
              <ParticipantInfo>
                <ParticipantName>{participant.name}</ParticipantName>
                <ParticipantDetails>{participant.details}</ParticipantDetails>
              </ParticipantInfo>
            </ParticipantCard>
          ))}
        </ParticipantsWrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default TeamDetail;
