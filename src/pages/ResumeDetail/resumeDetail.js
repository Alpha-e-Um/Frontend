import Navigation from "../../components/Navigation/navigation";
import Resume from "../../components/Resume/resume";
import { BlueButton, ColumnGroup, Container, Gray, Tag, Title } from "./styles";

const ResumeDetail = () => {
  return (
    <>
      <Navigation></Navigation>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 50,
        }}
      >
        <div
          style={{ width: "1000px", display: "flex", alignItems: "flex-start" }}
        >
          <Title>팀원 구하기</Title>
        </div>
        <Container style={{ width: "1000px" }}>
          <Title>팀원정보</Title>

          <div
            style={{
              width: "100%",
              margin: "30px 0px",
              padding: "30px 0px 0px 0px",
              display: "flex",
              gap: "40px",
              border: "solid",
              borderWidth: "2px 0 0 0",
              borderColor: "#C9C9C9",
            }}
          >
            <div
              style={{
                width: "236px",
                height: "236px",
                backgroundColor: "#C9C9C9",
                borderRadius: "9px",
              }}
            />
            <ColumnGroup style={{ gap: "45px" }}>
              <Tag>이름</Tag>
              <Tag>구인 분야</Tag>
              <Tag>구인 유형</Tag>
              <Tag>한줄 소개</Tag>
            </ColumnGroup>
            <ColumnGroup style={{ gap: "45px" }}>
              <Gray>이름</Gray>
              <Gray>구인 분야</Gray>
              <Gray>구인 유형</Gray>
              <Gray>한줄 소개</Gray>
            </ColumnGroup>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <BlueButton>1:1 채팅걸기</BlueButton>
          </div>
        </Container>
        <Resume />
      </div>
    </>
  );
};

export default ResumeDetail;
