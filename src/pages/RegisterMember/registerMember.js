import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Explanation,
  Profile,
  Input,
  SaveButton,
  Tag,
  Title,
  Container,
  Introduce,
  RegistrationButton,
} from "./styles";
import Navigation from "../../components/Navigation/navigation";
import { ReactComponent as Line } from "../../assets/Line.svg";
import { teamAPI } from "../../api/teamAPI";
import { useNavigate } from "react-router-dom";
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

const RegisterMember = ({ setIsCreateTeam }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [vacancies, setVacancies] = useState(0);
  const [teamId, setTeamId] = useState(0);
  const [occupationClassifications, setOccupationClassifications] = useState(
    [],
  );
  const [publish, setPublish] = useState(true);
  const [expiredDate, setExpiredDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (value, setter) => {
    setter(value);
  };

  const registerTeamAnnouncement = async () => {
    if (
      !title ||
      !description ||
      !vacancies ||
      !occupationClassifications ||
      !publish ||
      !expiredDate ||
      !location
    ) {
      alert("모든 항목을 채워주세요");
      return;
    }
    const data = {
      teamId: teamId,
      title: title,
      description: description,
      vacancies: vacancies,
      occupationClassifications: occupationClassifications.map(
        (opt) => opt.value,
      ),
      publish: publish,
      expiredDate: expiredDate.toISOString(),
      region: location.label,
    };

    console.log(data);

    teamAPI
      .postNewTeamAnnouncement(data)
      .then((res) => {
        console.log(res);
        navigate("/team");
      })
      .catch((err) => {
        console.log(err);
      });
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
        <Title>팀 모집 공고</Title>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Container>
          <Title style={{ marginLeft: 35, marginTop: 35 }}>
            팀원 모집 공고
          </Title>
          <Line
            style={{
              marginTop: "22px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />

          <Tag style={{ marginLeft: 60, marginTop: 20 }}>공고 제목</Tag>
          <Input
            style={{
              width: 790,
              marginLeft: 60,
              marginRight: "auto",
              marginTop: 20,
            }}
            value={title}
            onChange={(e) => handleChange(e.target.value, setTitle)}
          />
          <div style={{ marginLeft: 60, marginTop: 20 }}>
            <Tag>프로필 설정</Tag>
            <Tag style={{ marginLeft: 190 }}>팀 상세 소개</Tag>
          </div>
          <div style={{ marginLeft: 60, marginTop: 20, display: "flex" }}>
            <Profile />
            <Introduce
              value={description}
              onChange={(e) => handleChange(e.target.value, setDescription)}
            />
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
              <Select
                options={occupationOptions}
                isMulti
                value={occupationClassifications}
                onChange={(selected) => setOccupationClassifications(selected)}
                styles={{ marginTop: "10px", width: "330px" }}
              />
              <Tag style={{ marginTop: "45px" }}>모집 마감일</Tag>
              <DatePicker
                selected={expiredDate}
                onChange={(date) => setExpiredDate(date)}
                dateFormat="yyyy-MM-dd"
                style={{ marginTop: "10px", width: "330px" }}
              />
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
              <Input
                value={vacancies}
                onChange={(e) => handleChange(e.target.value, setVacancies)}
                style={{ marginTop: "10px", width: "330px" }}
              />
              <Tag>팀 ID</Tag>
              <Input
                value={teamId}
                onChange={(e) => handleChange(e.target.value, setTeamId)}
                style={{ marginTop: "10px", width: "330px" }}
              />
              <Tag style={{ marginTop: "45px" }}>활동 지역</Tag>
              <Select
                options={locationOptions}
                value={location}
                onChange={(selected) => setLocation(selected)}
                styles={{
                  marginTop: "10px",
                  width: "330px",
                }}
              />
            </div>
          </div>

          <RegistrationButton onClick={registerTeamAnnouncement}>
            등록하기
          </RegistrationButton>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterMember;
