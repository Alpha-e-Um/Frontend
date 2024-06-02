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
  ModalOverlay,
  Modal,
  ModalContent,
  ModalInput,
  ModalButtonWrapper,
  ConfirmButton,
  CancelButton,
} from "./styles";
import { applicationAPI } from "../../api/applicationAPI";

const TeamDetail = () => {
  const location = useLocation();
  const [announcementInfo, setAnnouncementInfo] = useState({});
  const [teamInfo, setTeamInfo] = useState({});
  const [participants, setParticipants] = useState([]);
  const [teamAnnouncementId, setTeamAnnouncementId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applyCount, setApplyCount] = useState(1);

  useEffect(() => {
    const url = location.pathname;
    const result = url.split("/");
    const teamAnnouncementId = result[result.length - 1];
    setTeamAnnouncementId(teamAnnouncementId);
    console.log(teamAnnouncementId);

    teamAPI
      .getTeamAnnouncementById(teamAnnouncementId)
      .then((res) => {
        console.log(res);
        console.log(res.data.data);
        setAnnouncementInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    teamAPI
      .getTeamParticipantsByTeamId(teamAnnouncementId)
      .then((res) => {
        console.log(res.data.data);
        setParticipants(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  useEffect(() => {
    teamAPI
      .getTeamById(announcementInfo.teamId)
      .then((res) => {
        console.log(res);
        console.log("team ind");
        console.log(res.data.data);
        setTeamInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [announcementInfo]);

  const handleApply = () => {
    setIsModalOpen(true);
  };

  const handleConfirmApply = () => {
    applicationAPI
      .applyTeamAnnouncement(teamAnnouncementId, applyCount)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsModalOpen(false);
      });
  };

  const handleCancelApply = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navigation />
      <Container>
        <ContentWrapper>
          <TeamInfoWrapper>
            <Logo src={teamInfo.logo} alt={`${announcementInfo.name} 로고`} />
            <Info>
              <InfoItem>프로젝트명: </InfoItem>
              <InfoItem>연락처: </InfoItem>
              <InfoItem>이메일: </InfoItem>
              <InfoItem>생성일: </InfoItem>
              <InfoItem>지역: </InfoItem>
            </Info>
            <Info>
              <InfoItem>{announcementInfo.title}</InfoItem>
              <InfoItem>{teamInfo.phoneNumber}</InfoItem>
              <InfoItem>{teamInfo.email}</InfoItem>
              <InfoItem>{announcementInfo.createDate}</InfoItem>
              <InfoItem>{announcementInfo.region}</InfoItem>
            </Info>
          </TeamInfoWrapper>
          <Introduction>{announcementInfo.description}</Introduction>
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
                src={participant.avatar}
                alt={participant.name.first}
              />
              <ParticipantInfo>
                <ParticipantName>{participant.name.first}</ParticipantName>
              </ParticipantInfo>
            </ParticipantCard>
          ))}
        </ParticipantsWrapper>
      </Container>
      <Footer />
      {isModalOpen && (
        <ModalOverlay>
          <Modal>
            <ModalContent>
              <h2>팀 지원에 필요한 당신의 이력서 번호를 입력하세요</h2>
              <ModalInput
                type="number"
                value={applyCount}
                onChange={(e) => setApplyCount(Number(e.target.value))}
              />
              <ModalButtonWrapper>
                <ConfirmButton onClick={handleConfirmApply}>확인</ConfirmButton>
                <CancelButton onClick={handleCancelApply}>취소</CancelButton>
              </ModalButtonWrapper>
            </ModalContent>
          </Modal>
        </ModalOverlay>
      )}
    </div>
  );
};

export default TeamDetail;
