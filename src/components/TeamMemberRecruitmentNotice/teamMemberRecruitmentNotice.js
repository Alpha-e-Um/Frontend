import { Container, Title, Tag, Input } from "./styles";
import { ReactComponent as Line } from "../../assets/Line.svg";

const TeamMemberRecruitmentNotice = (props) => {
  return (
    <Container>
      <Title style={{ marginLeft: 35, marginTop: 35 }}>팀원 모집 공고</Title>
      <Line
        style={{ marginTop: "22px", marginLeft: "auto", marginRight: "auto" }}
      />

      <Tag style={{ marginLeft: 60, marginTop: 20 }}>팀명</Tag>
      <Input
        style={{
          width: 790,
          marginLeft: 60,
          marginRight: "auto",
          marginTop: 20,
        }}
      />
      <div style={{ marginLeft: 60, marginTop: 20 }}>
        <Tag>프로필 설정</Tag>
        <Tag style={{ marginLeft: 190 }}>팀 상세 소개</Tag>
      </div>

      <div style={{ marginLeft: 65, marginTop: 35, display: "flex" }}>
        <div
          style={{
            width: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Tag>모집 분야</Tag>
          <Input />
          <Tag>모집 마감일</Tag>
          <Input />
          <Tag>프로젝트 단계</Tag>
          <Input />
        </div>
        <div
          style={{
            width: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Tag>모집 인원</Tag>
          <Input />
          <Tag>활동지역</Tag>
          <Input />
          <Tag>원하는 스킬</Tag>
          <Input />
        </div>
      </div>
    </Container>
  );
};

export default TeamMemberRecruitmentNotice;
