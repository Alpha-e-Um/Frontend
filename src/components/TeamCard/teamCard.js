import {
  ButtonBox,
  Container,
  Description,
  InteractBox,
  LikeButton,
  LocationLabel,
  StateLabel,
  StyledButton,
  TeamNameLabel,
  TimeLabel,
  Title,
} from "./styles";

const TeamCard = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "6px",
        }}
      >
        <Title>제목</Title>
        <div>
          <StateLabel>모집 중</StateLabel>
          <TimeLabel>1시간 전</TimeLabel>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "start",
          marginBottom: "30px",
        }}
      >
        <TeamNameLabel>도레미팀</TeamNameLabel>
        <LocationLabel>서울</LocationLabel>
      </div>
      <div style={{ textAlign: "left" }}>
        <Description>
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화
          삼천리 화려강산
        </Description>
      </div>
      <div />
      <InteractBox>
        <ButtonBox>
          <StyledButton>분류 12</StyledButton>
          <StyledButton>팀원 모집</StyledButton>
        </ButtonBox>
        <div>
          <LikeButton
            src="/icons/heart.svg"
            width={30}
            stroke-color="#ff0000"
          />
        </div>
      </InteractBox>
    </Container>
  );
};

export default TeamCard;
