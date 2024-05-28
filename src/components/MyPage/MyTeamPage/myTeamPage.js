import { useState } from "react";
import {
  Explanation,
  Profile,
  Input,
  Sel,
  SaveButton,
  Tag,
  Title,
  Container,
} from "./styled";
import { teamAPI } from "../../../api/teamAPI";

import { ReactComponent as Line } from "../../../assets/myPage/myInfoVector1.svg";

const MyTeamPage = ({ setIsCreateTeam }) => {
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [domain, setDomain] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (value, setter) => {
    setter(value);
  };

  const registerTeam = async () => {
    if (
      !teamName ||
      !teamDescription ||
      !domain ||
      !location ||
      !phoneNumber ||
      !email
    ) {
      setErrors({
        teamName: teamName ? "" : "팀명을 입력해 주세요",
        teamDescription: teamDescription ? "" : "팀 상세 소개를 입력해 주세요",
        domain: domain ? "" : "분야를 선택해 주세요",
        location: location ? "" : "활동 지역을 선택해 주세요",
        phoneNumber: phoneNumber ? "" : "연락처를 입력해 주세요",
        email: email ? "" : "이메일을 입력해 주세요",
      });
    } else {
      const data = {
        name: teamName,
        introduction: teamDescription,
        domain: domain,
        location: location,
        phoneNumber: phoneNumber,
        email: email,
      };

      teamAPI
        .postNewTeam(data)
        .then((res) => {
          console.log(res);
          setIsCreateTeam(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Container>
      <Title>신규 팀 등록</Title>

      <Line
        style={{ marginTop: "22px", marginLeft: "auto", marginRight: "auto" }}
      />

      <div style={{ display: "flex" }}>
        <div
          style={{
            marginLeft: 52,
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Tag style={{ marginBottom: 30 }}>프로필 설정</Tag>
          <Profile />
        </div>
        <div
          style={{
            marginLeft: 22,
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Tag style={{ marginBottom: 30 }}>팀 상세 소개</Tag>
          <Explanation
            value={teamDescription}
            onChange={(e) => handleChange(e.target.value, setTeamDescription)}
          />
        </div>
      </div>

      {errors.teamDescription && (
        <div style={{ color: "red" }}>{errors.teamDescription}</div>
      )}

      <div style={{ display: "flex" }}>
        <div
          style={{
            marginLeft: 68,
            marginTop: 35,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Tag>팀명</Tag>
          <Input
            style={{ marginTop: 15 }}
            value={teamName}
            onChange={(e) => handleChange(e.target.value, setTeamName)}
          />
          {errors.teamName && (
            <div style={{ color: "red" }}>{errors.teamName}</div>
          )}
          <Tag style={{ marginTop: 45 }}>활동 지역</Tag>
          <Sel
            style={{ marginTop: 15 }}
            value={location}
            onChange={(e) => handleChange(e.target.value, setLocation)}
          >
            <option value="">선택</option>
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
          {errors.location && (
            <div style={{ color: "red" }}>{errors.location}</div>
          )}
        </div>

        <div
          style={{
            marginLeft: 68,
            marginTop: 35,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Tag>분야</Tag>
          <Sel
            style={{ marginTop: 15 }}
            value={domain}
            onChange={(e) => handleChange(e.target.value, setDomain)}
          >
            <option value="">선택</option>
            <option value="design">디자인</option>
            <option value="design">개발</option>
          </Sel>
          {errors.domain && <div style={{ color: "red" }}>{errors.domain}</div>}

          <Tag style={{ marginTop: 47 }}>연락처</Tag>
          <Input
            style={{ marginTop: 15 }}
            value={phoneNumber}
            onChange={(e) => handleChange(e.target.value, setPhoneNumber)}
          />
          {errors.phoneNumber && (
            <div style={{ color: "red" }}>{errors.phoneNumber}</div>
          )}

          <Tag style={{ marginTop: 50 }}>이메일</Tag>
          <Input
            style={{ marginTop: 15 }}
            value={email}
            onChange={(e) => handleChange(e.target.value, setEmail)}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>
      </div>
      <SaveButton
        style={{ marginTop: 30, marginLeft: 700, marginBottom: 100 }}
        onClick={registerTeam}
      >
        등록하기
      </SaveButton>
    </Container>
  );
};

export default MyTeamPage;
