import { useState } from "react";
import Select from "react-select";
import {
  Explanation,
  Profile,
  Input,
  SaveButton,
  Tag,
  Title,
  Container,
} from "./styles";
import Navigation from "../../components/Navigation/navigation";
import { CardContainter } from "../../components/MyPage/MyFavorites/styles";
import MyResumeTestData from "../../api/testDummyData/myResumeTestData";
import MyResumeCard from "../../components/MyPageCard/MyResumeCard/myResumeCard";
import Footer from "../../components/Footer/footer";

const occupationOptions = [
  { value: "design_ui_ux", label: "UI/UX 디자인" },
  { value: "design_illustration_character", label: "일러스트/캐릭터 디자인" },
  { value: "design_movie_motion_graphic", label: "영화/모션그래픽 디자인" },
  { value: "design_product_package", label: "제품/패키지 디자인" },
  { value: "design_passion", label: "열정 디자인" },
  { value: "design_crafts", label: "공예 디자인" },
  { value: "design_graphic", label: "그래픽 디자인" },
  { value: "development_frontend", label: "프론트엔드 개발" },
  { value: "development_backend", label: "백엔드 개발" },
  { value: "development_ai", label: "AI 개발" },
  { value: "development_devops", label: "DevOps 개발" },
  { value: "development_security", label: "보안 개발" },
  { value: "development_game", label: "게임 개발" },
  { value: "development_embedded", label: "임베디드 개발" },
  { value: "development_dba", label: "DBA" },
  { value: "plan", label: "기획" },
  { value: "media_editing_movie", label: "영화 편집" },
  { value: "media_filming_movie", label: "영화 촬영" },
  { value: "media_pd", label: "PD" },
  { value: "media_photographer", label: "사진작가" },
  { value: "media_sound_engineer", label: "음향 엔지니어" },
  { value: "marketing_management", label: "마케팅 관리" },
  { value: "marketing_promotion", label: "마케팅 홍보" },
  { value: "marketing_consulting", label: "마케팅 컨설팅" },
  { value: "translation_english", label: "영어 번역" },
  { value: "translation_japanese", label: "일본어 번역" },
  { value: "translation_chinese", label: "중국어 번역" },
  { value: "translation_spanish", label: "스페인어 번역" },
  { value: "translation_arabic", label: "아랍어 번역" },
  { value: "translation_hindi", label: "힌디어 번역" },
  { value: "translation_french", label: "프랑스어 번역" },
  { value: "translation_etc", label: "기타 번역" },
  { value: "etc", label: "기타" },
];

const locationOptions = [
  { value: "", label: "선택" },
  { value: "seoul", label: "서울" },
  { value: "busan", label: "부산" },
  { value: "incheon", label: "인천" },
  { value: "daegu", label: "대구" },
  { value: "gwangju", label: "광주" },
  { value: "daejeon", label: "대전" },
  { value: "ulsan", label: "울산" },
  { value: "gyeonggi", label: "경기도" },
  { value: "gangwon", label: "강원도" },
  { value: "chungbuk", label: "충청북도" },
  { value: "chungnam", label: "충청남도" },
  { value: "jeonbuk", label: "전라북도" },
  { value: "jeonnam", label: "전라남도" },
  { value: "gyeongbuk", label: "경상북도" },
  { value: "gyeongnam", label: "경상남도" },
  { value: "jeju", label: "제주도" },
];

const recruitmentTypeOptions = [
  { value: "hackathon", label: "해커톤" },
  { value: "side_project", label: "사이드 프로젝트" },
  { value: "contest", label: "공모전" },
  { value: "etc", label: "기타" },
];

const RegisterTeam = ({ setIsCreateTeam }) => {
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [domain, setDomain] = useState([]);
  const [location, setLocation] = useState("");
  const [recruitmentType, setRecruitmentType] = useState("");
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
      !domain.length ||
      !location ||
      !recruitmentType ||
      !phoneNumber ||
      !email
    ) {
      setErrors({
        teamName: teamName ? "" : "팀명을 입력해 주세요",
        teamDescription: teamDescription ? "" : "팀 상세 소개를 입력해 주세요",
        domain: domain.length ? "" : "분야를 선택해 주세요",
        location: location ? "" : "활동 지역을 선택해 주세요",
        recruitmentType: recruitmentType ? "" : "구인 유형을 선택해 주세요",
        phoneNumber: phoneNumber ? "" : "연락처를 입력해 주세요",
        email: email ? "" : "이메일을 입력해 주세요",
      });
      return;
    } else {
      const data = {
        name: teamName,
        introduction: teamDescription,
        domain: domain.map((opt) => opt.value),
        location: location,
        recruitmentType: recruitmentType.value,
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
                <Select
                  options={occupationOptions}
                  isMulti
                  value={domain}
                  onChange={(selected) => setDomain(selected)}
                  styles={{ marginTop: "15px", width: "330px" }}
                />
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
                <Select
                  options={recruitmentTypeOptions}
                  value={recruitmentType}
                  onChange={(selected) => setRecruitmentType(selected)}
                  styles={{ marginTop: "15px", width: "330px" }}
                />
                {errors.recruitmentType && (
                  <div style={{ color: "red" }}>{errors.recruitmentType}</div>
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
      <Footer />
    </div>
  );
};

export default RegisterTeam;
