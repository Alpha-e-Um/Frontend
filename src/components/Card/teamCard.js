import {
  ButtonBox,
  Container,
  Description,
  InteractBox,
  LikeButton,
  LocationLabel,
  LogoImg,
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
        }}
      >
        <LogoImg src="https://beginmate-s3.s3.ap-northeast-2.amazonaws.com/prod/upload/team/profileImg_1710714654421_%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C-1.png" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginLeft: "24px",
            justifyContent: "space-between",
          }}
        >
          <Title>{data.title}</Title>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              {data.recruitmentStatus ? (
                <StateLabel>모집 중</StateLabel>
              ) : (
                <StateLabel>모집 마감</StateLabel>
              )}
              <TimeLabel>1시간 전</TimeLabel>
            </div>
            <div
              style={{ display: "flex", marginTop: "8px", marginBottom: "4px" }}
            >
              <TeamNameLabel>QWER{data.teamName}</TeamNameLabel>
              <LocationLabel>SEOUL{data.location}</LocationLabel>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "left", marginTop: "30px" }}>
        <Description>{data.description}</Description>
      </div>
      <div />
      <InteractBox>
        <ButtonBox>
          <StyledButton>UI/UX 디자이너{data.category1}</StyledButton>
          <StyledButton>프론트엔드{data.category2}</StyledButton>
          <StyledButton>프론트엔드{data.category2}</StyledButton>
          <StyledButton>프론트엔드{data.category2}</StyledButton>
          <StyledButton>프론트엔드{data.category2}</StyledButton>
          <StyledButton>프론트엔드{data.category2}</StyledButton>
        </ButtonBox>
        <LikeButton src="/icons/heart.svg" width={30} />
      </InteractBox>
    </Container>
  );
};

export default TeamCard;
