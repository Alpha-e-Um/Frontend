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
  ResumeList,
  ResumeItem,
  ResumeItemDetail,
  ResumeItemDetailSmall,
} from "./styles";
import { applicationAPI } from "../../api/applicationAPI";
import { resumeAPI } from "../../api/resumeAPI";

const TeamAnnouncementDetail = () => {
  const location = useLocation();
  const [announcementInfo, setAnnouncementInfo] = useState({});
  const [teamInfo, setTeamInfo] = useState({});
  const [participants, setParticipants] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [teamAnnouncementId, setTeamAnnouncementId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResumeId, setSelectedResumeId] = useState();

  useEffect(() => {
    const url = location.pathname;
    const result = url.split("/");
    const teamAnnouncementId = result[result.length - 1];
    setTeamAnnouncementId(teamAnnouncementId);

    teamAPI
      .getTeamAnnouncementById(teamAnnouncementId)
      .then((res) => {
        setAnnouncementInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  useEffect(() => {
    if (announcementInfo.teamId) {
      teamAPI
        .getTeamById(announcementInfo.teamId)
        .then((res) => {
          setTeamInfo(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });

      teamAPI
        .getTeamParticipantsByTeamId(announcementInfo.teamId)
        .then((res) => {
          setParticipants(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [announcementInfo]);

  const handleApply = () => {
    setIsModalOpen(true);
    resumeAPI
      .getResume()
      .then((res) => {
        setResumes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleConfirmApply = () => {
    applicationAPI
      .applyTeamAnnouncement(teamAnnouncementId, selectedResumeId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsModalOpen(false);
      });
    setSelectedResumeId();
  };

  const handleCancelApply = () => {
    setIsModalOpen(false);
    setSelectedResumeId();
  };

  const handleResumeSelect = (resumeId) => {
    setSelectedResumeId(resumeId);
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleString(undefined, options);
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
          <Introduction
            dangerouslySetInnerHTML={{ __html: announcementInfo.description }}
          />
          <div
            style={{ display: "flex", justifyContent: "end", width: "100%" }}
          >
            <ApplyButton onClick={handleApply}>해당 팀에 지원하기</ApplyButton>
          </div>
        </ContentWrapper>
        <ParticipantsWrapper>
          <div>
            <h2>소속 팀원 정보</h2>
          </div>
          <div style={{ display: "flex" }}>
            {participants.map((participant, index) => (
              <ParticipantCard key={index}>
                <ParticipantImage
                  src={participant.avatar}
                  alt={participant.userId}
                />
                <ParticipantInfo>
                  <ParticipantName>{participant.name.fullName}</ParticipantName>
                </ParticipantInfo>
              </ParticipantCard>
            ))}
          </div>
        </ParticipantsWrapper>
      </Container>
      <Footer />
      {isModalOpen && (
        <ModalOverlay>
          <Modal>
            <ModalContent>
              <h2>제출할 이력서를 아래에서 선택하세요.</h2>
              <ResumeList>
                {resumes.map((resume, index) => (
                  <ResumeItem
                    key={index}
                    onClick={() => handleResumeSelect(resume.id)}
                    $isSelected={resume.id === selectedResumeId}
                  >
                    <ResumeItemDetail>{resume.title}</ResumeItemDetail>
                    <ResumeItemDetailSmall>
                      {formatDate(resume.timeStamp.updateAt)} 에 수정됨
                    </ResumeItemDetailSmall>
                  </ResumeItem>
                ))}
              </ResumeList>
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

export default TeamAnnouncementDetail;
