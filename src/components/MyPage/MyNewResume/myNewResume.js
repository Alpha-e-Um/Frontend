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

const MyNewResume = ({ setIsNewResume }) => {
  const save = () => {};

  return (
    <Container>
      <Title>신규 이력서 작성</Title>
      <Line
        style={{ marginTop: "22px", marginLeft: "auto", marginRight: "auto" }}
      />

      <Lesson>기본 정보</Lesson>

      <InformationContainter style={{ gap: 10 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 30,
            marginLeft: 110,
          }}
        >
          <InformationTag style={{ paddingRight: 70 }}>이름</InformationTag>
          <Input style={{ width: 60 }} />

          <InformationTag style={{ paddingLeft: 165, paddingRight: 69 }}>
            성
          </InformationTag>
          <Input style={{ width: 46 }} />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <InformationTag style={{ paddingRight: 56, marginLeft: 110 }}>
            닉네임
          </InformationTag>
          <Input style={{ width: 162 }} />
          <InformationTag style={{ paddingLeft: 63, paddingRight: 40 }}>
            MBTI
          </InformationTag>
          <Input style={{ width: 88 }} />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <InformationTag style={{ paddingRight: 40, marginLeft: 110 }}>
            전화번호
          </InformationTag>
          <Input style={{ width: 162 }} />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <InformationTag style={{ paddingRight: 40, marginLeft: 110 }}>
            생년월일
          </InformationTag>
          <Input style={{ width: 162 }} />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <InformationTag style={{ paddingRight: 34, marginLeft: 110 }}>
            소속/학교
          </InformationTag>
          <Input style={{ width: 162, marginRight: 20 }} />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <InformationTag
            style={{ paddingRight: 36, marginLeft: 110, marginBottom: 50 }}
          >
            거주 지역
          </InformationTag>
          <Input style={{ width: 162 }} />
        </div>
      </InformationContainter>

      <Lesson>이력서 정보</Lesson>

      <InformationContainter>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <InformationTag>직군</InformationTag>
          <InformationTag>소분류</InformationTag>

          <Input style={{ marginTop: 12, width: 332 }} />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Input style={{ marginTop: 12, width: 332 }} />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <InformationTag>학점</InformationTag>
          <InformationTag>소분류</InformationTag>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}></div>

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
          <Input style={{ marginTop: 12, width: 332 }} />
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
