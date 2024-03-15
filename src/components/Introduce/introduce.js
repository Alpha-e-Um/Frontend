import {
  ButtonText,
  Container,
  Description,
  GetTeamButton,
  Slogan,
} from "./styles";

const Introduce = () => {
  return (
    <Container>
      <div
        style={{
          backgroundColor: "#714adf",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          display: "flex",
          margin: "30px 60px",
          borderRadius: "26px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            maxWidth: "1000px",
          }}
        >
          <Slogan>세상의 모든 팀플을 위한 연결의 시작!</Slogan>
          <Description>
            이음이 제공하는 자유롭고 편안한 프로젝트 서비스,
          </Description>
          <Description>
            팀원, 팀플을 구하는 새로운 전환점과 AI서비스를 이용해보세요
          </Description>
          <GetTeamButton>
            <ButtonText>첫 팀 구하기</ButtonText>
          </GetTeamButton>
        </div>
      </div>
    </Container>
  );
};

export default Introduce;
