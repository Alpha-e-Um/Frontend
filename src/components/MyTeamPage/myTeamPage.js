import { useState } from "react";
import {
  Explanation,
  Profile,
  Input,
  Sel,
  SaveButton,
  Tag,
  Title,
} from "./styled";
import { teamAPI } from "../../api/teamAPI";

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
      return;
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
    <div>
      <Title>신규 팀 등록</Title>
      <Profile />

      <Tag style={{ left: "52px", top: "185px" }}>프로필 설정</Tag>
      <Tag style={{ left: "337px", top: "185px" }}>팀 상세 소개</Tag>
      <Explanation
        style={{ left: "337px", top: "219px" }}
        value={teamDescription}
        onChange={(e) => handleChange(e.target.value, setTeamDescription)}
      />
      {errors.teamDescription && (
        <div style={{ color: "red" }}>{errors.teamDescription}</div>
      )}

      <Tag style={{ left: "67px", top: "518px" }}>팀명</Tag>
      <Input
        style={{ left: "63px", top: "549px" }}
        value={teamName}
        onChange={(e) => handleChange(e.target.value, setTeamName)}
      />
      {errors.teamName && <div style={{ color: "red" }}>{errors.teamName}</div>}

      <Tag style={{ left: "460px", top: "518px" }}>분야</Tag>
      <Sel
        style={{ left: "456px", top: "549px" }}
        value={domain}
        onChange={(e) => handleChange(e.target.value, setDomain)}
      >
        <option value="">선택</option>
        <option value="design">디자인</option>
        <option value="design">개발</option>
      </Sel>
      {errors.domain && <div style={{ color: "red" }}>{errors.domain}</div>}

      <Tag style={{ left: "67px", top: "638px" }}>활동 지역</Tag>
      <Sel
        style={{ left: "67px", top: "670px" }}
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
      {errors.location && <div style={{ color: "red" }}>{errors.location}</div>}

      <Tag style={{ left: "460px", top: "638px" }}>연락처</Tag>
      <Input
        style={{ left: "456px", top: "670px" }}
        value={phoneNumber}
        onChange={(e) => handleChange(e.target.value, setPhoneNumber)}
      />
      {errors.phoneNumber && (
        <div style={{ color: "red" }}>{errors.phoneNumber}</div>
      )}

      <Tag style={{ left: "67px", top: "758px" }}>연락처</Tag>
      <Input
        style={{ left: "67px", top: "790px" }}
        value={email}
        onChange={(e) => handleChange(e.target.value, setEmail)}
      />
      {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

      <SaveButton onClick={registerTeam}>저장</SaveButton>
    </div>
  );
};

export default MyTeamPage;
