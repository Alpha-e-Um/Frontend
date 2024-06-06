import { useEffect, useState } from "react";
import { resumeAPI } from "../../api/resumeAPI";
import { Explain } from "../../pages/ResumeDetail/styles";
import { ColumnList, Gray } from "./styles";
import { Container, Title, Tag, Data } from "./styles";
import { userAPI } from "../../api/userAPI";

const Resume = ({ resumeId }) => {
  const [name, setNickName] = useState("");
  const [recruitment, setRecruitment] = useState("");
  const [category, setCategory] = useState("");
  const [introduce, setIntroduce] = useState("");

  const [jobCategory, setJobCategory] = useState("");
  const [subJobCategory, setSubJobCategory] = useState("");
  const [gpa, setGpa] = useState("");
  const [techStacks, setTechStacks] = useState([]);

  const [certificates, setCertificates] = useState([]);
  const [careers, setCareers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [projects, setProjects] = useState([]);
  const [homepages, setHomepages] = useState([]);

  useEffect((res) => {
    resumeAPI
      .getResumeId(14)
      .then((res) => {
        console.log(res.data.data);

        setJobCategory(res.data.data.jobCategory);
        setSubJobCategory(res.data.data.jobSubcategory);
        setGpa(res.data.data.gpa);

        setCertificates(res.data.data.certificates);
        setCareers(res.data.data.careers);
        setActivities(res.data.data.activities);
        setProjects(res.data.data.projects);
        setHomepages(res.data.data.homepages);
      })
      .catch((error) => {});
  }, []);

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
        <Title>이력서 정보</Title>
        <Container style={{ width: "825px" }}>
          <div style={{ marginTop: "30px", display: "flex", gap: "40px" }}>
            <ColumnList style={{ gap: "10px" }}>
              <Tag>직군</Tag>
              <Data style={{ width: "332px", marginBottom: "30px" }}>
                {jobCategory}
              </Data>
              <Tag>학점</Tag>
              <Data style={{ width: "332px", marginBottom: "30px" }}>
                {gpa}
              </Data>
            </ColumnList>

            <ColumnList style={{ gap: "10px" }}>
              <Tag>소분류</Tag>
              <Data style={{ width: "332px", marginBottom: "30px" }}>
                {subJobCategory}
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
          <Tag>프로젝트</Tag>
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
            <Tag>프로젝트명</Tag>
            <Gray>2000.01.01 - 2000.01.01</Gray>
          </div>
          <Explain>맡은 역활</Explain>
        </Container>

        <Container style={{ width: "825px", gap: "20px" }}>
          <Tag>외부활동</Tag>
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
            <Tag>활동이름</Tag>
            <Gray>2000.01.01 - 2000.01.01</Gray>
          </div>
          <Explain>활동 설명</Explain>
        </Container>

        <Container style={{ width: "825px", gap: "20px" }}>
          <Tag>홈페이지</Tag>
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
            <Tag>홈페이지</Tag>
          </div>
          <Explain>URL</Explain>
        </Container>

        <Container style={{ width: "825px", gap: "20px" }}>
          <Tag>경력</Tag>
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
            <Tag>업무 이름</Tag>
            <Gray>2000.01.01 - 2000.01.01</Gray>
          </div>
          <Explain>직무</Explain>
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
