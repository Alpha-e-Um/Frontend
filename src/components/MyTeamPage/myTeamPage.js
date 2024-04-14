import {
  Explanation,
  Profile,
  Input,
  Sel,
  SaveButton,
  Tag,
  Title,
} from "./styled";

const MyTeamPage = ({ setIsCreateTeam }) => {
  return (
    <div>
      <Title>신규 팀 등록</Title>
      <Profile></Profile>

      <Tag style={{ left: "52px", top: "185px" }}>프로필 설정</Tag>

      <Tag style={{ left: "337px", top: "185px" }}>팀 상세 소개</Tag>
      <Explanation style={{ left: "337px", top: "219px" }} />

      <Tag style={{ left: "67px", top: "518px" }}>팀명</Tag>
      <Input style={{ left: "63px", top: "549px" }} />

      <Tag style={{ left: "460px", top: "518px" }}>분야</Tag>
      <Sel style={{ left: "456px", top: "549px" }}>
        <option value="seoul">디자인</option>
      </Sel>

      <Tag style={{ left: "67px", top: "638px" }}>활동 지역</Tag>
      <Sel style={{ left: "67px", top: "670px" }}>
        <option value="seoul">서울</option>
        <option value="busan">부산</option>
        <option value="incheon">인천</option>
        <option value="daegu">대구</option>
        <option value="gwangju">광주</option>
        <option value="daejeon">대전</option>
        <option value="ulsan">울산</option>
        <option value="gyeonggi">경기도</option>
        <option value="gangwon">강원도</option>
        <option value="chungbuk">충청북도</option>
        <option value="chungnam">충청남도</option>
        <option value="jeonbuk">전라북도</option>
        <option value="jeonnam">전라남도</option>
        <option value="gyeongbuk">경상북도</option>
        <option value="gyeongnam">경상남도</option>
        <option value="jeju">제주도</option>
      </Sel>

      <Tag style={{ left: "460px", top: "638px" }}>연락처</Tag>
      <Input style={{ left: "456px", top: "670px" }} />

      <SaveButton onClick={() => setIsCreateTeam(false)}>저장</SaveButton>
    </div>
  );
};

export default MyTeamPage;
