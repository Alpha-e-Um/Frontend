import {
  ButtonBox,
  Container,
  Description,
  InteractBox,
  LikeButton,
  LocationLabel,
  Position,
  StateLabel,
  StyledButton,
  TeamNameLabel,
  TimeLabel,
  Title,
} from "./styles";

const MemberCard = ({ data }) => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          marginBottom: "6px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "30px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <img src="/icons/alert.svg" width={50} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                marginLeft: "20px",
              }}
            >
              <Title>{data.name}</Title>
              <Position>{data.position}</Position>
            </div>
          </div>
          <div>
            <TeamNameLabel>{data.gender}</TeamNameLabel>
            <LocationLabel>{data.location}</LocationLabel>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "left" }}>
        <Description>{data.introduction}</Description>
      </div>
      <div />
      <InteractBox>
        <ButtonBox>
          <StyledButton>{data.skill1}</StyledButton>
          <StyledButton>{data.skill2}</StyledButton>
        </ButtonBox>
        <div>
          <LikeButton src="/icons/heart.svg" width={30} />
        </div>
      </InteractBox>
    </Container>
  );
};

export default MemberCard;
