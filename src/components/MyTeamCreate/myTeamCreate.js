import { Explanation, Input, SaveButton, Tag, Title } from "./styled";

const MyTeamCreate = () => {
  return (
    <div>
      <Title>신규 팀 등록</Title>

      <Tag style={{ left: "54px", top: "192px" }}>팀명</Tag>
      <Input style={{ left: "54px", top: "224px" }} />

      <Tag style={{ left: "453px", top: "192px" }}>분야</Tag>
      <Input style={{ left: "453px", top: "224px" }} />

      <Tag style={{ left: "54px", top: "292px" }}>활동 국가</Tag>
      <Input style={{ left: "54px", top: "324px" }} />

      <Tag style={{ left: "453px", top: "292px" }}>활동 지역</Tag>
      <Input style={{ left: "453px", top: "324px" }} />

      <Tag style={{ left: "54px", top: "392px" }}>프로젝트 단계</Tag>
      <Input style={{ left: "54px", top: "426px" }} />

      <Tag style={{ left: "453px", top: "392px" }}>현재 인원</Tag>
      <Input style={{ left: "453px", top: "426px" }} />

      <Tag style={{ left: "54px", top: "549px" }}>팀 상세 설명</Tag>
      <Explanation style={{ left: "55px", top: "582px" }} />

      <SaveButton>저장</SaveButton>
    </div>
  );
};

export default MyTeamCreate;
