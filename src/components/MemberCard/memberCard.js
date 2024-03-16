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
              <Title>QWE</Title>
              <Position>QWE</Position>
            </div>
          </div>
          <div>
            <TeamNameLabel>ASD</TeamNameLabel>
            <LocationLabel>ASD</LocationLabel>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "left" }}>
        <Description>ASD</Description>
      </div>
      <div />
      <InteractBox>
        <ButtonBox>
          <StyledButton>ASD</StyledButton>
          <StyledButton>ASD</StyledButton>
        </ButtonBox>
        <div>
          <LikeButton src="/icons/heart.svg" width={30} />
        </div>
      </InteractBox>
    </Container>
  );
};

export default MemberCard;
