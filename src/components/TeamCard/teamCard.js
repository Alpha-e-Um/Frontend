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

const TeamCard = ({ data }) => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "6px",
        }}
      >
        <Title>{data.projectName}</Title>
        <div>
          {data.recruitmentStatus ? (
            <StateLabel>모집 중</StateLabel>
          ) : (
            <StateLabel>모집 마감</StateLabel>
          )}
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
        <TeamNameLabel>{data.teamName}</TeamNameLabel>
        <LocationLabel>{data.location}</LocationLabel>
      </div>
      <div style={{ textAlign: "left" }}>
        <Description>{data.projectDescription}</Description>
      </div>
      <div />
      <InteractBox>
        <ButtonBox>
          <StyledButton>{data.category1}</StyledButton>
          <StyledButton>{data.category2}</StyledButton>
        </ButtonBox>
        <div>
          <LikeButton src="/icons/heart.svg" width={30} />
        </div>
      </InteractBox>
    </Container>
  );
};

export default TeamCard;
