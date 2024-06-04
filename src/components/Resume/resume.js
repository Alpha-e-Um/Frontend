import { Explain } from "../../pages/ResumeDetail/styles";
import { ColumnList, Gray } from "./styles";
import { Container, Title, Tag, Data } from "./styles";

const Resume = () => {
  return (
    <Container style={{ width: "1000px" }}>
      <Title>이력서 정보</Title>

      <div
        style={{
          width: "100%",
          margin: "30px 20px",
          padding: "30px 0px 0px 0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "40px",
          border: "solid",
          borderWidth: "2px 0 0 0",
          borderColor: "#C9C9C9",
        }}
      >
        <Title>기본 정보</Title>
        <Container style={{ width: "825px", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "28px" }}>
            <ColumnList style={{ marginTop: "10px", gap: "42px" }}>
              <Tag>이름</Tag>
              <Tag>전화번호</Tag>
              <Tag>생년월일</Tag>
              <Tag>소속/학교</Tag>
              <Tag>거주 지역</Tag>
            </ColumnList>
            <ColumnList style={{ marginRight: "100px", gap: "25px" }}>
              <Data>이름</Data>
              <Data style={{ width: "162px" }}>010-1234-1234</Data>
              <Data style={{ width: "162px" }}>2000.01.01</Data>
              <Data style={{ width: "162px" }}>국민대학교</Data>
              <Data style={{ width: "162px" }}>거주지역</Data>
            </ColumnList>
            <ColumnList style={{ marginTop: "10px", gap: "42px" }}>
              <Tag>성</Tag>
              <Tag>MBTI</Tag>
            </ColumnList>
            <ColumnList style={{ gap: "25px" }}>
              <Data>성</Data>
              <Data>ENFT</Data>
            </ColumnList>
          </div>
        </Container>
        <Title>이력서 정보</Title>
        <Container style={{ width: "825px" }}>
          <div style={{ marginTop: "30px", display: "flex", gap: "40px" }}>
            <ColumnList style={{ gap: "10px" }}>
              <Tag>직군</Tag>
              <Data style={{ width: "332px", marginBottom: "30px" }}>
                대분류
              </Data>
              <Tag>학점</Tag>
              <Data style={{ width: "332px", marginBottom: "30px" }}>
                학점 추가
              </Data>
            </ColumnList>

            <ColumnList style={{ gap: "10px" }}>
              <Tag>소분류</Tag>
              <Data style={{ width: "332px", marginBottom: "30px" }}>
                소분류
              </Data>
              <Tag>스킬</Tag>
              <Data style={{ width: "332px", marginBottom: "30px" }}>
                스킬 추가
              </Data>
            </ColumnList>
          </div>
        </Container>

        <Container style={{ width: "825px", gap: "20px" }}>
          <Tag>수상/자격증</Tag>
          <div
            style={{
              width: "100%",
              paddingTop: "20px",
              border: "solid",
              borderWidth: "2px 0 0 0",
              borderColor: "#C9C9C9",
              display: "flex",
              gap: "20px",
            }}
          >
            <Tag>수상자격증 이름</Tag>
            <Gray>2000.01.01 - 2000.01.01</Gray>
          </div>
          <Explain>수상 자격증 내용 </Explain>
        </Container>

        <Container style={{ width: "825px", gap: "20px" }}>
          <Tag>자기소개서</Tag>
          <Explain>자기소개서 내용</Explain>
          <Tag>첨부 파일</Tag>
          <Explain>첨부파일들 이름</Explain>
        </Container>
      </div>
    </Container>
  );
};

export default Resume;
