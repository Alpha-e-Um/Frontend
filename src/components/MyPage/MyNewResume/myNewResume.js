import {
  Title,
  Container,
  Lesson,
  InformationTag,
  Input,
  AddButton,
  SaveButton,
  CannelButton,
  InformationContainter,
} from "./styled";
import { ReactComponent as Line } from "../../../assets/myPage/myInfoVector1.svg";
import { useState } from "react";
import { resumeAPI } from "../../../api/resumeAPI";

const MyNewResume = ({ setIsNewResume }) => {
  const [jobCategory, setJobCategory] = useState("");
  const [jobSubcategory, setJobSubcategory] = useState("");
  const [gpa, setGpa] = useState("");
  const [introduction, setIntroduction] = useState("");

  const handleChange = (value, setter) => {
    setter(value);
  };

  const save = () => {
    const data = {
      title: "",
      jobCategory: jobCategory,
      jobSubcategory: jobSubcategory,
      gpa: 4.0,
      totalScore: 0,
      introduction: introduction,
      isPublic: true,
      careers: [],
      certificates: [],
      projects: [],
      homepages: [],
      activities: [],
    };

    resumeAPI
      .postResume(data)
      .then((res) => {
        console.log(res);
        setIsNewResume(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Title>신규 이력서 작성</Title>
      <Line
        style={{ marginTop: "22px", marginLeft: "auto", marginRight: "auto" }}
      />

      <Lesson>기본 정보</Lesson>

      <InformationContainter>
        <div
          style={{
            paddingLeft: 128,
            marginTop: 44,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <InformationTag>이름</InformationTag>
          <InformationTag style={{ marginTop: 28 }}>전화번호</InformationTag>
          <InformationTag style={{ marginTop: 28 }}>생년월일</InformationTag>
          <InformationTag style={{ marginTop: 28 }}>소속/학교</InformationTag>
          <InformationTag style={{ marginTop: 28 }}>거주 지역</InformationTag>
        </div>
        <div
          style={{
            marginLeft: 28,
            marginTop: 36,
            marginBottom: 40,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Input style={{ marginBottom: 17, width: 60 }} />
          <Input style={{ marginBottom: 17, width: 162 }} />
          <Input style={{ marginBottom: 17, width: 140 }} />
          <Input style={{ marginBottom: 17, width: 176 }} />
          <Input style={{ width: 131 }} />
        </div>
        <div
          style={{
            marginLeft: 50,
            marginTop: 44,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <InformationTag>성</InformationTag>
          <InformationTag style={{ marginTop: 28 }}>MBTI</InformationTag>
        </div>
        <div
          style={{
            marginLeft: 28,
            marginTop: 36,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Input style={{ marginBottom: 17, width: 46 }} />
          <Input style={{ width: 88 }} />
        </div>
      </InformationContainter>

      <Lesson>이력서 정보</Lesson>

      <InformationContainter>
        <div
          style={{
            marginLeft: 48,
            marginTop: 55,
            marginBottom: 46,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <InformationTag>직군</InformationTag>

          <Input
            style={{ marginTop: 12, width: 332 }}
            value={jobCategory}
            onChange={(e) => handleChange(e.target.value, setJobCategory)}
          />

          <InformationTag style={{ marginTop: 45 }}>학점</InformationTag>
          <Input
            style={{ marginTop: 12, width: 332 }}
            value={gpa}
            onChange={(e) => handleChange(e.target.value, setGpa)}
          />
        </div>
        <div
          style={{
            marginLeft: 48,
            marginTop: 55,
            marginBottom: 46,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <InformationTag>소분류</InformationTag>
          <Input
            style={{ marginTop: 12, width: 332 }}
            value={jobSubcategory}
            onChange={(e) => handleChange(e.target.value, setJobSubcategory)}
          />
          <InformationTag style={{ marginTop: 45 }}>스킬</InformationTag>
          <Input style={{ marginTop: 12, width: 332 }} />
        </div>
      </InformationContainter>

      <InformationContainter style={{ justifyContent: "space-between" }}>
        <InformationTag
          style={{
            marginLeft: "30px",
            marginTop: "28px",
            marginBottom: "25px",
          }}
        >
          수상/자격증
        </InformationTag>
        <AddButton>+ 정보 추가</AddButton>
      </InformationContainter>

      <InformationContainter style={{ justifyContent: "space-between" }}>
        <InformationTag
          style={{
            marginLeft: "30px",
            marginTop: "28px",
            marginBottom: "25px",
          }}
        >
          경력
        </InformationTag>
        <AddButton>+ 정보 추가</AddButton>
      </InformationContainter>

      <InformationContainter style={{ justifyContent: "space-between" }}>
        <InformationTag
          style={{
            marginLeft: "30px",
            marginTop: "28px",
            marginBottom: "25px",
          }}
        >
          프로젝트
        </InformationTag>
        <AddButton>+ 정보 추가</AddButton>
      </InformationContainter>

      <InformationContainter style={{ justifyContent: "space-between" }}>
        <InformationTag
          style={{
            marginLeft: "30px",
            marginTop: "28px",
            marginBottom: "25px",
          }}
        >
          외부활동
        </InformationTag>
        <AddButton>+ 정보 추가</AddButton>
      </InformationContainter>

      <InformationContainter style={{ justifyContent: "space-between" }}>
        <InformationTag
          style={{
            marginLeft: "30px",
            marginTop: "28px",
            marginBottom: "25px",
          }}
        >
          홈페이지
        </InformationTag>
        <AddButton>+ 정보 추가</AddButton>
      </InformationContainter>

      <InformationContainter
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <InformationTag
          style={{
            marginLeft: "30px",
            marginTop: "28px",
            marginBottom: "25px",
          }}
        >
          자기소개서
        </InformationTag>
        <Input
          style={{
            marginLeft: "30px",
            width: "734px",
            height: "267px",
          }}
          value={introduction}
          onChange={(e) => handleChange(e.target.value, setIntroduction)}
        />

        <InformationTag
          style={{
            marginLeft: "30px",
            marginTop: "28px",
            marginBottom: "25px",
          }}
        >
          첨부파일
        </InformationTag>

        <Input
          style={{
            marginLeft: "30px",
            marginBottom: "30px",
            width: "512px",
            height: "48px",
          }}
        />
      </InformationContainter>

      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <SaveButton onClick={() => save()}>저장</SaveButton>
        <CannelButton onClick={() => setIsNewResume(false)}>취소</CannelButton>
      </div>
    </Container>
  );
};

export default MyNewResume;
