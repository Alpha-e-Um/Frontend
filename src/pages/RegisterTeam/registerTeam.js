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
} from "./styles";
import Navigation from "../../components/Navigation/navigation";
import { CardContainter } from "../../components/MyPage/MyFavorites/styles";
import MyResumeTestData from "../../api/testDummyData/myResumeTestData";
import MyResumeCard from "../../components/MyPageCard/MyResumeCard/myResumeCard";

const RegisterTeam = ({ setIsCreateTeam }) => {
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

      // teamAPI
      //   .postNewTeam(data)
      //   .then((res) => {
      //     console.log(res);
      //     setIsCreateTeam(false);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  };

  return (
    <div>
      <Navigation />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginRight: "850px",
        }}
      >
        <Title style={{}}>팀 모집 공고</Title>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Container style={{ marginBottom: "20px" }}>
          <Title>팀 모집 공고 작성</Title>

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                border: "1px solid #C9C9C9",
                width: "94%",
              }}
            />
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
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Tag>구인 분야</Tag>
                <Sel
                  style={{ marginTop: "15px" }}
                  value={domain}
                  onChange={(e) => handleChange(e.target.value, setDomain)}
                >
                  <option value="">선택</option>
                  <option value="design">디자인</option>
                  <option value="design">개발</option>
                </Sel>
                {errors.domain && (
                  <div style={{ color: "red" }}>{errors.domain}</div>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  marginLeft: "60px",
                }}
              >
                <Tag>구인 유형</Tag>
                <Sel
                  style={{ marginTop: 15 }}
                  value={location}
                  onChange={(e) => handleChange(e.target.value, setLocation)}
                >
                  <option value="">선택</option>
                  <option value="seoul">서울</option>
                  <option value="busan">부산</option>
                </Sel>
                {errors.location && (
                  <div style={{ color: "red" }}>{errors.location}</div>
                )}
              </div>
            </div>
          </div>
          <div
            style={{
              marginLeft: "64px",
              marginTop: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Tag style={{ marginBottom: "15px" }}>한줄 소개</Tag>
            <Explanation
              value={teamDescription}
              onChange={(e) => handleChange(e.target.value, setTeamDescription)}
            />
          </div>

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                marginTop: "30px",
                marginBottom: "30px",
                border: "1px solid #C9C9C9",
                width: "94%",
              }}
            />
          </div>

          <CardContainter style={{ height: "540px" }}>
            {MyResumeTestData.map((item) => (
              <MyResumeCard data={item} />
            ))}
          </CardContainter>

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                border: "1px solid #C9C9C9",
                width: "94%",
              }}
            />
          </div>

          <SaveButton
            style={{
              marginTop: "30px",
              marginLeft: "700px",
              marginBottom: "30px",
            }}
            onClick={registerTeam}
          >
            게시하기
          </SaveButton>
        </Container>
      </div>
    </div>
  );
};

export default RegisterTeam;
